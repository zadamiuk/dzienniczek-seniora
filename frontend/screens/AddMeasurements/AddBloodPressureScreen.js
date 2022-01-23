import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './AddMeasurements.styles';
import { NumericInput } from '../../src/components/molecules/Input/NumericInput/NumericInput.component';
import { CustomButton } from '../../src/components/atoms/Button/Button.component';
import { AddBloodPressure } from '../../services';
import { HelperText } from 'react-native-paper';
import { 
  MIN_SYSTOLIC, 
  MIN_DIASTOLIC, 
  MIN_PULSE,
  MAX_SYSTOLIC, 
  MAX_DIASTOLIC,
  MAX_PULSE
} from '../../config/constsForMeasurements';


export const AddBloodPressureScreen = ({ navigation }) => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [pulse, setPulse] = useState('');

  const onAdd = async (systolic, diastolic, pulse) => {
    const payload = { 
      systolic: systolic, 
      diastolic: diastolic,
      pulse: pulse,
    }
    AddBloodPressure({ payload, navigation });
  }

  const systolicCheck = () => {
    return (systolic < MIN_SYSTOLIC || systolic > MAX_SYSTOLIC) && systolic !== '';
  }

  const diastolicCheck = () => {
    return (diastolic < MIN_DIASTOLIC || diastolic > MAX_DIASTOLIC) && diastolic !== '';
  }

  const pulseCheck = () => {
    return (pulse < MIN_PULSE || pulse > MAX_PULSE) && pulse !== '';
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <NumericInput 
            label="Ciśnienie skurczowe"
            placeholder="Wprowadź zmierzoną wartość"
            value={systolic}
            setValue={setSystolic}
        />
        <HelperText type="error" visible={systolicCheck()} style={styles.helper}>
          Upewnij się, że wartość jest prawidłowa.
        </HelperText>
        <NumericInput 
            label="Ciśnienie rozkurczowe"
            placeholder="Wprowadź zmierzoną wartość"
            value={diastolic}
            setValue={setDiastolic}
        />
        <HelperText type="error" visible={diastolicCheck()} style={styles.helper}>
        Upewnij się, że wartość jest prawidłowa.
        </HelperText>
        <NumericInput 
            label="Tętno"
            placeholder="Wprowadź zmierzoną wartość"
            value={pulse}
            setValue={setPulse}
        />
        <HelperText type="error" visible={pulseCheck()} style={styles.helper}>
        Upewnij się, że wartość jest prawidłowa.
        </HelperText>
        <CustomButton 
            label="Zapisz wyniki pomiaru" 
            onPress={() => onAdd(systolic, diastolic, pulse)}
        />
      </View>
    </ScrollView>
  );
};