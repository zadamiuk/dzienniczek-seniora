import * as React from 'react'
import { Text } from 'react-native'
import { styles } from './Text.styles'

export const CustomText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>
}
