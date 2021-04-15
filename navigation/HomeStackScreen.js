import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'black',
            shadowOpacity: 0,
          },
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
