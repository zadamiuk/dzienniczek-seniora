import React, { useState } from 'react'
import { ScrollView, View, Image } from 'react-native'
import { styles } from './SignUpScreen.styles'
import { CustomTextInput } from '../../../src/components/molecules/Input/TextInput/TextInput.component'
import { CustomButton } from '../../../src/components/atoms/Button/Button.component'
import { Register } from '../../../services'
import { HelperText } from 'react-native-paper'

export const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')

  const onSignUp = (email, password, name) => {
    const payload = {
      email: email,
      password: password,
      name: name,
      is_active: true,
    }
    Register({ payload, navigation })
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
          label="Imię"
          placeholder="Wprowadź swoje imię"
          value={name}
          setValue={setName}
        />
        <CustomTextInput
          label="Hasło"
          placeholder="Wprowadź hasło"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <HelperText
          type="error"
          visible={password.length < 8}
          style={styles.helper}
        >
          Hasło musi mieć conajmniej 8 znaków
        </HelperText>
        <CustomTextInput
          label="Powtórz hasło"
          placeholder="Wprowadź ponownie hasło"
          value={password2}
          setValue={setPassword2}
          secureTextEntry
        />
        <HelperText
          type="error"
          visible={password2 !== password}
          style={styles.helper}
        >
          Podane hasła różnią się od siebie
        </HelperText>
        <CustomButton
          label="Zarejestruj się"
          onPress={() => onSignUp(email, password, name)}
        />
      </View>
    </ScrollView>
  )
}
