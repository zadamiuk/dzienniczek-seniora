import React, { useState } from 'react'
import { useEffect } from 'react'
import { View } from 'react-native'
import { CustomButton } from '../../../src/components/atoms/Button/Button.component'
import { CustomOutlinedButton } from '../../../src/components/atoms/OutlinedButton/OutlinedButton.component'
import { WelcomeComponent } from '../../../src/components/molecules/WelcomeComponent.js/WelcomeComponent'
import { GetHomePage } from '../../../services'
import { useIsFocused } from '@react-navigation/native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState({})
  const isFocused = useIsFocused()

  useEffect(() => {
    GetHomePage(setData, navigation)
  }, [isFocused])

  return (
    <View style={styles.root}>
      {data.name && <WelcomeComponent name={data.name} />}
      <CustomButton
        label="Dodaj pomiar"
        onPress={() => navigation.navigate('ChooseMeasurementToAdd')}
      />
      <CustomButton
        label="Lista pomiarów"
        onPress={() => navigation.navigate('ChooseMeasurementToList')}
      />
      {data.supervisor && (
        <CustomButton
          label="Twoi podopieczni"
          onPress={() => navigation.navigate('ListOfSeniors')}
        />
      )}
      <CustomOutlinedButton
        label="Ustawienia"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}
