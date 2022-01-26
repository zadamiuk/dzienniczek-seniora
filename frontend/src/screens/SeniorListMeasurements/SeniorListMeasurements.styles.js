import { StyleSheet } from 'react-native'

const chartWidth = 400
const chartHeight = 200

export const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  buttonInvisible: {
    alignItems: 'center',
    width: 200,
    backgroundColor: '#1AA7EC',
    borderRadius: 5,
    padding: 5,
  },
  buttonTextInvisible: {
    fontWeight: '400',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  buttonVisible: {
    alignItems: 'center',
    width: 200,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1AA7EC',
    padding: 5,
  },
  buttonTextVisible: {
    fontWeight: '400',
    fontSize: 18,
    color: '#1AA7EC',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    minHeight: 60,
  },
})
