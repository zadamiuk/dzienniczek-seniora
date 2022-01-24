import React, { useState } from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { GetBloodPressureList } from '../../services';
import { BloodPressureTableComponent } from '../../src/components/organisms/BloodPressure/BloodPressureTable/BloodPressureTable';
import { BloodPressureChart } from '../../src/components/organisms/BloodPressure/BloodPressureGraph/BloodPressureGraph';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { MonthPicker } from '../../src/components/organisms/MonthPicker/MonthPicker';
import { styles } from './ListMeasurements.styles'

export const ListBloodPressureScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    GetBloodPressureList(setData, navigation);
  } , [isFocused])

    
  const setMonthToDisplay = (number) => {
    setMonth(number);
    setExpanded(false)
  }
  

  return (
    <ScrollView style={styles.view}>
      { MonthPicker(expanded, setMonthToDisplay, setExpanded) }
      { visible ? (
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setVisible(!visible)} style={styles.buttonVisible}>
            <Text style={styles.buttonTextVisible}>Ukryj wykresy</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setVisible(!visible)} style={styles.buttonInvisible}>
            <Text style={styles.buttonTextInvisible}>Pokaż wykresy</Text>
          </Pressable>
        </View>
      )}
      
      { (visible && data.length) ? <BloodPressureChart
        data={data}
        month={month}
      /> : <></> }
      <BloodPressureTableComponent
        data={data}
        navigation={navigation}
        month={month}
      />
    </ScrollView>
  )
}
