import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './WeightGraph.styles'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryZoomContainer, VictoryTooltip, VictoryLabel } from "victory-native";


export const BloodPressureChart = ({ data }) => {
  const yLabels = data.map(
    (measurement) => { return measurement.level ? measurement.level : 0; }
  );
  const yMin = Math.min.apply(null, yLabels) - 10;
  const yMax = Math.max.apply(null, yLabels) + 10;

  const formattedDataSys = 
    data?.map((measurement) => {
      return { x: measurement.date, y: Number(measurement.systolic) }
    })

    const formattedDataDia = 
    data?.map((measurement) => {
      return { x: measurement.date, y: Number(measurement.diastolic) }
    })

    const formattedDataPulse = 
    data?.map((measurement) => {
      return { x: measurement.date, y: Number(measurement.pulse) }
    })

    return (
      <VictoryChart 
        width={400}
        height={300} 
        containerComponent={
          <VictoryZoomContainer
            allowZoom={false}
            allowPan={true}
          />
        }
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
        <VictoryLine
          style={{
            data: { stroke: "blue" },
            parent: { border: "1px solid #ccc"},
          }}
          data={formattedDataDia}
        />
        
      </VictoryChart>
  );
  }