import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import DropdownPicker from 'react-native-dropdown-picker'
import { DropdownInputProps } from './types'
import { useTheme } from '@src/services/theme/hooks'
import { ArrowDownIcon, ArrowUpIcon } from '@src/component/icons'

export const DropdownInput = (props: DropdownInputProps) => {
  const { theme } = useTheme()
  const { value } = props
  const [open, setOpen] = useState(false)

  const containerStyle: StyleProp<ViewStyle> = [
    styles.inputContainer,
    {
      borderColor: theme.palette.border,
      backgroundColor: '#141821',
    },
  ]

  const dropdownContainerStyle: StyleProp<ViewStyle> = [
    styles.dropdownContainer,
    {
      borderColor: theme.palette.border,
      backgroundColor: '#141821',
    },
  ]

  const textStyle: StyleProp<TextStyle> = [
    styles.inputText,
    {
      color: theme.palette.typography,
      fontSize: 18,
    },
    styles.verticalPaddings,
  ]

  return (
    <DropdownPicker
      {...props}
      props={{ activeOpacity: 1 }}
      itemProps={{ activeOpacity: 1 }}
      multiple={false}
      scrollViewProps={{ nestedScrollEnabled: true }}
      listMode={'SCROLLVIEW'}
      open={open}
      ArrowDownIconComponent={() => (
        <ArrowDownIcon stroke={theme.isDarkMode ? 'white' : 'black'} />
      )}
      ArrowUpIconComponent={() => (
        <ArrowUpIcon stroke={theme.isDarkMode ? 'white' : 'black'} />
      )}
      setOpen={setOpen}
      showTickIcon={false}
      placeholderStyle={{ color: theme.palette.placeholder }}
      labelStyle={{
        color: value === 'WITHOUT_THEME' ? '#72777A' : theme.palette.typography,
      }}
      style={containerStyle}
      textStyle={textStyle}
      translation={{
        NOTHING_TO_SHOW: props.emptyPlaceholder,
      }}
      dropDownContainerStyle={dropdownContainerStyle}
      listItemContainerStyle={{ backgroundColor: '#141821', padding: 0 }}
      selectedItemContainerStyle={{
        backgroundColor: theme.palette.primary,
        padding: 0,
      }}
    />
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    // borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 16,
    minHeight: 48,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  inputText: {
    fontSize: 21,
    flex: 1,
  },
  verticalPaddings: {
    paddingBottom: 9,
    paddingTop: 9,
  },
  dropdownContainer: {
    marginTop: 7,
  },
})
