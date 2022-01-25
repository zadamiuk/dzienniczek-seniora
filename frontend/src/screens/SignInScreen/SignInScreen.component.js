import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './SignInScreen.styles'
import { CustomTextInput } from '../../src/components/molecules/Input/TextInput/TextInput.component'
import { CustomButton } from '../../src/components/atoms/Button/Button.component'
import { Login } from '../../services'

export const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignIn = (email, password) => {
    const payload = { email: email, password: password }
    Login(payload, navigation)
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <CustomTextInput
          label="Email"
          placeholder="Wprowadź adres email"
          value={email}
          setValue={setEmail}
        />
        <CustomTextInput
          label="Hasło"
          placeholder="Wprowadź hasło"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton
          label="Zaloguj się"
          onPress={() => onSignIn(email, password)}
        />
      </View>
    </ScrollView>
  )
}
