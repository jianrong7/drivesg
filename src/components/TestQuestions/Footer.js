import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 40
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
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold
  }
});

export default function Footer({ scrollToIndex, index, data, name }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {index > 0 ?
        <Pressable onPress={() => scrollToIndex(index - 1)} hitSlop={60}>
          <Text style={styles.font}>Previous</Text>
        </Pressable>
        :
        <Pressable disabled>
          <Text style={styles.font}>Previous</Text>
        </Pressable>
      }

      {index === 49 ?
      <Pressable onPress={() => navigation.navigate('Results', { data, name })} hitSlop={60}>
        <Text style={styles.font}>Finish</Text>
      </Pressable>   
      :
      <Pressable onPress={() => scrollToIndex(index + 1)} hitSlop={60}>
        <Text style={styles.font}>Next</Text>
      </Pressable>   
      }
   
    </View>
  )
}
