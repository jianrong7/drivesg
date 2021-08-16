import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useHistory } from 'react-router-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'space-between',
    elevation: 10
  },
  text: {
    color: theme.colors.textPrimary,
    fontFamily: 'Lato_400Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal
  },
  button: {
    width: 110,
    height: 50,
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // shadowColor: theme.colors.grey,
    // shadowOffset: {
    //   width: 10,
    //   height: 10
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 1,
    elevation: 20
  },
  TriangleShapeView: {
    //To make Triangle Shape
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: theme.colors.textPrimary,
    transform: [{ rotate: '90deg' }],
  },
  startText: {
    color: theme.colors.textPrimary
  }
});

export default function TestOption({ text }) {
  const history = useHistory();
  const handlePress = () => {
    console.log("hello")
    history.push(`/test`);
  }
  return (
    <View>
      <Pressable onPress={handlePress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.button}>
          <View style={styles.TriangleShapeView}></View>
          <Text style={styles.startText}>Start</Text>
        </View>
      </Pressable>
    </View>
  );
}