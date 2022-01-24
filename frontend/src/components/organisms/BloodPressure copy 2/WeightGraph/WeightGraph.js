import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './WeightGraph.styles'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryZoomContainer } from "victory-native";
import { MIN_WEIGHT, MAX_WEIGHT } from '../../../../../config/constsForMeasurements';

export const WeightChart = ({ data, month }) => {

  const dataAll = data?.map((measurement) => { return { x: measurement.date, y: Number(measurement.weight_value) }})
  const formattedData = month !== 0
    ? dataAll.filter(coords => Number(coords.x.toString().slice(5,7)) === month)
    : dataAll

  const height = 200
  const width = 420

  return (
      <>
      <View style={styles.chartContainer}>
      <Text style={styles.title}>Waga</Text>
      { formattedData.length ? (
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
            domain={{ y: [MIN_WEIGHT, MAX_WEIGHT] }}
          >
            <VictoryAxis 
              dependentAxis 
              style={
                { grid : { stroke: "#BEBEBE" }}
              } 
            />
            <VictoryAxis 
              crossAxis 
              tickCount={formattedData.length}
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
              data={formattedData}
            />
          </VictoryChart>
        ) : ( <Text style={styles.noData}>Brak wyników w tym miesiącu</Text> ) 
      }
      </View>
      </>
  )
}