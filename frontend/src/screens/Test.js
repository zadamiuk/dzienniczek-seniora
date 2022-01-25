import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryZoomContainer,
  VictoryTooltip,
} from 'victory-native'

export const Test = () => {
  return (
    <VictoryChart
      width={400}
      containerComponent={
        <VictoryZoomContainer allowZoom={false} allowPan={true} />
      }
      domainPadding={{ x: 50 }}
    >
      <VictoryAxis
        dependentAxis
        tickCount={4}
        style={{ grid: { stroke: '#BEBEBE' } }}
      />
      <VictoryAxis
        crossAxis
        tickCount={4}
        style={{ grid: { stroke: '#BEBEBE' } }}
      />
      <VictoryLine
        labelComponent={
          <VictoryTooltip
            cornerRadius={({ datum }) => (datum.x > 6 ? 0 : 20)}
            pointerLength={({ datum }) => (datum.y > 0 ? 5 : 20)}
            flyoutStyle={{
              stroke: ({ datum }) => (datum.x === 10 ? 'tomato' : 'black'),
            }}
          />
        }
        style={{
          data: { stroke: '#c43a31' },
          parent: { border: '1px solid #ccc' },
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 },
        ]}
      />
    </VictoryChart>
  )
}
