import { makeVar } from '@apollo/client'
import { ERole, FullUserFragment } from '@src/shared/generated/types/graphql'

const initialState: FullUserFragment = {
  id: '',
  login: '',
  avatar: {
    id: '',
    path: ''
  },
  name: '',
  email: '',
  role: ERole.Player
}

const viewerVar = makeVar<FullUserFragment>(initialState)

export { initialState as initialViewerState, viewerVar }
