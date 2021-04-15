import React from 'react'
import { View, Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

const BarGraph = ({ labelArray, dataArray }) => {
  const data = {
    labels: labelArray,
    datasets: [
      {
        data: dataArray,
      },
    ],
  }
  return (
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

export default BarGraph
