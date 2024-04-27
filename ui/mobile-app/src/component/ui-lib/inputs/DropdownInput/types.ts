import { ItemType } from 'react-native-dropdown-picker'

type Item = ItemType<string>

export interface DropdownInputProps {
  placeholder: string
  value: any
  setValue: (value: any) => void
  items: Item[]
  emptyPlaceholder?: string
}
