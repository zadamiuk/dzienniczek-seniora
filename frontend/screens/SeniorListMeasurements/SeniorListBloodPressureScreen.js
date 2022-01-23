import React, { useState } from 'react';
import { styles } from './SeniorListMeasurements.styles';
import { View } from 'react-native';
import { GetSeniorBloodPressureList } from '../../services';
import { ProfileCard } from '../../src/components/organisms/ProfileCard/ProfileCard';
import { BloodPressureTableComponent } from '../../src/components/organisms/BloodPressure/BloodPressureTable/BloodPressureTable';
import { BloodPressureChart } from '../../src/components/organisms/BloodPressure/BloodPressureGraph/BloodPressureGraph';
import { capitalizeFirstLetter } from '../../config/helpers';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export const SeniorListBloodPressureScreen = ({ route, navigation }) => {
  const { id, name, email } = route.params;
  let seniorName = JSON.stringify(name).replace(/["]+/g, '');
  const seniorEmail = JSON.stringify(email).replace(/["]+/g, '');
  const seniorId = JSON.stringify(id).replace(/["]+/g, '');

  seniorName = capitalizeFirstLetter(seniorName);

  const [data, setData] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    GetSeniorBloodPressureList(seniorId, setData, navigation);
  } , [isFocused])

  return (
    <View style={styles.view}>
      <ProfileCard
        name={seniorName}
        email={seniorEmail}
      />
      {/* <BloodPressureChart
        data={data}
      /> */}
      <BloodPressureTableComponent
        data={data}
        navigation={navigation}
        supervised={true}
      />
    </View>
  )
}
