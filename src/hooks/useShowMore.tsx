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

  const shouldShowButtom = list.length > limit && !showAll

  const text = `${(showAll ? list : list.slice(0, limit)).join(
    ', '
  )}${shouldShowButtom ? '...' : ''}`

  const ShowMoreOrLessLabelButton = () => {
    if (list.length > limit) {
      return (
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
    }
    return <></>
  }

  return {
    text,
    ShowMoreButton: ShowMoreOrLessLabelButton,
    isExpanded: showAll,
  }
}

export default useShowMore
