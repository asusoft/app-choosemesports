import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FullAlbumFragment } from '@src/shared/generated/types/graphql'

export type AuthStackParamList = {
  HomeScreen: undefined
  AlbumScreen: { id: string }
  AlbumContentEditScreen: {
    data: FullAlbumFragment
    contentEditType: 'ADD' | 'REMOVE'
  }
  AlbumCreateScreen: undefined
  AlbumManagingScreen: undefined
  AlbumSubscriptionsScreen: undefined
  ProfileScreen: undefined
  TrackCreateScreen: undefined
  TracksScreen: { id: string }
}

export type ScreenNavigationProp<
  T extends ParamListBase,
  RouteName extends keyof T = keyof ParamListBase,
> = NativeStackScreenProps<T, RouteName>

export type TAuthScreenNavigationProp<RouteName extends keyof AuthStackParamList> =
  ScreenNavigationProp<AuthStackParamList, RouteName>
