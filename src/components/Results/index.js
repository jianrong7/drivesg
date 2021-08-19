import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import useCalculateScore from '../../hooks/useCalculateScore';
import theme from '../../theme';
import TestQuestion from '../TestQuestions/TestQuestion';
import ResultHeader from './ResultHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  text: {
    color: theme.colors.textPrimary
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.tertiary
  },
  question: {
    
  }
})

const ItemSeparator = () => <View style={styles.separator} />;

export default function Results({ route }) {
  const { data, name } = route.params;
  const scoreObj = useCalculateScore(data);
  console.log(scoreObj)
  return (
    <View style={styles.container}>
      <FlatList
        data={data.questions}
        renderItem={({ item, index }) => (
        <TestQuestion data={item.data} index={index} props={styles.question}/>
        )}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
        ListHeaderComponent={() => <ResultHeader name={name} scoreObj={scoreObj} />}
      />
    </View>
  )
}
