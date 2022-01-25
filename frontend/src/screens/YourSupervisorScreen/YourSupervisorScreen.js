import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { GetSupervisor, AddSupervisor } from '../../services';
import { CustomText } from '../../src/components/atoms/Text/Text.component';
import { CustomButton } from '../../src/components/atoms/Button/Button.component';
import { CustomTextInput } from '../../src/components/molecules/Input/TextInput/TextInput.component';
import { styles } from './YourSupervisor.styles'
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../config/helpers';

export const YourSupervisorScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [supervisorEmail, setSuperVisorEmail] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    GetSupervisor(setData, navigation);
  } , [isFocused])

  const addSupervisor = async (email) => {
    const payload = { 
      supervisor_email: email
    }
    AddSupervisor({ payload, navigation });
  }

  return (
    <View style={styles.root}>
      <Card style={styles.card}>
        { data ?
            (<>
                <CustomText text="Twój obecny opiekun:" />
                <Text style={styles.name}>{capitalizeFirstLetter(data.name)}</Text>
                <Text style={styles.email}>{data.email}</Text>
            </>) : (
                <Text style={styles.noData}>Nie masz jeszcze opiekuna</Text>
            )
        }
      </Card>
      <CustomText text="Jeśli chcech zmienić opiekuna, podaj jego adres email." />
      <CustomTextInput 
            label="Email"
            placeholder="Wprowadź email"
            value={supervisorEmail}
            setValue={setSuperVisorEmail}
        />
        <CustomButton 
            label="Zmień opiekuna" 
            onPress={() => addSupervisor(supervisorEmail)}
        />
    </View>
  )
}
