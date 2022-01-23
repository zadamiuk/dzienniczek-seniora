import React, { useState } from 'react';
import { styles } from './SeniorListMeasurements.styles';
import { GetSeniorSugarList } from '../../services';
import { DataTable } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { ProfileCard } from '../../src/components/organisms/ProfileCard/ProfileCard';
import { SugarTableComponent } from '../../src/components/organisms/BloodPressure copy/SugarTable/SugarTable';
import { SugarChart } from '../../src/components/organisms/BloodPressure copy/SugarGraph/SugarGraph';
import { capitalizeFirstLetter } from '../../config/helpers';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

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
  
  return (
    <View style={styles.view}>
      <ProfileCard
        name={seniorName}
        email={seniorEmail}
      />
      {/* <SugarChart
        data={data}
      /> */}
      <SugarTableComponent
        data={data}
        navigation={navigation}
        supervised={true}
      />
    </View>
  )
}
