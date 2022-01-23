import React, { useState } from 'react';
import { GetWeightList } from '../../services';
import { View } from 'react-native';
import { WeightChart } from '../../src/components/organisms/BloodPressure copy 2/WeightGraph/WeightGraph';
import { WeightTableComponent } from '../../src/components/organisms/BloodPressure copy 2/WeightTable/WeightTable';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export const ListWeightScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    GetWeightList(setData, navigation);
  } , [isFocused])

  return (
    <View>
      { data.length ? <WeightChart
        data={data}
      /> : <></> }
      <WeightTableComponent
        data={data}
        navigation={navigation}
      />
    </View>
  )
}
