import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import HomeStackScreen from './HomeStackScreen'
import OtherStackScreen from './OtherStackScreen'

const BottomNavBar = ({ route, navigation }) => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = 'home-outline'
            }
            if (route.name === 'Other') {
              iconName = 'american-football-outline'
            }
            return (
              <Ionicons
                name={iconName}
                focused={focused}
                size={size}
                color={color}
              />
            )
          },

          headerTitleStyle: {
            color: '#ffffff',
          },
          headerStyle: {
            backgroundColor: 'black',
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',

          style: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            shadowOpacity: 0,
          },

          inactiveTintColor: 'grey',
          showLabel: false,
        }}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Other' component={OtherStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavBar
