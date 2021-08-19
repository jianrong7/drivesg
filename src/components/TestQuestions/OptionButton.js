import React from 'react'
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'

import theme from '../../theme';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 15,
    height: 80,
    width: screen.width - 35,
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: theme.colors.secondary,
  },
  font: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    textAlign: 'center'
  }
});

export default function OptionButton({ text, data, scrollToIndex, answers, setAnswers }) {
  const handleOptionPress = () => {
    const answerObj = { questionNumber: data.questionNumber, optionNumber: data.optionNumber }

    const found = answers.findIndex(answer => answer.questionNumber === data.questionNumber)

    if (found < 0) {
      setAnswers([...answers, answerObj])
    } else {
      let newAnswers = [...answers]
      newAnswers.splice(found, 1)
      setAnswers([...newAnswers, answerObj])
    }    
    scrollToIndex(data.questionNumber + 1)
  }
  return (
    <Pressable style={styles.button} onPress={handleOptionPress}>
      <Text style={styles.font}>{text}</Text>
    </Pressable>
  )
}
