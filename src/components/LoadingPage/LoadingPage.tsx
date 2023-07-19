import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './styles'

const LoadingPage = (): JSX.Element => (
  <View style={styles.main}>
    <ActivityIndicator />
  </View>
)

export default LoadingPage
