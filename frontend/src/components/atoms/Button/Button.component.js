import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './Button.styles'

export const CustomButton = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.button}>{label}</Text>
    </Pressable>
  );
};