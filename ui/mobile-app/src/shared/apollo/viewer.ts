import { makeVar } from '@apollo/client'
import { ERole, FullAuthPlayerFragment } from '@src/shared/generated/types/graphql'

const initialState: FullAuthPlayerFragment = {
  id: '',
  userID: '',
  sport: undefined,
  name: '',
  login: '',
  email: '',
  role: ERole.Player,
  contact: {
    __typename: undefined,
    phone: undefined,
    youtube: undefined,
    facebook: undefined,
    twitter: undefined,
    instagram: undefined,
  },
  personal: {
    __typename: undefined,
    dateOfBirth: undefined,
    gender: undefined,
    height: undefined,
    weight: undefined,
    about: undefined,
    nationality: undefined,
  },
  playerPositions: undefined,
  avatar: undefined,
  additionalFields: [
    {
      label: '',
      value: '',
    },
  ],
}

const viewerVar = makeVar<FullAuthPlayerFragment>(initialState)

export { initialState as initialViewerState, viewerVar }
