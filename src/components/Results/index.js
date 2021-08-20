import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import useCalculateScore from '../../hooks/useCalculateScore';
import theme from '../../theme';
import ResultHeader from './ResultHeader';
import ResultQuestion from './ResultQuestion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.primary
  },
})

const ItemSeparator = () => <View style={styles.separator} />;

export default function Results({ route }) {
  const { data, name } = route.params;
  const scoreObj = useCalculateScore(data);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.questions}
        renderItem={({ item, index }) => (
        <ResultQuestion data={item.data} answer={data.answers[index]} index={index} />
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
