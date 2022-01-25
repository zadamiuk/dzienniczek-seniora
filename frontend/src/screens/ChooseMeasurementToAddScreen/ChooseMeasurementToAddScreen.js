import React from 'react'
import { View, Text } from 'react-native'
import { CustomButton } from '../../src/components/atoms/Button/Button.component'
import { CustomText } from '../../src/components/atoms/Text/Text.component'

export const ChooseMeasurementToAddScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
      }}
    >
      <CustomText text="Wybierz które badanie chcesz dodać:" />
      <CustomButton
        label="Ciśnienie krwi"
        onPress={() => navigation.navigate('AddBloodPressure')}
      />
      <CustomButton
        label="Poziom cukru we krwi"
        onPress={() => navigation.navigate('AddSugarLevel')}
      />
      <CustomButton
        label="Waga"
        onPress={() => navigation.navigate('AddWeight')}
      />
    </View>
  )
}
