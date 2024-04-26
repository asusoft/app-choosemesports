import { BottomBarParamList } from './BottomBar.types'
import { TNoAuthStackParamList } from './NoAuthStack.types'
import { TNoInfoStackParamList } from './NoInfoStack.types'

export type TMainStackParamList = {
  NoAuthStack: TNoAuthStackParamList
  BottomBar: BottomBarParamList
  NoInfo: TNoInfoStackParamList
}
