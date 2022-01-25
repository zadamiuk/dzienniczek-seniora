import React, { useState } from 'react'
import { GetSugarLevelList } from '../../services'
import { View, ScrollView, Pressable, Text } from 'react-native'
import { SugarTableComponent } from '../../src/components/organisms/BloodPressure copy/SugarTable/SugarTable'
import { SugarChart } from '../../src/components/organisms/BloodPressure copy/SugarGraph/SugarGraph'
import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'
import { MonthPicker } from '../../src/components/organisms/MonthPicker/MonthPicker'
import { styles } from './ListMeasurements.styles'

export const ListSugarLevelScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const today = new Date()
  const [month, setMonth] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)

  const isFocused = useIsFocused()

  useEffect(() => {
    GetSugarLevelList(setData, navigation)
  }, [isFocused])

  const setMonthToDisplay = (number) => {
    setMonth(number)
    setExpanded(false)
  }

  return (
    <ScrollView style={styles.view}>
      {MonthPicker(expanded, setMonthToDisplay, setExpanded)}
      {visible ? (
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => setVisible(!visible)}
            style={styles.buttonVisible}
          >
            <Text style={styles.buttonTextVisible}>Ukryj wykresy</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => setVisible(!visible)}
            style={styles.buttonInvisible}
          >
            <Text style={styles.buttonTextInvisible}>Pokaż wykresy</Text>
          </Pressable>
        </View>
      )}

      {visible ? <SugarChart data={data} month={month} /> : <></>}
      <SugarTableComponent data={data} navigation={navigation} month={month} />
    </ScrollView>
  )
}
