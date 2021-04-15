import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ContextProvider } from './Context'
import BottomNavBar from './navigation/BottomNavBar'

export default function App() {
  return (
    <ContextProvider>
      <BottomNavBar />
    </ContextProvider>
  )
}
