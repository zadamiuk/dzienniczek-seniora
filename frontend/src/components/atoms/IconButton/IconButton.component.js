import * as React from 'react';
import { styles } from './IconButton.styles'
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const IconButton = ({ label, onPress, icon }) => {
  return (
    <Icon.Button
      name="clock"
      style={styles.iconButton}
      onPress={() => onPress()}
    > 
      <Text style={styles.text}>Zmień godzinę</Text>
    </Icon.Button>
  );
};