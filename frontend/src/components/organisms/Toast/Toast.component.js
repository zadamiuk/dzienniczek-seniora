import React from 'react'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green' }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      position="bottom"
      text1Style={{
        fontSize: 20,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
}

export const errorToast = (message) => {
  Toast.show({
    type: 'error',
    text1: message,
    onPress: () => Toast.hide(),
  })
}

export const successToast = (message) => {
  Toast.show({
    type: 'success',
    text1: message,
    onPress: () => Toast.hide(),
  })
}
