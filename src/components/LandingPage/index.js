import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import theme from '../../theme';
import TestOptions from './TestOptions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 15,
  },
});

export default function LandingPage() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <TestOptions />
    </View>
  );
}