import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
// import {Context} from '../Context'
import { BarChart } from 'react-native-chart-kit'

const BarGraph = ({ labelArray, dataArray }) => {
  // const {labelArray, dataArray} = useContext(Context)
  const [isLoading, setisLoading] = useState(true)

  setTimeout(() => {
    setisLoading(false)
  }, 500)

  const data = {
    labels: labelArray,
    datasets: [
      {
        data: dataArray,
      },
    ],
  }

  return isLoading ? (
    <ActivityIndicator size='large' />
  ) : (
    <View>
      <BarChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        yAxisSuffix=' MM'
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
})

export default BarGraph
