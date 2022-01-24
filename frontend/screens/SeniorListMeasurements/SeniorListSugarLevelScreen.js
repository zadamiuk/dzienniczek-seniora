import React, { useState } from 'react';
import { styles } from './SeniorListMeasurements.styles';
import { GetSeniorSugarList } from '../../services';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { ProfileCard } from '../../src/components/organisms/ProfileCard/ProfileCard';
import { SugarChart } from '../../src/components/organisms/BloodPressure copy/SugarGraph/SugarGraph';
import { SugarTableComponent } from '../../src/components/organisms/BloodPressure copy/SugarTable/SugarTable';
import { capitalizeFirstLetter } from '../../config/helpers';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { MonthPicker } from '../../src/components/organisms/MonthPicker/MonthPicker';

export const SeniorListSugarScreen = ({ route, navigation }) => {
  const { id, name, email } = route.params;
  let seniorName = JSON.stringify(name).replace(/["]+/g, '');
  const seniorEmail = JSON.stringify(email).replace(/["]+/g, '');
  const seniorId = JSON.stringify(id).replace(/["]+/g, '');

  seniorName = capitalizeFirstLetter(seniorName)
  
  const [data, setData] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    GetSeniorSugarList(seniorId, setData, navigation);
  } , [isFocused])

  const today = new Date();
  const [month, setMonth] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
    
  const setMonthToDisplay = (number) => {
    setMonth(number);
    setExpanded(false)
  }
  return (
    <ScrollView>
      <View style={styles.view}>
      <ProfileCard
          name={seniorName}
          email={seniorEmail}
        />
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
    
    { (visible) ? <SugarChart
      data={data}
      month={month}
    /> : <></> }
    <SugarTableComponent
      data={data}
      navigation={navigation}
      month={month}
      supervised={true}
    />
    </View>
  </ScrollView>
  )
}
