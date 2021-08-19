import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import ProgressBar from 'react-native-progress/Bar';

import useFetchQuestions from '../../hooks/useFetchQuestions';
import useTimer from '../../hooks/useTimer';
import theme from '../../theme';
import TestQuestion from './TestQuestion';
import Footer from './Footer';
import QuestionFlatList from './QuestionsFlatList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center'
  },
  timer: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body
  }
});

export default function TestQuestions({ route }) {
  const [progressIndex, setProgressIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

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
      <ProgressBar progress={progressIndex / 49} width={300} height={20} borderRadius={10} marginTop={10} />
      <QuestionFlatList 
      data={questions} 
      forwardedRef={flatListRef} 
      scrollToIndex={scrollToIndex} 
      setProgressIndex={setProgressIndex} 
      answers={answers} 
      setAnswers={setAnswers} 
      />
      {progressIndex === 49 ?
      <Footer scrollToIndex={scrollToIndex} index={progressIndex} finish={true} /> 
      :
      <Footer scrollToIndex={scrollToIndex} index={progressIndex} />
      }
    </SafeAreaView>
  );
}