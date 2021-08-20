import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

import useFetchQuestions from '../../hooks/useFetchQuestions';
import useTimer from '../../hooks/useTimer';
import theme from '../../theme';
import QuestionFlatList from './QuestionsFlatList';
import FooterComponent from './FooterComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  timer: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body
  },
  progressBar: {
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center'
  }
});

export default function TestQuestions({ route }) {
  const [progressIndex, setProgressIndex] = useState(0);
  const [answers, setAnswers] = useState([])

  const { name } = route.params;
  const navigation = useNavigation();
  const questions = useFetchQuestions(name.replace(/\s/g, '').toLowerCase());

  const flatListRef = useRef();

  const timer = useTimer();

  useEffect(() => {
    navigation.setOptions({ headerRight: () => ( <Text style={styles.timer}>{timer}</Text> )})
  }, [timer])

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ index })
  }

  if (!questions) {
    return <SafeAreaView style={styles.container} />
  }
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={progressIndex / 49} style={styles.progressBar} height={20} width={310} />
      <QuestionFlatList 
        data={questions} 
        forwardedRef={flatListRef} 
        scrollToIndex={scrollToIndex} 
        setProgressIndex={setProgressIndex} 
        answers={answers} 
        setAnswers={setAnswers} 
      />
      <FooterComponent scrollToIndex={scrollToIndex} index={progressIndex} data={{ answers, questions }} name={name} />
    </SafeAreaView>
  );
}