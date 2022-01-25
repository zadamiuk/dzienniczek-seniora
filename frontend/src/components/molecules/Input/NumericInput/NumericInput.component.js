import * as React from 'react'
import { View, Text } from 'react-native'
import { styles } from './NumericInput.styles'
import { TextInput } from 'react-native-paper'

export const NumericInput = ({
  label,
  placeholder,
  value,
  setValue,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType="numeric"
        onChangeText={(value) => setValue(value)}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}
