import React from 'react';
import { Text, View } from 'react-native';
import { capitalizeFirstLetter } from '../../../../config/helpers';
import { styles } from './WelcomeComponent.styles'

export const WelcomeComponent = ({ name }) => {  
  const displayedName = name.length ? capitalizeFirstLetter(name) : ''
  return (
    <View style={styles.root}>
        <Text style={styles.welcome}>Dzień dobry</Text>
        <Text style={styles.name}>{displayedName}!</Text>
    </View>
  );
};