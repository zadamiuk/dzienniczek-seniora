import React, { useState } from 'react'
import { DataTable } from 'react-native-paper'
import { styles } from './WeightTable.styles'
import { View, ScrollView, Text } from 'react-native'
import { NoMeasurement } from '../../../molecules/NoMeasurement/NoMeasurement.component'

export const WeightTableComponent = ({
  data,
  navigation,
  month,
  supervised = false,
}) => {
  const [isAnyFilteredData, setIsAnyFilteredData] = useState(false)
  const [currMonth, setCurrMonth] = useState(100)

  const today = new Date()
  if (currMonth !== month) {
    setIsAnyFilteredData(false)
    for (let i = 0; i < data?.length; i++) {
      if (Number(data[i].date.toString().slice(5, 7)) === month) {
        setIsAnyFilteredData(true)
        break
      }
    }
    setCurrMonth(month)
  }

  const WeightTable = () => {
    return data.map((measurement, key) => {
      if (
        month === 0 ||
        Number(measurement.date.toString().slice(5, 7)) === month
      ) {
        return (
          <DataTable.Row key={key}>
            <DataTable.Cell style={{ flex: 2 }}>
              <Text style={styles.cell}>{measurement.date}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>
              <Text style={styles.cell}>{measurement.weight_value}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        )
      }
    })
  }

  return (
    <ScrollView style={styles.scrollView}>
      <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title style={{ flex: 2 }}>
            <Text style={styles.title}>Data pomiaru</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 2 }}>
            <Text style={styles.title}>Waga</Text>
          </DataTable.Title>
        </DataTable.Header>
        {(data.length && isAnyFilteredData) || (month === 0 && data.length) ? (
          WeightTable()
        ) : (
          <NoMeasurement
            type="sugar"
            navigation={navigation}
            supervised={supervised}
            button={today.getMonth() + 1 === month ? true : false}
          />
        )}
      </DataTable>
    </ScrollView>
  )
}
