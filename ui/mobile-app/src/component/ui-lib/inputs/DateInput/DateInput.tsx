import React from 'react'
import { useState } from 'react'
import { DateInputProps } from './types'
import DatePicker from 'react-native-date-picker'

export const DateInput = (props: DateInputProps) => {
  const [date, setDate] = useState(new Date())

  return (
    <DatePicker
      modal
      mode='date'
      open={props.open}
      date={date}
      onConfirm={date => {
        setDate(date)
        props.onChange(date.toISOString())
      }}
      onCancel={props.onCancel}
      maximumDate={props.maxDate || new Date()}
    />
  )
}
