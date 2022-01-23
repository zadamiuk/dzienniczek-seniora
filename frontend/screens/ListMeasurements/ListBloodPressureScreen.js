import React, { useState } from 'react';
import { View } from 'react-native';
import { GetBloodPressureList } from '../../services';
import { BloodPressureTableComponent } from '../../src/components/organisms/BloodPressure/BloodPressureTable/BloodPressureTable';
import { BloodPressureChart } from '../../src/components/organisms/BloodPressure/BloodPressureGraph/BloodPressureGraph';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export const ListBloodPressureScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    GetBloodPressureList(setData, navigation);
  } , [isFocused])
  

  return (
    <View>
      { data.length ? <BloodPressureChart
        data={data}
      /> : <></> }
      <BloodPressureTableComponent
        data={data}
        navigation={navigation}
      />
    </View>
  )
}
