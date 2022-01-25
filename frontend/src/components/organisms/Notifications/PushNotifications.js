import { useEffect, useState } from 'react'
import { getStringValueFromLocalStorage } from '../../../../services'
import PushNotification from 'react-native-push-notification'

export const ScheduledPushNotification = () => {
  const [notificationHour, setNotificationHour] = useState(false)
  const [notificationMinutes, setNotificationMinutes] = useState(false)

  getStringValueFromLocalStorage('schedule_hour').then((res) => {
    if (res !== '') {
      setNotificationHour(Number(res))
    }
  })

  getStringValueFromLocalStorage('schedule_minutes').then((res) => {
    if (res !== '') {
      setNotificationMinutes(Number(res))
    }
  })

  useEffect(() => {
    createChannels()
  }, [])

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'main-channel',
      channelName: 'Main Channel',
    })
  }

  const scheduledNotification = (hour, minutes) => {
    const today = new Date()
    if (
      today.getHours() > hour ||
      (today.getHours() === hour && today.getMinutes() < minutes)
    ) {
      PushNotification.localNotificationSchedule({
        channelId: 'main-channel',
        title: 'Twój Dzienniczek',
        message: 'Pamiętaj o codziennych pomiarach!',
        date: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          hour,
          minutes
        ),
        allowWhileIdle: true,
        id: 1,
      })
    } else {
      PushNotification.localNotificationSchedule({
        channelId: 'main-channel',
        title: 'Twój Dzienniczek',
        message: 'Pamiętaj o codziennych pomiarach!',
        date: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + 1,
          hour,
          minutes
        ),
        allowWhileIdle: true,
        id: 1,
      })
    }
  }

  if (notificationMinutes && notificationHour) {
    scheduledNotification(notificationHour, notificationMinutes)
  }
}
