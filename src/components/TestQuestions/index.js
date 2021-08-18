import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

import useFetchQuestions from '../../hooks/useFetchQuestions';
import theme from '../../theme';
import TestQuestion from './TestQuestion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default function TestQuestions() {
  const navigation = useNavigation();
  const questions = useFetchQuestions("btt1");

  if (!questions) {
    return <AppLoading />
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={questions}
      renderItem={({ item }) => <TestQuestion data={item.data} />}
      keyExtractor={item => item.id}
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      legacyImplementation={false}
      />
    </SafeAreaView>
  );
}