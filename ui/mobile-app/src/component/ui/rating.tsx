import * as React from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign' // Import from react-native-vector-icons

type RatingProps = {
  rating: number
  size: number
  containerStyle?: ViewStyle
  color: string
}

export default function Rating({ rating, size, containerStyle, color }: RatingProps) {
  const filledStars = Math.floor(rating)
  const maxStars = Array(5 - filledStars).fill('staro')
  const r = [...Array(filledStars).fill('star'), ...maxStars]

  return (
    <View style={{ ...styles.rating, ...containerStyle }}>
      {r.map((type, index) => {
        return <Icon key={index} name={type} size={size} color={color} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  ratingNumber: { marginHorizontal: 4, fontSize: 16, color: 'black' },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
