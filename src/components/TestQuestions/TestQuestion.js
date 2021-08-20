import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import theme from '../../theme';
import OptionButton from './OptionButton';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    width: screen.width,
    padding: 20,
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

export default function TestQuestion({ data, index, scrollToIndex, answers, setAnswers, props }) {
  const [pressed, setPressed] = useState([
    {
      pressed: false,
      backgroundColor: theme.colors.pressed
    },
    {
      pressed: false,
      backgroundColor: theme.colors.pressed
    },
    {
      pressed: false,
      backgroundColor: theme.colors.pressed
    },
  ])

  const changeColour = (optionNumber) => {
    const newPressed = [];
    for (let i = 0; i < 3; i++) {
      if (i === optionNumber) {
        newPressed.push({ pressed: true, backgroundColor: theme.colors.tertiary })
      } else {
        newPressed.push({ pressed: false, backgroundColor: theme.colors.pressed })
      }
    }
    setPressed(newPressed);
  }
  return (
    <View style={[styles.item, props]}>
      <Text style={styles.questionHeader}>Question {index + 1} / 50</Text>
      <Text style={styles.question}>{data.question}</Text>
      {data.image ? 
      <Image style={styles.picture} source={{ uri: data.image }} /> 
      : null}
      <View style={styles.options}>
        {data.options.map((option, i) => {
          return (
            <OptionButton 
            key={index + i} 
            text={option.option} 
            data={{ questionNumber: index, optionNumber: i, pressed: pressed[i] }}
            changeColour={changeColour}
            scrollToIndex={scrollToIndex} 
            answers={answers} 
            setAnswers={setAnswers}
            />
          )
        })}
      </View>
    </View>
  );
}