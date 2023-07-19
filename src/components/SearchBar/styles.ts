import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    gap: 8,
    borderRadius: 8,
    backgroundColor: '#FEFEFE',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  icon: { paddingVertical: 8 },
  input: { flex: 1, paddingVertical: 8 },
})
