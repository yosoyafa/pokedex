import React, { useRef } from 'react'
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

interface SearchBarProps extends TextInputProps {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
}

const SearchBar = ({
  value,
  onChangeText,
  placeholder,
  style,
  inputStyle,
  ...props
}: SearchBarProps): JSX.Element => {
  const inputRef = useRef<TextInput>(null)

  return (
    <View style={[styles.main, style]}>
      <Ionicons
        name="search"
        size={20}
        style={styles.icon}
        onPress={() => inputRef.current?.focus()}
      />
      <TextInput
        testID="input"
        ref={inputRef}
        style={[inputStyle, styles.input]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoFocus
        {...props}
      />
    </View>
  )
}

export default SearchBar
