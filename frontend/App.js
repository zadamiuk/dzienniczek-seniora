import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/organisms/Toast/Toast.component';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStartedScreen } from './src/screens/GetStartedScreen/GetStartedScreen';
import { SignInScreen } from './src/screens/SignInScreen/SignInScreen';
import { SignUpScreen } from './src/screens/SignUpScreen/SignUpScreen';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { ChooseMeasurementToAddScreen } from './src/screens/ChooseMeasurementToAddScreen/ChooseMeasurementToAddScreen';
import { ChooseMeasurementToListScreen } from './src/screens/ChooseMeasurementToListScreen/ChooseMeasurementToListScreen';
import { AddBloodPressureScreen } from './src/screens/AddMeasurements/AddBloodPressureScreen';
import { AddSugarLevelScreen } from './src/screens/AddMeasurements/AddSugarLevelScreen';
import { AddWeightScreen } from './src/screens/AddMeasurements/AddWeightScreen';
import { ListBloodPressureScreen } from './src/screens/ListMeasurements/ListBloodPressureScreen';
import { ListSugarLevelScreen } from './src/screens/ListMeasurements/ListSugarLevelScreen';
import { ListWeightScreen } from './src/screens/ListMeasurements/ListWeightScreen';
import { ListOfSeniorsScreen } from './src/screens/ListOfSeniorsScreen/ListOfSeniorsScreen';
import { SeniorDetailScreen } from './src/screens/SeniorDetailScreen/SeniorDetailScreenScreen';
import { SeniorListWeightScreen } from './src/screens/SeniorListMeasurements/SeniorListWeightScreen';
import { SeniorListBloodPressureScreen } from './src/screens/SeniorListMeasurements/SeniorListBloodPressureScreen';
import { SeniorListSugarScreen } from './src/screens/SeniorListMeasurements/SeniorListSugarLevelScreen';
import { NotificationScreen } from './src/screens/NotificationScreen/NotificationScreen';
import { YourSupervisorScreen } from './src/screens/YourSupervisorScreen/YourSupervisorScreen';
import { SettingsScreen } from './src/screens/SettingsScreen/SettingsScreen';

import { ScheduledPushNotification } from './src/components/organisms/Notifications/PushNotifications';

const Stack = createNativeStackNavigator();

export default function App() {
  ScheduledPushNotification();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" gestureEnabled={false}>
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
