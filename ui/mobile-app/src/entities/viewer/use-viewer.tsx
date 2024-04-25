import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useReactiveVar } from '@apollo/client'
import { hasTokensVar, initialViewerState, viewerVar } from '../../shared/apollo'
import { LogInInput, useGetMeLazyQuery, useLoginMutation } from '../../shared/generated/types/graphql'

export const useViewer = () => {
  const viewer = useReactiveVar(viewerVar)
  const hasTokens = useReactiveVar(hasTokensVar)
  const [isCheckingToken, setIsCheckingToken] = useState(true)
  const [login] = useLoginMutation()
  const [getMe, { loading: getMeLoading }] = useGetMeLazyQuery()

  const actions = {
    login: async (input: LogInInput) => {
      const response = await login({ variables: { input } })

      if (response.data) {
        if (response.data?.login.__typename === 'BaseError') {
          return response.data.login.status
        }

        const token = response.data?.login.token

        console.log(token)

        AsyncStorage.setItem('token', token).then(() => hasTokensVar(true))
        return null
      }
    },
    getMe: async () => {
      const response = await getMe()
      if (response.data?.getMe.__typename === 'User') {
        viewerVar(response.data.getMe)
      }
    },
    resetMe: () => {
      viewerVar(initialViewerState)
    },
    logout: async () => {
      AsyncStorage.setItem('token', '').then(() => hasTokensVar(false))
      hasTokensVar(false)
    },
  }

  useEffect(() => {
    const timer = setTimeout(async () => {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        hasTokensVar(true)
        actions.getMe()
      } else {
        hasTokensVar(false)
      }
      setIsCheckingToken(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (hasTokens && !viewerVar().id) {
      actions.getMe()
    }
    if (!hasTokens && !isCheckingToken) {
      actions.resetMe()
    }
  }, [!!hasTokens, isCheckingToken])

  return {
    viewer,
    isAuth: hasTokens,
    isCheckingToken,
    actions,
  }
}
