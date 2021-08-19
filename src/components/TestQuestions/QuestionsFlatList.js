import React, { useState, useEffect, useRef, createRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';

import useFetchQuestions from '../../hooks/useFetchQuestions';
import useTimer from '../../hooks/useTimer';
import theme from '../../theme';
import TestQuestion from './TestQuestion';

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

export default function QuestionFlatList({ data, forwardedRef, scrollToIndex, setProgressIndex, answers, setAnswers }) {
  const viewConfigRef = useRef({ itemVisiblePercentThreshold: 20 });

  const onViewRef = useRef((viewableItems) => {
    setProgressIndex(viewableItems.viewableItems[0]?.index)
  });
  
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
      <TestQuestion data={item.data} index={index} scrollToIndex={scrollToIndex} answers={answers} setAnswers={setAnswers} />
      )}
      keyExtractor={item => item.id}
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={3}
      viewabilityConfig={viewConfigRef.current}
      onViewableItemsChanged={onViewRef.current}
      ref={forwardedRef}
    />
  );
}