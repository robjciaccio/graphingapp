import React, { useContext, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { Context } from '../Context'
import { Picker } from '@react-native-picker/picker'

const StateButton = () => {
  const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <View>
      {/* <View style={{ width: 320, margin: 9, zIndex: 10 }}> */}
      <Picker
        style={{ backgroundColor: 'white' }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label='USA' value='java' />
        <Picker.Item label='Top States' value='js' />
      </Picker>
      {/* </View> */}
    </View>
  )
}

export default StateButton
