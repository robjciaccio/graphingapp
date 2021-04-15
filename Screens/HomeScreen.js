import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import BarChart from '../components/BarChart'
import LineGraph from '../components/LineGraph'
import StateButton from '../components/StateButton'
import { Context } from '../Context'
import { Picker } from '@react-native-picker/picker'

const HomeScreen = ({ navigation }) => {
  const [lineGraph, setLineGraph] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [switchMode, setSwitchMode] = useState(true)
  const [pickerMode, setPickerMode] = useState(false)
  const { popData, stateData } = useContext(Context)

  setTimeout(() => {
    while (i < popData.length) {
      labelArray.push(popData[i].Year)
      dataArray.push(popData[i].Population.toString().slice(0, 3))
      statePopArray.push(stateData[i].Population.toString().slice(0, 2))
      stateNameArray.push(stateData[i].State.slice(0, 8))
      i++
    }
  }, 500)

  //   organise each array for charting
  let labelArray = []
  let dataArray = []
  let statePopArray = []
  let stateNameArray = []
  let i = 0

  while (i < popData.length) {
    labelArray.push(popData[i].Year)
    dataArray.push(popData[i].Population.toString().slice(0, 3))
    statePopArray.push(stateData[i].Population.toString().slice(0, 2))
    stateNameArray.push(stateData[i].State.slice(0, 8))
    i++
  }

  return (
    <View style={styles.screen}>
      {switchMode ? (
        <View>
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
      ) : (
        <View>
          {lineGraph ? (
            <LineGraph labelArray={stateNameArray} dataArray={statePopArray} />
          ) : (
            <BarChart labelArray={stateNameArray} dataArray={statePopArray} />
          )}
          <Button
            title='Switch Graph Type'
            onPress={() => setLineGraph((prevState) => !prevState)}
          />
        </View>
      )}
      <Button
        title='See other categories'
        onPress={() => setPickerMode(true)}
      />
      {pickerMode ? (
        <Picker
          style={{ backgroundColor: 'white' }}
          selectedValue={switchMode}
          onValueChange={(itemValue, itemIndex) => {
            setSwitchMode(itemValue)
            setPickerMode(false)
          }}
        >
          <Picker.Item label='USA' value={true} />
          <Picker.Item label='Top States' value={false} />
        </Picker>
      ) : null}
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
