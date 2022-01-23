import React, { useState } from 'react';
import { GetSugarLevelList } from '../../services';
import { View } from 'react-native';
import { SugarTableComponent } from '../../src/components/organisms/BloodPressure copy/SugarTable/SugarTable';
import { SugarChart } from '../../src/components/organisms/BloodPressure copy/SugarGraph/SugarGraph';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export const ListSugarLevelScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    GetSugarLevelList(setData, navigation);
  } , [isFocused])
  
  return (
    <View>
      {/* <SugarChart
        data={data}
      /> */}
      <SugarTableComponent
        data={data}
        navigation={navigation}
      />
    </View>
  )
}
