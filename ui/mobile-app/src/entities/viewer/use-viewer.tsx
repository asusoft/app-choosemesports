import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useReactiveVar } from '@apollo/client'
import {
  FullAuthPlayerFragment,
  LogInInput,
  useGetMeLazyQuery,
  useGetPlayerMeLazyQuery,
  useLoginMutation,
} from '../../shared/generated/types/graphql'
import { hasInfoVar } from '@src/shared/apollo/has-info'
import { hasTokensVar, initialViewerState, viewerVar } from '@src/shared/apollo'

export const useViewer = () => {
  const [isCheckingToken, setIsCheckingToken] = useState(true)
  const viewer = useReactiveVar(viewerVar)
  const hasTokens = useReactiveVar(hasTokensVar)
  const hasInfo = useReactiveVar(hasInfoVar)
  const [getMe, { loading: getMeLoading }] = useGetMeLazyQuery()
  const [getPlayerMe, { loading: getPlayerMeLoading }] = useGetPlayerMeLazyQuery()
  const [login] = useLoginMutation()

  const actions = {
    login: async (input: LogInInput) => {
      const response = await login({ variables: { input } })
      if (response.data?.login.__typename === 'AuthUser') {
        const token = response.data.login.token
        await getMe()
        AsyncStorage.setItem('token', token).then(() => hasTokensVar(true))
        return
      }
      return response.data?.login?.status || null
    },
    getMe: async () => {
      const response = await getMe()
      if (response.data?.getMe?.__typename === 'User') {
        const authUser = response.data.getMe
        const playerResponse = await getPlayerMe()

        if (playerResponse.data?.getPlayerMe?.__typename === 'Player') {
          const player = playerResponse.data.getPlayerMe
          const authPlayer: FullAuthPlayerFragment = {
            id: player.id,
            userID: authUser.id,
            sport: player.sport ? { ...player.sport } : undefined,
            name: authUser.name,
            login: authUser.login,
            email: authUser.email,
            role: authUser.role,
            avatar: authUser.avatar ? { ...authUser.avatar } : undefined,
            contact: { ...player.contact },
            personal: { ...player.personal },
            playerPositions: player.playerPositions
              ? [...player.playerPositions]
              : undefined,
            additionalFields: player.additionalFields
            ? [...player.additionalFields]
            : undefined,
          }
          if (player.sport) hasInfoVar(true)
          viewerVar(authPlayer)
        }
      }
    },
    resetMe: () => {
      viewerVar(initialViewerState)
    },
    logout: async () => {
      await AsyncStorage.setItem('token', '')
      hasTokensVar(false)
      hasInfoVar(false)
    },
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token')

      if (token) {
        await actions.getMe()
        hasTokensVar(true)
      } else {
        hasTokensVar(false)
      }
      setIsCheckingToken(false)
    }

    const timer = setTimeout(checkToken, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (hasTokens && !viewer.id) {
      actions.getMe()
    } else if (!hasTokens && !isCheckingToken) {
      actions.resetMe()
    }
  }, [hasTokens, isCheckingToken])

  return {
    viewer,
    isAuth: hasTokens,
    isCheckingToken,
    actions,
    hasInfo,
  }
}
