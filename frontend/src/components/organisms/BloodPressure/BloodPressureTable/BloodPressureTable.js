import React from 'react';
import { DataTable } from 'react-native-paper';
import { styles } from './BloodPressureTable.styles'
import { View, ScrollView, Text } from 'react-native';
import { NoMeasurement } from '../../../molecules/NoMeasurement/NoMeasurement.component';


  export const BloodPressureTableComponent = ({ data, navigation, supervised = false }) => {
    const BloodPressureTable = () => {
        return data.map((measurement, key) => {
          return (
            <DataTable.Row key={key}>
              <DataTable.Cell style={{flex: 2}}>
                <Text style={styles.cell}>{measurement.date}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.cell}>{measurement.systolic}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.cell}>{measurement.diastolic}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.cell}>{measurement.pulse}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          );
        });
      }

      return (
        <ScrollView style={styles.scrollView}>
            <DataTable style={styles.dataTable}>
            <DataTable.Header>
              <DataTable.Title style={{flex:2}}>
                <Text style={styles.title}>Data pomiaru</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.title}>SYS</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.title}>DIA</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.title}>Puls</Text>
              </DataTable.Title>
            </DataTable.Header>
            { data.length ? BloodPressureTable() : <NoMeasurement type="blood-pressure" navigation={navigation} supervised={supervised}/>}
            </DataTable>
      </ScrollView>
    );
  }
  