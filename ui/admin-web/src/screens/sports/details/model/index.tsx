import { FullSportFragment, useRetrieveSportLazyQuery } from '@/shared/generated/graphql/graphql'
import { createContext, useContext, useEffect, useState } from 'react'

export const SportContext = createContext({} as ReturnType<typeof useSport>)
export const useSportContext = () => useContext(SportContext)
export const { Provider: SportContextProvider } = SportContext

export const useSport = (id: string) => {

  const [sport, setSport] = useState<FullSportFragment>()
  const [retrievSport] = useRetrieveSportLazyQuery()

  const actions = {
    getSport: async () => {
        const response = await retrievSport({variables: { id }})
        if(response.data?.retrieveSport.__typename === 'Sport') {
            setSport(response.data.retrieveSport)
        }
    },
 }

  useEffect(() => {
    async function fetchData() {
        await actions.getSport()
    }

    fetchData()
   
  }, [id])

  return {
    value: id,
    sport,
    actions
  }
}
