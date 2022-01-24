import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1AA7EC', 
        margin: 10, 
        height: 50, 
        width: 250,
        alignContent: 'center', 
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        borderRadius: 5,
    },
    label: {
        fontWeight: '400',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    root: {
        width: '100%',
        alignItems: 'center',
    },
    item: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        margin: 0,
    },
    itemTitle: {
        fontSize: 18,
    },
    scroll: {
        height: '100%'
    }
});