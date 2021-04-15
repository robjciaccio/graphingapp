import React from 'react'
import { ContextProvider } from './Context'
import BottomNavBar from './navigation/BottomNavBar'

export default function App() {
  return (
    <ContextProvider>
      <BottomNavBar />
    </ContextProvider>
  )
}
