import React, { useState } from 'react';
import { GetWeightList } from '../../services';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { WeightChart } from '../../src/components/organisms/BloodPressure copy 2/WeightGraph/WeightGraph';
import { WeightTableComponent } from '../../src/components/organisms/BloodPressure copy 2/WeightTable/WeightTable';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { MonthPicker } from '../../src/components/organisms/MonthPicker/MonthPicker';
import { styles } from './ListMeasurements.styles'

export const ListWeightScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const today = new Date();
  const [month, setMonth] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    GetWeightList(setData, navigation);
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
      
      { (visible && data.length) ? <WeightChart
        data={data}
        month={month}
      /> : <></> }
      <WeightTableComponent
        data={data}
        navigation={navigation}
        month={month}
      />
    </ScrollView>
  )
}
