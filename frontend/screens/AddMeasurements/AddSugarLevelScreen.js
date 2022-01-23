import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './AddMeasurements.styles';
import { NumericInput } from '../../src/components/molecules/Input/NumericInput/NumericInput.component';
import { CustomButton } from '../../src/components/atoms/Button/Button.component';
import { AddSugar, getStringValueFromLocalStorage } from '../../services';
import { HelperText } from 'react-native-paper';
import { MIN_SUGAR, MAX_SUGAR } from '../../config/constsForMeasurements';

export const AddSugarLevelScreen = ({ navigation }) => {
  const [level, setLevel] = useState('');

  const onAdd = async (level) => {
    const payload = { 
      level: level,
    }
    AddSugar({ payload, navigation });
  }

  const sugarCheck = () => {
    return (level < MIN_SUGAR || level > MAX_SUGAR) && level !== '';
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <NumericInput 
            label="Poziom cukru"
            placeholder="Wprowadź zmierzoną wartość"
            value={level}
            setValue={setLevel}
        />
        <HelperText type="error" visible={sugarCheck()} style={styles.helper}>
          Podaj prawidłowy poziom cukru
        </HelperText>
        <CustomButton 
            label="Zapisz wyniki pomiaru" 
            onPress={() => onAdd(level)}
        />
      </View>
    </ScrollView>
  );
};