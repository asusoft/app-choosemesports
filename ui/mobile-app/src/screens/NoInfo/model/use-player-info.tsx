import { useContext } from 'react'
import { StateContext } from './context'
import { PlayerAdditionalField, Sport } from '@src/shared/generated/types/graphql'
import { useAppNavigation } from '@src/navigations/hooks'
import { TNoInfoStackParamList } from '@src/navigations/types/NoInfoStack.types'

export type AdditionalFields = {
  [key: string]: string
}

const useCustomState = () => {
  const context = useContext(StateContext)
  if (!context) {
    throw new Error('useCustomState must be used within a StateProvider')
  }
  return context
}

export const usePlayerInfo = () => {
  const { navigate } = useAppNavigation<TNoInfoStackParamList>()
  const [
    { sport, sportID, personal, contact, positions, additionalFields, selectedPosition },
    setState,
  ] = useCustomState()

  const actions = {}

  const handlers = {
    onSportIdChange: (sportID: string) => setState(state => ({ ...state, sportID })),

    onSportChange: (sport: Sport) => {
      setState(state => ({ ...state, sport }))
      handlers.onSportIdChange(sport.id)
    },
    onSportSelected: () => {
      if (sport?.uniqueFields) navigate('SecondStep')
      else if (sport?.positions) navigate('ThirdStep')
      else navigate('FourthStep')
    },
    onAdditionalFieldAdded: (fields: PlayerAdditionalField[]) => {
      setState(state => ({ ...state, additionalFields: fields }))
      if (sport?.positions) navigate('ThirdStep')
      else navigate('FourthStep')
    },
    onSelectedPositionIdChange: (positionIdToFind: String) => {
      const sportPositions = sport?.positions?.positions

      const foundPosition = sportPositions?.find(
        position => position.id === positionIdToFind,
      )
      if (foundPosition) {
        setState(state => ({ ...state, selectedPosition: foundPosition }))
      } else {
        setState(state => ({ ...state, selectedPosition: undefined }))
      }
    },
  }

  return {
    sport,
    sportID,
    personal,
    contact,
    positions,
    additionalFields,
    handlers,
    selectedPosition,
  }
}
