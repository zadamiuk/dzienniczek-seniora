import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    root: {
        flex: 1, 
        alignItems: 'center',
    },
    dataTable: {
        margin: 10,
        width: '90%',
    },
    emailWrapper: {
        flex: 3,
    },
    nameWrapper: {
        flex: 2,
    },
    cell: {
        fontSize: 16,
    },
    emailCell: {
        fontSize: 16,
        marginLeft: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    row:{
        height: 60
    },
    cellIcon: {
        flex: 1
    }
});