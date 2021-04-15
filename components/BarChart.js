import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import { BarChart } from 'react-native-chart-kit'

const BarGraph = ({ labelArray, dataArray }) => {
  const [isLoading, setisLoading] = useState(true)
  setTimeout(() => {
    setisLoading(false)
  }, 100)

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
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
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
