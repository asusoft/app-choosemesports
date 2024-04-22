import { FullSportFragment, PositionIn, StatIn, UniqueFieldIn, useAddSportUniqueFieldMutation, useCreatePositionMutation, useRetrieveSportLazyQuery } from '@/shared/generated/graphql/graphql'
import { createContext, useContext, useEffect, useState } from 'react'

export const SportContext = createContext({} as ReturnType<typeof useSport>)
export const useSportContext = () => useContext(SportContext)
export const { Provider: SportContextProvider } = SportContext

export const useSport = (id: string) => {

  const [sport, setSport] = useState<FullSportFragment>()
  const [retrievSport] = useRetrieveSportLazyQuery()
  const [addPosition] = useCreatePositionMutation()
  const [addUniqueField] = useAddSportUniqueFieldMutation()

  const actions = {
    getSport: async () => {
        const response = await retrievSport({variables: { id }})
        if(response.data?.retrieveSport.__typename === 'Sport') {
            console.log(response.data.retrieveSport)
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
            return response.data.createPosition
        }
    },
    addUniqueField: async (label: string) => {
        const input: UniqueFieldIn = {
            sportID: id,
            label,
        }
        const response = await addUniqueField({variables: { input }})

        if(response.data?.addSportUniqueField?.__typename === 'BaseError'){
            return response.data?.addSportUniqueField
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
