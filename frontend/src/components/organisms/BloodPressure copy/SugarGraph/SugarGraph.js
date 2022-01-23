import React, { useState } from 'react';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { View, ScrollView } from 'react-native';
import { styles } from './SugarGraph.styles'

export const SugarChart = ({ data }) => {
  const yLabels = data.map(
    (measurement) => { return measurement.level ? measurement.level : 0; }
  );
  const yMin = Math.min.apply(null, yLabels) - 10;
  const yMax = Math.max.apply(null, yLabels) + 10;

  const xLabels = data.map(
    (measurement) => {
      const date = new Date(measurement.date)
      const stringDate = `${date.getDate()}.${date.getMonth()+1}`
      return stringDate;
    }
  );

    const contentInset = { top: 20, bottom: 20 }
    return (
      <View style={styles.chartContainer}>
        <YAxis
              data={yLabels}
              contentInset={contentInset}
              svg={styles.axis}
              numberOfTicks={yLabels.length}
              formatLabel={(value) => `${value}`}
              style={styles.yAxis}
              min={yMin}
              max={yMax}
              spacingInner={0.5}
          />
      <ScrollView horizontal style={styles.scrollableContainer}>
          <View>
          <LineChart
              style={styles.chart}
              data={yLabels}
              svg={{ stroke: 'blue' }}
              spacing={0.2}
              numberOfTicks={5}
              gridMin={0}
              spacingInner={0.5}  
              contentInset={contentInset}
              gridMin={yMin}
              gridmax={yMax}
          >
              <Grid />
          </LineChart>
          <View>
          <XAxis
            data={ xLabels }
            contentInset={{ left: 10, right: 10 }}
            svg={styles.axis}
            numberOfTicks={5}
            style={styles.xAxis}
            formatLabel={(value) => xLabels[value] }
          />
          </View></View>
      </ScrollView></View>
  );
  }