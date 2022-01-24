import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './BloodPressureGraph.styles'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryZoomContainer, VictoryTooltip, VictoryLabel } from "victory-native";
import { MAX_SYSTOLIC, MIN_SYSTOLIC, MIN_DIASTOLIC, MAX_DIASTOLIC, MIN_PULSE, MAX_PULSE } from '../../../../../config/constsForMeasurements';

export const BloodPressureChart = ({ data, month }) => {

  const sysDataAll = data?.map((measurement) => { return { x: measurement.date, y: Number(measurement.systolic) }})
  const formattedDataSys = sysDataAll.filter(coords => Number(coords.x.toString().slice(5,7)) === month)

  const diaDataAll = data?.map((measurement) => { return { x: measurement.date, y: Number(measurement.diastolic) }})
  const formattedDataDia = diaDataAll.filter(coords => Number(coords.x.toString().slice(5,7)) === month)

  const pulseDataAll = data?.map((measurement) => { return { x: measurement.date, y: Number(measurement.diastolic) }})
  const formattedDataPulse = pulseDataAll.filter(coords => Number(coords.x.toString().slice(5,7)) === month)

    const height = 200
    const width = 420

  return (
      <>
      <View style={styles.chartContainer}>
      <Text style={styles.title}>Ciśnienie skurczowe (SYS)</Text>
      { formattedDataSys.length ? (
          <VictoryChart 
            width={width}
            height={height} 
            containerComponent={
              <VictoryZoomContainer
                allowZoom={false}
                allowPan={true}
              />
            }
            domainPadding={{ x: 30, y: 0 }}
            domain={{ y: [MIN_SYSTOLIC, MAX_SYSTOLIC] }}
          >
            <VictoryAxis 
              dependentAxis 
              style={
                { grid : { stroke: "#BEBEBE" }}
              } 
            />
            <VictoryAxis 
              crossAxis 
              tickCount={formattedDataSys.length}
              tickFormat={(x) => {
                return '       ' + x.toString().slice(8,10) + '.' + x.toString().slice(5,7)
              }}
              style={
                { grid : { stroke: "#BEBEBE" },
                tickLabels: {angle: 90} }
              } 
            />
              <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"},
              }}
              data={formattedDataSys}
            />
          </VictoryChart>
        ) : ( <Text style={styles.noData}>Brak wyników w tym miesiącu</Text> ) 
      }
      </View>
      <View style={styles.chartContainer}>
      <Text style={styles.title}>Ciśnienie rozkurczowe (DIA)</Text>
      { formattedDataDia.length ? (
        <VictoryChart 
          width={width}
          height={height} 
          containerComponent={
            <VictoryZoomContainer
              allowZoom={false}
              allowPan={true}
            />
          }
          domainPadding={{ x: 30, y: 0 }}
          domain={{ y: [MIN_DIASTOLIC, MAX_DIASTOLIC] }}
        >
          <VictoryAxis 
            dependentAxis 
            style={
              { grid : { stroke: "#BEBEBE" }}
            } 
          />
          <VictoryAxis 
            crossAxis 
            tickCount={formattedDataDia.length}
            tickFormat={(x) => {
              return '       ' + x.toString().slice(8,10) + '.' + x.toString().slice(5,7)
            }}
            style={
              { grid : { stroke: "#BEBEBE" },
              tickLabels: {angle: 90} }
            } 
          />
            <VictoryLine
            style={{
              data: { stroke: "blue" },
              parent: { border: "1px solid #ccc"},
            }}
            data={formattedDataDia}
          />
        </VictoryChart>
      ) : ( <Text style={styles.noData}>Brak wyników w tym miesiącu</Text> ) }
      </View><View style={styles.chartContainer}>
      <Text style={styles.title}>Tętno</Text>
      { formattedDataPulse.length ? (
          <VictoryChart 
            width={width}
            height={height} 
            containerComponent={
              <VictoryZoomContainer
                allowZoom={false}
                allowPan={true}
              />
            }
            domainPadding={{ x: 30, y: 0 }}
            domain={{ y: [MIN_PULSE, MAX_PULSE] }}
          >
            <VictoryAxis 
              dependentAxis 
              style={
                { grid : { stroke: "#BEBEBE" }}
              } 
            />
            <VictoryAxis 
              crossAxis 
              tickCount={formattedDataPulse.length}
              tickFormat={(x) => {
                return '       ' + x.toString().slice(8,10) + '.' + x.toString().slice(5,7)
              }}
              style={
                { grid : { stroke: "#BEBEBE" },
                tickLabels: {angle: 90} }
              } 
            />
              <VictoryLine
              style={{
                data: { stroke: "green" },
                parent: { border: "1px solid #ccc"},
              }}
              data={formattedDataPulse}
            />
          </VictoryChart>
        ) : ( <Text style={styles.noData}>Brak wyników w tym miesiącu</Text> ) 
      }
      </View>
      </>
  );
  }