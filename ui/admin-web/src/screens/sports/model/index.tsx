import { SportList, useGetSportsLazyQuery } from '@/shared/generated/graphql/graphql'
import { useEffect, useState } from 'react'

const LIMIT = 10

export const useSports = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<SportList>()

    const [getAllSports, { loading }] = useGetSportsLazyQuery({})

    const actions = {
        getSports: async () => {
            const { data } = await getAllSports({
                variables: {
                    limit: LIMIT,
                },
            })
            if (data && data.getSports.__typename === 'SportList') {
                const loadedData = data.getSports
                setData(loadedData)
            }
        }
    }
    const handlers = {
        onRefresh: async () => {
            setRefreshing(true)
            await actions.getSports()
            setRefreshing(false)
        },
        // onEndReached: async () => {
        //     await actions.loadMorePublications()
        // },
    }

    useEffect(() => {
        handlers.onRefresh()
    }, [])


    return {
        handlers,
        data,
        //isEndOfList: feed.isEndOfList,
        //renderItem,
        isLoading: loading,
        refreshing,
    }
}
