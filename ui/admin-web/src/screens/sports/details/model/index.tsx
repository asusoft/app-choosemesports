import { FullSportFragment, PositionIn, StatIn, useCreatePositionMutation, useRetrieveSportLazyQuery } from '@/shared/generated/graphql/graphql'
import { createContext, useContext, useEffect, useState } from 'react'

export const SportContext = createContext({} as ReturnType<typeof useSport>)
export const useSportContext = () => useContext(SportContext)
export const { Provider: SportContextProvider } = SportContext

export const useSport = (id: string) => {

  const [sport, setSport] = useState<FullSportFragment>()
  const [retrievSport] = useRetrieveSportLazyQuery()
  const [addPosition] = useCreatePositionMutation()

  const actions = {
    getSport: async () => {
        const response = await retrievSport({variables: { id }})
        if(response.data?.retrieveSport.__typename === 'Sport') {
            setSport(response.data.retrieveSport)
        }
    },
    addPosition: async (name: string, stats: StatIn[]) => {

        const input: PositionIn = {
            sportID: id,
            name,
            stats
        }
        const response = await addPosition({variables: { input }})

        if(response.data?.createPosition.__typename === 'BaseError'){
            return response.data.createPosition.status
        }
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
    sport,
    actions
  }
}
