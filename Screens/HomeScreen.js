import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import BarChart from '../components/BarChart'
import LineGraph from '../components/LineGraph'
import { Context } from '../Context'

const HomeScreen = ({ navigation }) => {
  const [lineGraph, setLineGraph] = useState(true)
  const { popData } = useContext(Context)

  let labelArray = []
  let dataArray = []
  let i = 0

  while (i < popData.length) {
    labelArray.push(popData[i].Year)
    dataArray.push(popData[i].Population.toString().slice(0, 3))
    i++
  }

  return (
    <View style={styles.screen}>
      {lineGraph ? (
        <LineGraph labelArray={labelArray} dataArray={dataArray} />
      ) : (
        <BarChart labelArray={labelArray} dataArray={dataArray} />
      )}
      <Button
        title='Switch Graph Type'
        onPress={() => setLineGraph((prevState) => !prevState)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
})

export default HomeScreen
