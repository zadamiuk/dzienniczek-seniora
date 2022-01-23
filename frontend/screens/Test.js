import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import PushNotification from "react-native-push-notification";

export const Test = () => {
  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: "test-channel",
      channelName: "Test Channel",
    })
  }

  const handleNotification = (item, hour, minutes) => {
    PushNotification.localNotification({
      channelId: "test-channel",
      title: "witam " + item,
      message: "fajny push",
      bigText: "Zuza jest totalnym szefemi nie dziwie się, że Kuba tak bardzo lubi jej masować stopy",
      color: 'red',
    });

    const today = new Date();
    PushNotification.localNotificationSchedule({
      channelId: "test-channel",
      title: "Alarm",
      message: "scheduled",
      date: new Date(today.getUTCFullYear(), today.getMonth(), today.getDate(), hour, minutes),
      allowWhileIdle: true,
    });
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Button
        title="Press to Send Notification"
        onPress={() => handleNotification('hejka', 21, 11)}
      />
    </View>
  );
}