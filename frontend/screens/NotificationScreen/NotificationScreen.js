import React, { useState } from 'react';
import { ScrollView, Touchable, View } from 'react-native';
import { CustomText } from '../../src/components/atoms/Text/Text.component';
import { IconButton } from '../../src/components/atoms/IconButton/IconButton.component';
import DateTimePicker from '@react-native-community/datetimepicker';
import { UpdateSchedule, getStringValueFromLocalStorage } from '../../services';
import { styles } from './Notification.styles';
import { TimeDisplay } from '../../src/components/molecules/TimeDisplay/TimeDisplay.component';

export const NotificationScreen = ({ navigation }) => {
  const [hour, setHour] = useState(false);
  const [minutes, setMinutes] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState(false)
  const [pickerVisibility, setPickerVisibility] = useState(false);

  if (!hour && !minutes && !currentSchedule) {
    getStringValueFromLocalStorage('schedule_hour')
    .then((res) => {
        if (res !== '') {
        setHour(Number(res))
        }
    })
    getStringValueFromLocalStorage('schedule_minutes')
    .then((res) => {
        if (res !== '') {
        setMinutes(Number(res))
        }
    })
  }
    
    const today = new Date();
    if (!currentSchedule) {
        if ( hour && minutes ) {
            setCurrentSchedule(new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, minutes));
        } else {
            setCurrentSchedule(today)
        }
    }

  const onAdd = async (hour, minutes) => {
    const payload = { 
      measurement_hour: hour,
      measurement_minutes: minutes
    }
    UpdateSchedule( payload, setPickerVisibility, navigation );
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <CustomText text="Obecna godzina przypomnień:" />
          <TimeDisplay hour={hour} minutes={minutes} />
          <IconButton icon="rocket" label="Zmień godzinę przypomnienia" onPress={() => setPickerVisibility(true)} />
          { pickerVisibility && <DateTimePicker
            testID="dateTimePicker"
            value={currentSchedule}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, date) => {
                setHour(date?.getHours());
                setMinutes(date?.getMinutes());
                onAdd(hour, minutes);
            }}
          /> }
      </View>
    </ScrollView>
  );
};