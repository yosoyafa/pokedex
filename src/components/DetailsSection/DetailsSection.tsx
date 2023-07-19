import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const DetailsSection = ({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}): JSX.Element => (
  <View style={styles.main}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>
)

export default DetailsSection
