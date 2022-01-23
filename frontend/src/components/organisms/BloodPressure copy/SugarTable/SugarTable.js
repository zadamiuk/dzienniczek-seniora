import React from 'react';
import { DataTable } from 'react-native-paper';
import { styles } from './SugarTable.styles'
import { Text, ScrollView } from 'react-native';
import { NoMeasurement } from '../../../molecules/NoMeasurement/NoMeasurement.component';

  export const SugarTableComponent = ({ data, navigation, supervised = false }) => {
    const SugarTable = () => {
      return data.map((measurement, key) => {
        return (
          <DataTable.Row key={key}>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.cell}>{measurement.date}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.cell}>{measurement.level}</Text>
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
                <Text style={styles.title}>Poziom cukru</Text>
              </DataTable.Title>
            </DataTable.Header>
            { data.length ? SugarTable() : <NoMeasurement type="sugar" navigation={navigation} supervised={supervised} />}
          </DataTable>
        </ScrollView>
    );
  }
  