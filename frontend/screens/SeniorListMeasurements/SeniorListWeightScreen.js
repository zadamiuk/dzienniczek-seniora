import React, { useState } from 'react';
import { styles } from './SeniorListMeasurements.styles';
import { GetSeniorWeightList } from '../../services';
import { DataTable } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { ProfileCard } from '../../src/components/organisms/ProfileCard/ProfileCard';
import { WeightChart } from '../../src/components/organisms/BloodPressure copy 2/WeightGraph/WeightGraph';
import { WeightTableComponent } from '../../src/components/organisms/BloodPressure copy 2/WeightTable/WeightTable';
import { capitalizeFirstLetter } from '../../config/helpers';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export const SeniorListWeightScreen = ({ route, navigation }) => {
  const { id, name, email } = route.params;
  let seniorName = JSON.stringify(name).replace(/["]+/g, '');
  const seniorEmail = JSON.stringify(email).replace(/["]+/g, '');
  const seniorId = JSON.stringify(id).replace(/["]+/g, '');

  seniorName = capitalizeFirstLetter(seniorName)
  
  const [data, setData] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    GetSeniorWeightList(seniorId, setData, navigation);
  } , [isFocused])

  return (
    <View style={styles.view}>
      <ProfileCard
          name={seniorName}
          email={seniorEmail}
        />
      {/* <WeightChart
        data={data}
      /> */}
      <WeightTableComponent
        data={data}
        navigation={navigation}
        supervised={true}
      />
    </View>
  )
}
