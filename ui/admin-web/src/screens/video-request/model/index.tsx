import { useGetVideoRequestsLazyQuery, VideoRequestListFragment } from '@/shared/generated/graphql/graphql'
import { useEffect, useState } from 'react'

const LIMIT = 5

export const useVideoRequests = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<VideoRequestListFragment>()

    const [getAllRequests, { loading }] = useGetVideoRequestsLazyQuery({})

    const actions = {
        getRequests: async () => {
            const { data } = await getAllRequests()

            if (data && data.getVideoRequests.__typename === 'VideoRequestList') {
                const loadedData = data.getVideoRequests
                setData(loadedData)
            }
        },
    }
    const handlers = {
        onRefresh: async () => {
            setRefreshing(true)
            await actions.getRequests()
            setRefreshing(false)
        },
    }

    useEffect(() => {
        handlers.onRefresh()
    }, [])


    return {
        handlers,
        actions,
        data,
        //isEndOfList: feed.isEndOfList,
        //renderItem,
        isLoading: loading,
        refreshing,
    }
}
