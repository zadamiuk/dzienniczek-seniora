import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './WeightGraph.styles'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryZoomContainer, VictoryTooltip, VictoryLabel } from "victory-native";


export const SugarChart = ({ data }) => {
  const yLabels = data.map(
    (measurement) => { return measurement.level ? measurement.level : 0; }
  );
  const yMin = Math.min.apply(null, yLabels) - 10;
  const yMax = Math.max.apply(null, yLabels) + 10;

  const formattedData = 
    data?.map((measurement) => {
      return { x: new Date(measurement.date), y: Number(measurement.level) }
    })
  
  console.log(formattedData)

    return (
      <VictoryChart 
        width={400} 
        containerComponent={
          <VictoryZoomContainer
            allowZoom={false}
            allowPan={true}
          />
        }
        domainPadding={{ x: 10, y: 10 }}
      >
        <VictoryAxis 
          dependentAxis 
          style={
            { grid : { stroke: "#BEBEBE" }}
          } 
        />
        <VictoryAxis 
          crossAxis 
          tickFormat={(x) => {
            const date = new Date(x);
            const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay()
            const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
            return day + "." + month
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
  );
  }