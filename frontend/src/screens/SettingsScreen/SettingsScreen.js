import React from 'react'
import { View, Text } from 'react-native'
import { CustomButton } from '../../../src/components/atoms/Button/Button.component'
import { CustomOutlinedButton } from '../../../src/components/atoms/OutlinedButton/OutlinedButton.component'
import { Logout } from '../../../services'

export const SettingsScreen = ({ navigation }) => {
  const onLogout = () => {
    Logout(navigation)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomButton
        label="Przypomnienie"
        onPress={() => navigation.navigate('Notification')}
      />
      <CustomButton
        label="Twój opiekun"
        onPress={() => navigation.navigate('YourSupervisor')}
      />
      <CustomOutlinedButton label="Wyloguj" onPress={() => onLogout()} />
    </View>
  )
}
