import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/organisms/Toast/Toast.component';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStartedScreen } from './screens/GetStartedScreen/GetStartedScreen';
import { SignInScreen } from './screens/SignInScreen/SignInScreen.component';
import { SignUpScreen } from './screens/SignUpScreen/SignUpScreen.component';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { ChooseMeasurementToAddScreen } from './screens/ChooseMeasurementToAddScreen/ChooseMeasurementToAddScreen';
import { ChooseMeasurementToListScreen } from './screens/ChooseMeasurementToListScreen/ChooseMeasurementToListScreen';
import { AddBloodPressureScreen } from './screens/AddMeasurements/AddBloodPressureScreen';
import { AddSugarLevelScreen } from './screens/AddMeasurements/AddSugarLevelScreen';
import { AddWeightScreen } from './screens/AddMeasurements/AddWeightScreen';
import { ListBloodPressureScreen } from './screens/ListMeasurements/ListBloodPressureScreen';
import { ListSugarLevelScreen } from './screens/ListMeasurements/ListSugarLevelScreen';
import { ListWeightScreen } from './screens/ListMeasurements/ListWeightScreen';
import { ListOfSeniorsScreen } from './screens/ListOfSeniorsScreen/ListOfSeniorsScreen';
import { SeniorDetailScreen } from './screens/SeniorDetailScreen/SeniorDetailScreenScreen';
import { SeniorListWeightScreen } from './screens/SeniorListMeasurements/SeniorListWeightScreen';
import { SeniorListBloodPressureScreen } from './screens/SeniorListMeasurements/SeniorListBloodPressureScreen';
import { SeniorListSugarScreen } from './screens/SeniorListMeasurements/SeniorListSugarLevelScreen';
import { NotificationScreen } from './screens/NotificationScreen/NotificationScreen';
import { YourSupervisorScreen } from './screens/YourSupervisorScreen/YourSupervisorScreen';
import { SettingsScreen } from './screens/SettingsScreen/SettingsScreen';
import { Test } from './screens/Test';

import { ScheduledPushNotification } from './src/components/organisms/Notifications/PushNotifications';

const Stack = createNativeStackNavigator();


export default function App() {
  ScheduledPushNotification();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test" gestureEnabled={false}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ title: "Twój dzienniczek", headerLeft: () => <></>}}  />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "Logowanie" }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "Rejestracja" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Twój dzienniczek", headerLeft: () => <></> }} />
        <Stack.Screen name="AddBloodPressure" component={AddBloodPressureScreen} options={{ title: "Dodaj pomiar ciśnienia krwi" }} />
        <Stack.Screen name="AddSugarLevel" component={AddSugarLevelScreen} options={{ title: "Dodaj pomiar cukru we krwi" }} />
        <Stack.Screen name="AddWeight" component={AddWeightScreen} options={{ title: "Dodaj swoją wagę" }} />
        <Stack.Screen name="ChooseMeasurementToAdd" component={ChooseMeasurementToAddScreen} options={{ title: "Wybierz pomiar" }} />
        <Stack.Screen name="ListBloodPressure" component={ListBloodPressureScreen} options={{ title: "Pomiary ciśnienia krwi" }} />
        <Stack.Screen name="ListSugarLevel" component={ListSugarLevelScreen} options={{ title: "Pomiary cukru" }} />
        <Stack.Screen name="ListWeight" component={ListWeightScreen} options={{ title: "Pomiary wagi" }} />
        <Stack.Screen name="ChooseMeasurementToList" component={ChooseMeasurementToListScreen} options={{ title: "Wybierz pomiar" }} />
        <Stack.Screen name="ListOfSeniors" component={ListOfSeniorsScreen} options={{ title: "Lista podopiecznych" }} />
        <Stack.Screen name="SeniorDetail" component={SeniorDetailScreen} options={{ title: "Szczegóły seniora" }} />
        <Stack.Screen name="SeniorBloodPressureList" component={SeniorListBloodPressureScreen} options={{ title: "Lista ciśnienia podopiecznego" }} />
        <Stack.Screen name="SeniorSugarList" component={SeniorListSugarScreen} options={{ title: "Lista cukru podopiecznego" }} />
        <Stack.Screen name="SeniorWeightList" component={SeniorListWeightScreen} options={{ title: "Lista wagi podopiecznego" }} />
        <Stack.Screen name="Test" component={Test} options={{ title: "Lista wagi podopiecznego" }} />
        <Stack.Screen name="Notification" component={NotificationScreen} options={{ title: "Przypomnienie" }} />
        <Stack.Screen name="YourSupervisor" component={YourSupervisorScreen} options={{ title: "Twój opiekun" }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: "Ustawienia" }} />
      </Stack.Navigator>
      <Toast config={toastConfig}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    paddingBottom: '10%'
  }
});
