import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Dimensions } from "react-native";
import {
    LineChart,
  } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export const BloodPressureChart = ({ data }) => {
    const yLabels = data?.map(
        (measurement) => { return measurement.systolic ? measurement.systolic : 10; }
    );
    const yMin = Math.min.apply(null, yLabels) - 10;
    const yMax = Math.max.apply(null, yLabels) + 10;

    const xLabels = data?.map(
        (measurement) => {
        const date = new Date(measurement.date)
        const displayDay = date.getDate() < 10
            ? '0' + date.getDate()
            : date.getDate();
        const displayMonth = (date.getMonth()+1) < 10
            ? '0' + (date.getMonth()+1)
            : (date.getMonth()+1);
        return displayDay + '.' + displayMonth;
        }
    );

    let chartData = [];
    for (let i=0; i<xLabels.length; i++) {
        chartData.push({x: xLabels[i], y: yLabels[i]})
    }

    const finalData = {
        labels: xLabels,
        datasets: [
          {
            data: yLabels,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
      };
    
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false} // to hide scroll bar
            style={{
                paddingTop: 30,
                minHeight: 250,
            }}
            >
            <LineChart
            data={finalData}
            width={900}
            height={220}
            chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "#fbfbfb",
                backgroundGradientTo: "#fbfbfb",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 0
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "0",
                    stroke: "#fbfbfb"
                }
            }}
            bezier
            />
        </ScrollView>
  )
  }


  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "ffffff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForLabels:{
        fontFamily:'Arial',
        },
  };
