import { StyleSheet } from 'react-native';

const chartWidth = 400;
const chartHeight = 200;

export const styles = StyleSheet.create({
    dataTable: {
        margin: 10,
        width: '90%',
    },
    numericCell: {
        fontSize: 20,
    },
    dateCell: {
        fontSize: 20,
    },
    chartContainer: { 
        height: 200, 
        width: '100%', 
        flexDirection: 'row',
        padding: 10,
        marginBottom: 40,
    },
    scrollableContainer: {
        height: chartHeight + 25, 
        width: 310,
        paddingBottom: 15,
    },
    chart: {
        flex: 1, 
        width: chartWidth, 
        height: chartHeight,
        paddingRight: 10,
        marginTop: 20,
        paddingLeft: 10
    },
    axis: {
        fontSize: 18,
    },
    xAxis: {
        height: 10, 
        width: chartWidth,
    },
    yAxis: {
        height: chartHeight,
        width: 70,
        marginRight: 5
    }
});