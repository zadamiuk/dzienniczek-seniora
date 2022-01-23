import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { styles } from './ListOfSeniorsScreen.styles';
import { GetSeniorsList } from '../../services';
import { IconButton } from 'react-native-paper';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

export const ListOfSeniorsScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    GetSeniorsList(setData, navigation);
  } , [isFocused])

    const SeniorTableData = () => {
        return data.map((senior) => {
          const params = {
            id: senior.id,
            name: senior.name,
            email: senior.email,
          }
          return (
            <DataTable.Row onPress={() => navigation.navigate('SeniorDetail', params)}>
              <DataTable.Cell>{senior.name}</DataTable.Cell>
              <DataTable.Cell>{senior.email}</DataTable.Cell>
              <DataTable.Cell>
                <IconButton
                    icon="book-open-variant"
                    color={'#1AA7EC'}
                    size={30}
                    onPress={() => navigation.navigate('SeniorDetail', params)}
                />
              </DataTable.Cell>
            </DataTable.Row>
          );
        });
      }

    return (
      <View style={styles.root}>
        <DataTable style={styles.dataTable}>
            <DataTable.Header>
                <DataTable.Title>Imię</DataTable.Title>
                <DataTable.Title>Adres e-mail</DataTable.Title>
                <DataTable.Title></DataTable.Title>
            </DataTable.Header>
            {SeniorTableData()}
        </DataTable>
      </View>
    );
  }