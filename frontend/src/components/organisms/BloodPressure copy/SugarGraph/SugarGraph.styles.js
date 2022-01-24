import { StyleSheet } from 'react-native';

const chartWidth = 400;
const chartHeight = 200;

export const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginBottom: -40,
        marginTop: 10
    },
    chartContainer: {
        minHeight: 60,
    },
    noData: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        marginTop: 40
    }
});