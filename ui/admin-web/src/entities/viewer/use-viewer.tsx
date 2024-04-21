
import { useEffect, useState } from 'react'
import { useReactiveVar } from '@apollo/client'
import { hasTokensVar, initialViewerState, viewerVar } from '@/shared/apollo'
import { AdminIn, useAdminLoginMutation, useGetAdminMeLazyQuery } from '@/shared/generated/graphql/graphql'
import { Navigate, useNavigate } from 'react-router-dom'

export const useViewer = () => {
  const viewer = useReactiveVar(viewerVar)
  const hasTokens = useReactiveVar(hasTokensVar)
  const [isCheckingToken, setIsCheckingToken] = useState(true)
  const [login] = useAdminLoginMutation()
  const [getMe, { loading: getMeLoading }] = useGetAdminMeLazyQuery()

  const navigate = useNavigate();

  const actions = {
    login: async (input: AdminIn) => {
      const response = await login({ variables: { input } })

      if (response.data) {
        if (response.data?.adminLogin.__typename === 'BaseError') {
          return response.data?.adminLogin.status
        }

        const token = response.data?.adminLogin.token

        localStorage.setItem('token', token)
        hasTokensVar(true)
        navigate('/')
      }
    },
    getMe: async () => {
      const response = await getMe()
      if (response.data?.getAdminMe.__typename === 'Admin') {
        viewerVar(response.data.getAdminMe)
      }
    },
    resetMe: () => {
      viewerVar(initialViewerState)
    },
    logout: async () => {
      localStorage.setItem('token', '')
      hasTokensVar(false)
      navigate('/auth')
    },
  }

  useEffect(() => {
    const timer = setTimeout(async () => {
      const token = localStorage.getItem('token')
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
