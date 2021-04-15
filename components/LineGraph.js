import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Context } from '../Context'

const LineGraph = ({ labelArray, dataArray }) => {
  const [isLoading, setisLoading] = useState(true)
  const { popData } = useContext(Context)

  setTimeout(() => {
    setisLoading(false)
  }, 100)

  return isLoading ? (
    <ActivityIndicator size='large' />
  ) : (
    <View>
      <LineChart
        data={{
          labels: labelArray,
          datasets: [
            {
              data: dataArray,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisSuffix=' M'
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
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

export default LineGraph
