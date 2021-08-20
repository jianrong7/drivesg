import React, { useState } from 'react'
import { Text, StyleSheet, Dimensions, Pressable } from 'react-native';

import theme from '../../theme';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
    height: 80,
    width: screen.width - 40,
    justifyContent: 'center',
    elevation: 10,
    // backgroundColor: theme.colors.secondary,
  },
  font: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.semiBold,
    textAlign: 'center'
  }
});

export default function OptionButton({ text, data, changeColour, scrollToIndex, answers, setAnswers }) {
  const handleOptionPress = () => {
    changeColour(data.optionNumber)

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
    <Pressable onPress={handleOptionPress} style={({ pressed }) => [styles.button, { backgroundColor: pressed ? theme.colors.tertiary : data.pressed.backgroundColor }]} >
      <Text style={styles.font}>{text}</Text>
    </Pressable>
  )
}
