import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  scroll: { padding: 16 },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 8,
    marginBottom: 16,
  },
  image: { width: 192, height: 192 },
  title: {
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '500',
  },
  textList: { textTransform: 'capitalize' },
  detailsContainer: { flex: 1, gap: 16 },
  spritesContainer: { marginHorizontal: -16 },
  spritesList: { paddingHorizontal: 16 },
  spriteImage: { height: 64, width: 64 },
  link: {
    textDecorationLine: 'underline',
    color: 'dodgerblue',
  },
})
