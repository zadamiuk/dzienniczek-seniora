import React from 'react';
import { DataTable } from 'react-native-paper';
import { styles } from './WeightTable.styles'
import { View, ScrollView, Text } from 'react-native';
import { NoMeasurement } from '../../../molecules/NoMeasurement/NoMeasurement.component';

  export const WeightTableComponent = ({ data, navigation, supervised = false }) => {
    const WeightTable = () => {
      return data.map((measurement, key) => {
        return (
          <DataTable.Row key={key}>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.cell}>{measurement.date}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.cell}>{measurement.weight_value}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        );
      });
    }

      return (
        <ScrollView style={styles.scrollView}>
          <DataTable style={styles.dataTable}>
          <DataTable.Header>
              <DataTable.Title style={{flex: 2}}>
                <Text style={styles.title}>Data pomiaru</Text>
              </DataTable.Title>
              <DataTable.Title style={{flex: 2}}>
                <Text style={styles.title}>Waga</Text>
              </DataTable.Title>
            </DataTable.Header>
            { data.length ? WeightTable() : <NoMeasurement type="weight" navigation={navigation} supervised={supervised} />}
          </DataTable>
        </ScrollView>
    );
  }
  