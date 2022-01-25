import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { DataTable } from 'react-native-paper'
import { styles } from './ListOfSeniorsScreen.styles'
import { GetSeniorsList } from '../../services'
import { IconButton } from 'react-native-paper'
import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

export const ListOfSeniorsScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    GetSeniorsList(setData, navigation)
  }, [isFocused])

  const SeniorTableData = () => {
    return data.map((senior, key) => {
      const params = {
        id: senior.id,
        name: senior.name,
        email: senior.email,
      }
      return (
        <DataTable.Row
          onPress={() => navigation.navigate('SeniorDetail', params)}
          style={styles.row}
          key={key}
        >
          <DataTable.Cell style={styles.nameWrapper}>
            <Text style={styles.cell}>{senior.name}</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.emailWrapper}>
            <Text style={styles.emailCell}>{senior.email}</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.cellIcon}>
            <IconButton
              icon="account-search"
              color={'#1AA7EC'}
              size={30}
              onPress={() => navigation.navigate('SeniorDetail', params)}
            />
          </DataTable.Cell>
        </DataTable.Row>
      )
    })
  }

  return (
    <View style={styles.root}>
      <DataTable style={styles.dataTable}>
        <DataTable.Header style={styles.header}>
          <DataTable.Title style={styles.nameWrapper}>
            <Text style={styles.title}>Imię</Text>
          </DataTable.Title>
          <DataTable.Title style={styles.emailWrapper}>
            <Text style={styles.title}>Adres e-mail</Text>
          </DataTable.Title>
        </DataTable.Header>
        {SeniorTableData()}
      </DataTable>
    </View>
  )
}
