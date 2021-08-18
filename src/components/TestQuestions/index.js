import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import ProgressBar from 'react-native-progress/Bar';

import useFetchQuestions from '../../hooks/useFetchQuestions';
import useTimer from '../../hooks/useTimer';
import convertSecondsToMinutesAndSeconds from '../utils/convertSecondsToMinutesAndSeconds';
import theme from '../../theme';
import TestQuestion from './TestQuestion';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  timer: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body
  }
});

export default function TestQuestions() {
  const navigation = useNavigation();
  const questions = useFetchQuestions("btt1");
  // const timer = useTimer();

  // useEffect(() => {
  //   navigation.setOptions({ headerRight: () => { <Text style={styles.timer}>{timer}</Text> }})
  // }, [timer])

  if (!questions) {
    return <AppLoading style={styles.container} />
  }
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={0.3} width={300} height={20}/>
      <FlatList
      data={questions}
      renderItem={({ item, index }) => <TestQuestion data={item.data} index={index} />}
      keyExtractor={item => item.id}
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      legacyImplementation={false}
      initialNumToRender={10}
      />
      <Footer />
    </SafeAreaView>
  );
}