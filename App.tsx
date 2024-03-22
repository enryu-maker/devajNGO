import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store'
import Index from './src/Screen/Index'
import { request, PERMISSIONS, requestMultiple } from 'react-native-permissions';
export default function App() {
  requestMultiple(
    Platform.OS === 'ios'
      ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY]
      : [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION],
  );
  return (
    <Provider store={store}>
        <Index />
    </Provider>
  )
}