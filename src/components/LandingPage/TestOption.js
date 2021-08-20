import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Test from './Test';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
  }
});

export default function TestOption({ text, subheading, options }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.subheading}>{subheading}</Text>
      <ScrollView 
      horizontal
      alwaysBounceHorizontal
      showsHorizontalScrollIndicator={false}
      >
      {Array(options[1]).fill(null).map((_, i) => i).map(option => {
        return (
          <Test key={options[0] + ' ' + (option + 1)} text={options[0] + ' ' + (option + 1)} />
        )
      })}

      </ScrollView>
    </View>
  );
}