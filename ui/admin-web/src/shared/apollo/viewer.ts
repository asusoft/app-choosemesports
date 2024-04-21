import { makeVar } from '@apollo/client'
import { Admin } from '../generated/graphql/graphql'

const initialState: Admin = {
  id: '',
  login: '',
}

const viewerVar = makeVar<Admin>(initialState)

export { initialState as initialViewerState, viewerVar }
