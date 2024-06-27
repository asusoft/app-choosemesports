import { useContext, useState } from 'react'
import { StateContext } from './context'
import {
  InputMaybe,
  PlayerAdditionalField,
  PlayerContactInUpdate,
  PlayerPersonalInfoIn,
  PlayerPositionIn,
  Scalars,
  Sport,
  useAddPlayerAdditionalFieldsMutation,
  useAddPlayerPersonalInfoMutation,
  useAddPlayerPositionsMutation,
  useSetPlayerSportMutation,
  useUpdatePlayerMutation,
} from '@src/shared/generated/types/graphql'
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
  const [setPlayerSport] = useSetPlayerSportMutation()
  const [addPlayerPositions] = useAddPlayerPositionsMutation()
  const [addPlayerFields] = useAddPlayerAdditionalFieldsMutation()
  const [addPlayerPersonalInfo] = useAddPlayerPersonalInfoMutation()
  const [updatePlayer] = useUpdatePlayerMutation()

  const [
    {
      sport,
      sportID,
      personal,
      contact,
      positions,
      additionalFields,
      selectedPosition,
      isLoading,
    },
    setState,
  ] = useCustomState()

  const actions = {
    savePlayerInfo: async (contacts: PlayerContactInUpdate) => {
      setState(state => ({ ...state, isLoading: true }))
      sportID && (await setPlayerSport({ variables: { id: sportID } }))
      additionalFields &&
        additionalFields.length > 0 &&
        (await addPlayerFields({ variables: { data: { fields: additionalFields } } }))
      positions &&
        positions.length > 0 &&
        (await addPlayerPositions({ variables: { data: { positions: positions } } }))
      personal && (await addPlayerPersonalInfo({ variables: { data: personal } }))
      // contact &&
      //   (await updatePlayer({
      //     variables: {
      //       data: {
      //         contact: contacts,
      //         personal: personal,
      //       },
      //     },
      //   }))
      setState(state => ({ ...state, isLoading: false }))
    },
  }

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
    onAddSinglePosition: (positionIn: PlayerPositionIn) => {
      const isPositionExists = positions.some(pos => pos.name === positionIn.name)

      if (!isPositionExists) {
        setState(state => ({
          ...state,
          positions: [...positions, positionIn],
          selectedPosition: undefined,
        }))
      } else {
        setState(state => ({ ...state, selectedPosition: undefined }))
      }
    },
    onRemovePosition: (name: string) => {
      setState(state => ({
        ...state,
        positions: state.positions.filter(position => position.name !== name),
      }))
    },
    onSavePositions: () => {
      navigate('FourthStep')
    },

    onSavePersonalInfo: (info: PlayerPersonalInfoIn) => {
      setState(state => ({ ...state, personal: info }))
      navigate('FifthStep')
    },

    onSkip: (contact: PlayerContactInUpdate) => {
      actions.savePlayerInfo(contact)
    },
    onSaveContacts: (contact: PlayerContactInUpdate) => {
      actions.savePlayerInfo(contact)
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
    isLoading,
  }
}
