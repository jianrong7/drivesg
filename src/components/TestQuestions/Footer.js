import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 25,
    elevation: 10,
    backgroundColor: theme.colors.secondary
  },
  font: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body
  }
});

export default function Footer({ scrollToIndex, index }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => scrollToIndex(index - 1)}>
        <Text style={styles.font}>Previous</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => scrollToIndex(index + 1)}>
        <Text style={styles.font}>Next</Text>
      </Pressable>      
    </View>
  )
}