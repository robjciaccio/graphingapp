import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OtherScreen from '../Screens/OtherScreen'
import OtherOtherScreen from '../Screens/OtherOtherScreen'

const OtherStack = createStackNavigator()

const OtherStackScreen = () => {
  return (
    <OtherStack.Navigator>
      <OtherStack.Screen
        name='Other'
        component={OtherScreen}
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
      <OtherStack.Screen
        name='OtherOther'
        component={OtherOtherScreen}
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
    </OtherStack.Navigator>
  )
}

export default OtherStackScreen
