import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './TextInput.styles'
import { TextInput } from 'react-native-paper';

export const CustomTextInput = ({label, placeholder, value, setValue, secureTextEntry = false}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={value => setValue(value)}
        style={styles.input} 
        secureTextEntry={secureTextEntry} 
      />
    </ View>
  );
};