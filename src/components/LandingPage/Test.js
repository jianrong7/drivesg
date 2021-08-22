import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    width: 90,
    borderRadius: 15,
    margin: 10,
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: theme.colors.pressed
  },
  text: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading
  }
});

export default function Test({ text }) {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable 
      onPress={() => navigation.navigate('TestQuestions', { name: text })}
      android_ripple={{color: theme.colors.tertiary, radius: 49}}
      style={styles.container}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}