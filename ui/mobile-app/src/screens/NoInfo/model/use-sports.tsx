import {
  Sport,
  SportList,
  useGetSportsLazyQuery,
} from '@src/shared/generated/types/graphql'
import { useEffect, useState } from 'react'

export const useSports = () => {
  const [sportsList, setSportsList] = useState<SportList>()
  const [getSports] = useGetSportsLazyQuery()

  useEffect(() => {
    async function fetchData() {
      const response = await getSports({ variables: { limit: 50 } })
      if (response.data?.getSports.__typename === 'SportList') {
        const sportsList = response.data.getSports
        setSportsList(sportsList)
      }
    }

    fetchData()
  }, [])

  return {
    sportsList,
  }
}
