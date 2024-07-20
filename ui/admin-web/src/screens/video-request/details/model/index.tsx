import { useAppNavigation } from '@/navigation/hooks/use-app-navigation'
import { useAcceptVideoRequestMutation, useRejectVideoRequestMutation, useRetrieveVideoRequestLazyQuery, VideoRequestFragment, VRejectionReason } from '@/shared/generated/graphql/graphql'
import { createContext, useContext, useEffect, useState } from 'react'

export const RequestContext = createContext({} as ReturnType<typeof useRequest>)
export const useRequestContext = () => useContext(RequestContext)
export const { Provider: RequestContextProvider } = RequestContext

export const useRequest = (id: string) => {
  const { navigateTo } = useAppNavigation()
  const [request, setRequest] = useState<VideoRequestFragment>()
  const [retrievRequest] = useRetrieveVideoRequestLazyQuery()
  const [acceptRequest, { loading: isAccepting }] = useAcceptVideoRequestMutation()
  const [rejectVideo, { loading: isRejecting}] = useRejectVideoRequestMutation()
 

  const actions = {
    getSport: async () => {
        const response = await retrievRequest({variables: { id }})
        if(response.data?.retrieveVideoRequest.__typename === 'VideoRequest' ) {
            setRequest(response.data.retrieveVideoRequest)
        }
    },
    acceptVideo: async () => {
        const response = await acceptRequest({variables: {requestID: id}})
        if(response.data?.acceptVideo?.__typename !== 'BaseError') navigateTo('/video-requests')
    },
    rejectVideo: async (reason: VRejectionReason) => {
        const response = await rejectVideo({variables: { input: {
            reason,
            requestID: id
        }}})
        if(response.data?.rejectVideo?.__typename !== 'BaseError') navigateTo('/video-requests')
    }
 }

  useEffect(() => {
    async function fetchData() {
        await actions.getSport()
    }

    fetchData()
   
  }, [id])

  return {
    value: id,
    request,
    actions,
    isAccepting,
    isRejecting
  }
}
