import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import theme from '../../theme';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  item: {
    width: screen.width,
  },
  font: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading
  }
});

export default function TestQuestion({ data }) {
  return (
    <View style={styles.item}>
      <Text style={styles.font}>{data.question}</Text>
    </View>
  );
}