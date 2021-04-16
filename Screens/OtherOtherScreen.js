import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BarChart from '../components/BarChart'

const OtherOtherScreen = ({ route, navigation }) => {
  const { labelArray, dataArray } = route.params

  return (
    <View style={styles.screen}>
      <View style={styles.textBox}>
        <Text style={styles.text}>And this is ANOTHER screen of Data</Text>
        <BarChart labelArray={labelArray} dataArray={dataArray} />
      </View>
    </View>
  )
}

export default OtherOtherScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
    marginBottom: 5,
  },
  textBox: {
    alignItems: 'center',
  },
})
