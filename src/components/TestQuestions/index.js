import React, { useState, useEffect, useRef } from 'react';
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
    alignItems: 'center'
  },
  timer: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body
  }
});

export default function TestQuestions({ route }) {
  const { name } = route.params;

  const navigation = useNavigation();
  const questions = useFetchQuestions(name.replace(/\s/g, '').toLowerCase());

  const [progressIndex, setProgressIndex] = useState(0)

  const onViewRef = useRef((viewableItems) => {
    setProgressIndex(viewableItems.viewableItems[0]?.index)
  });
  const viewConfigRef = useRef({ itemVisiblePercentThreshold: 20 });
  const flatListRef = useRef();
  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ index })
  }
  const timer = useTimer();
  useEffect(() => {
    navigation.setOptions({ headerRight: () => ( <Text style={styles.timer}>{timer}</Text> )})
  }, [timer])

  if (!questions) {
    return <SafeAreaView style={styles.container} />
  }
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={progressIndex / 50} width={300} height={20} borderRadius={10} marginTop={10} />
      <FlatList
      data={questions}
      renderItem={({ item, index }) => <TestQuestion data={item.data} index={index} />}
      keyExtractor={item => item.id}
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={3}
      viewabilityConfig={viewConfigRef.current}
      onViewableItemsChanged={onViewRef.current}
      ref={flatListRef}
      />
      <Footer scrollToIndex={scrollToIndex} index={progressIndex} />
    </SafeAreaView>
  );
}