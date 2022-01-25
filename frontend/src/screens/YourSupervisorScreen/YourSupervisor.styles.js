import { StyleSheet } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

export const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30
    },
    card: {
        marginTop: 10,
        width: '90%',
        height: 160,
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    name: {
        marginTop: 5,
        marginBottom: 5,
        color: 'black',
        fontWeight: '600',
        fontSize: 24,
        alignItems: 'center',
        textAlign: 'center',
    },
    email: {
        color: 'grey',
        fontWeight: '400',
        fontSize: 20,
        marginBottom: 50,
        alignItems: 'center',
        textAlign: 'center',
    },
    noData: {
        color: 'grey',
        fontWeight: '400',
        fontSize: 24,
        padding: 30,
        textAlign: 'center',
    }
});