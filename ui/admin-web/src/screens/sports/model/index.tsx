import { SportIn, SportList, useCreateSportMutation, useGetSportsLazyQuery } from '@/shared/generated/graphql/graphql'
import { useEffect, useState } from 'react'

const LIMIT = 5

export const useSports = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<SportList>()

    const [getAllSports, { loading }] = useGetSportsLazyQuery({})
    const [createSport] = useCreateSportMutation()

    const actions = {
        getSports: async () => {
            const { data } = await getAllSports()
            if (data && data.getSports.__typename === 'SportList') {
                const loadedData = data.getSports
                setData(loadedData)
            }
        },
        addSport: async (sportIn: SportIn) => {
            const response = await createSport({variables: {input: sportIn}})

            if (response.data?.createSport.__typename === 'BaseError') {
                return response.data.createSport
            }
            await handlers.onRefresh()
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
        actions,
        data,
        //isEndOfList: feed.isEndOfList,
        //renderItem,
        isLoading: loading,
        refreshing,
    }
}
