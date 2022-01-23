import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './NoMeasurement.styles';
import { SmallAddButton } from '../../atoms/SmallAddButtom/SmallAddButton.component';

const types = {
  'blood-pressure': 'AddBloodPressure',
  'sugar': 'AddSugarLevel',
  'weight': 'AddWeight'
}

export const NoMeasurement = ({ type, navigation, supervised }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.none}>Brak wyników</Text>
      { !supervised && 
        <SmallAddButton 
          label="Dodaj pomiar"
          onPress={() => navigation.navigate(types[type])}
        />
      }
    </View>
  )
}