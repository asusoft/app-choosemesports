import { makeVar } from '@apollo/client'
import { FullUserFragment } from '@src/shared/generated/types/graphql'

const initialState: FullUserFragment = {
  id: '',
  createdAt: '',
  updatedAt: '',
  login: '',
  avatar: '',
  name: '',
  isAdmin: false,
  isScholar: false,
  isFollowing: false,
  followersCount: 0,
}

const viewerVar = makeVar<FullUserFragment>(initialState)

export { initialState as initialViewerState, viewerVar }
