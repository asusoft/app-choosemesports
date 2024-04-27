import {
  Gender,
  PlayerAdditionalField,
  PlayerContactInUpdate,
  PlayerPersonalInfoIn,
  PlayerPositionIn,
  Position,
  PositionIn,
  Sport,
} from '@src/shared/generated/types/graphql'
import React, { createContext, PropsWithChildren, useState } from 'react'

type State = {
  sport: Sport | undefined
  sportID: String
  personal: PlayerPersonalInfoIn
  contact: PlayerContactInUpdate
  positions: PlayerPositionIn[]
  additionalFields: PlayerAdditionalField[]
  selectedPosition: Position | undefined
  isLoading: boolean
}

const initialState: State = {
  sport: undefined,
  sportID: '',
  personal: {
    about: '',
    dateOfBirth: '',
    gender: Gender.Female,
    height: '',
    nationality: {
      code: '',
      country: '',
    },
    weight: '',
  },
  contact: {
    phone: '',
    twitter: '',
    instagram: '',
    youtube: '',
    facebook: '',
  },
  positions: [],
  additionalFields: [],
  selectedPosition: undefined,
  isLoading: false,
}

type ContextProps = [State, React.Dispatch<React.SetStateAction<State>>]

export const StateContext = createContext<ContextProps>({} as ContextProps)

type ProviderProps = PropsWithChildren

export const StateProvider = (props: ProviderProps) => {
  const value = useState(initialState)
  return <StateContext.Provider value={value}>{props.children}</StateContext.Provider>
}
