import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './AddMeasurements.styles'
import { NumericInput } from '../../../src/components/molecules/Input/NumericInput/NumericInput.component'
import { CustomButton } from '../../../src/components/atoms/Button/Button.component'
import { AddWeight } from '../../../services'
import { HelperText } from 'react-native-paper'
import { MIN_WEIGHT, MAX_WEIGHT } from '../../../config/constsForMeasurements'

export const AddWeightScreen = ({ navigation }) => {
  const [weight, setWeight] = useState('')

  const onAdd = async (weight) => {
    const payload = {
      weight_value: weight,
    }
    AddWeight({ payload, navigation })
  }

  const weightCheck = () => {
    return (weight < MIN_WEIGHT || weight > MAX_WEIGHT) && weight !== ''
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <NumericInput
          label="Waga"
          placeholder="Wprowadź zmierzoną wartość"
          value={weight}
          setValue={setWeight}
        />
        <HelperText type="error" visible={weightCheck()} style={styles.helper}>
          Podaj prawidłową wagę
        </HelperText>
        <CustomButton
          label="Zapisz wyniki pomiaru"
          onPress={() => onAdd(weight)}
        />
      </View>
    </ScrollView>
  )
}
