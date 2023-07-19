import React, { useState } from 'react'
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  label: {
    textDecorationLine: 'underline',
    color: 'dodgerblue',
  },
})

const useShowMore = ({
  list = [],
  limit = 20,
  buttonStyle = styles.label,
}: {
  list?: string[]
  limit?: number
  buttonStyle?: StyleProp<TextStyle>
}) => {
  const [showAll, setShowAll] = useState<boolean>(false)

  const shouldShowButtom = list.length > 20 && !showAll

  const text = `${(showAll ? list : list.slice(0, limit)).join(
    ', '
  )}${shouldShowButtom && '...'}`

  const ShowMoreOrLessLabelButton = () => (
    <TouchableOpacity
      onPress={() => {
        setShowAll(!showAll)
      }}
    >
      <Text style={[buttonStyle]}>
        {showAll ? 'Show less' : 'Show more'}
      </Text>
    </TouchableOpacity>
  )

  return {
    text,
    ShowMoreButton: ShowMoreOrLessLabelButton,
    isExpanded: showAll,
  }
}

export default useShowMore
