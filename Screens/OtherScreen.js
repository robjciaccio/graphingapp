import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import LineGraph from '../components/LineGraph'

const OtherScreen = ({ navigation }) => {
  const labelArray = ['First', 'Second', 'Third']
  const dataArray = [1, 2, 3]
  return (
    <View style={styles.screen}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Look at this other cool page</Text>
        <Text style={styles.text}>With a whole new set of data on it</Text>
      </View>
      <LineGraph labelArray={labelArray} dataArray={dataArray} />

      <TouchableOpacity
        style={styles.dataBtn}
        onPress={() =>
          navigation.navigate('OtherOther', {
            labelArray: labelArray,
            dataArray: dataArray,
          })
        }
      >
        <Text style={styles.btnText}>Click Here </Text>
        <Text style={styles.btnText}>For even more data</Text>
      </TouchableOpacity>
    </View>
  )
}

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
  dataBtn: {
    borderWidth: 1,
    borderColor: 'pink',
    alignItems: 'center',
    width: 200,
    marginLeft: 110,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: 'orange',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  textBox: {
    alignItems: 'center',
  },
})

export default OtherScreen
