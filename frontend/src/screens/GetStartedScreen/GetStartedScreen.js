import React from 'react'
import { View } from 'react-native'
import { CustomText } from '../../../src/components/atoms/Text/Text.component'
import { CustomButton } from '../../../src/components/atoms/Button/Button.component'
import { CustomOutlinedButton } from '../../../src/components/atoms/OutlinedButton/OutlinedButton.component'
import { getStringValueFromLocalStorage, refreshToken } from '../../../services'

export const GetStartedScreen = ({ navigation }) => {
  getStringValueFromLocalStorage('refresh')
  .then(res => { 
    refreshToken(navigation);
    if (res) {
      navigation.navigate('Home');
    }
  })
  .catch(error => console.log(error));
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomText text="Dzienniczek Seniora" />
      <CustomButton
        label="Zaloguj się"
        onPress={() => navigation.navigate('SignIn')}
      />
      <CustomOutlinedButton
        label="Załóż konto"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  )
}
