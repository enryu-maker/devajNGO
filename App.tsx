import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Index from './src/Screen/Index'
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Index />
      </SafeAreaProvider>
    </Provider>
  )
}