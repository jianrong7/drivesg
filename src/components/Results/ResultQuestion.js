import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import theme from '../../theme';
import ResultQuestionOption from './ResultQuestionOption';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 15
  },
  questionHeader: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.heading,
    flexGrow: 1,
    fontWeight: theme.fontWeights.bold
  },
  question: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    flexGrow: 2,
    textAlign: 'center',
  },
  picture: {
    minHeight: 200,
    minWidth: 300,
    margin: 15,
    flexGrow: 5
  }
});

export default function ResultQuestion({ data, answer, index }) {
  const [bgColor, setBgColor] = useState([
    theme.colors.pressed,
    theme.colors.pressed,
    theme.colors.pressed,
  ])

  useEffect(() => {
    const newBgColor = []
    for (let i = 0; i < 3; i++) {
      if (data.options[i].isCorrect) {
        newBgColor.push(theme.colors.correct)
      } else if (i === answer.optionNumber) {
        newBgColor.push(theme.colors.wrong)
      } else {
        newBgColor.push(theme.colors.pressed)
      }
    }
    setBgColor(newBgColor)
  }, [])
  return (
    <View style={styles.item}>
      <Text style={styles.questionHeader}>Question {index + 1} / 50</Text>
      <Text style={styles.question}>{data.question}</Text>
      {data.image ? 
      <Image style={styles.picture} source={{ uri: data.image }} /> 
      : null}
      <View style={styles.options}>
        {data.options.map((option, i) => {
          return (
            <ResultQuestionOption 
            key={index + i} 
            text={option.option} 
            bgColor={{ backgroundColor: bgColor[i] }} 
            />
          )
        })}
      </View>
    </View>
  );
}