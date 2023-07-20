import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './styles'

const LoadingPage = (): JSX.Element => (
  <View style={styles.main}>
    <ActivityIndicator testID="spinner" />
  </View>
)

export default LoadingPage
