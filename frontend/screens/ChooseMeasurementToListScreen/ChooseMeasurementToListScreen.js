import React from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from '../../src/components/atoms/Button/Button.component'
import { CustomText } from '../../src/components/atoms/Text/Text.component';

export const ChooseMeasurementToListScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CustomText text="Wybierz które wyniki chcesz obejrzeć:"/>
        <CustomButton
            label="Ciśnienie krwi"
            onPress={() => navigation.navigate('ListBloodPressure')}
        />
        <CustomButton
            label="Poziom cukru we krwi"
            onPress={() => navigation.navigate('ListSugarLevel')}
        />
        <CustomButton
            label="Waga"
            onPress={() => navigation.navigate('ListWeight')}
        />
      </View>
    );
  }