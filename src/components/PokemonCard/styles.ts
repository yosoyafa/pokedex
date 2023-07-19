import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    gap: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  image: { height: 96, width: 96 },
  number: { textAlign: 'center' },
  name: { textAlign: 'center', textTransform: 'capitalize' },
})
