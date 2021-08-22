import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  text:{
    color: theme.colors.textPrimary,
    marginBottom: 10,
    fontSize: theme.fontSizes.body,
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    backgroundColor: theme.colors.pressed,
    height: 50,
    width: 120,
    marginBottom: 10,
    borderRadius: 15,
    justifyContent: 'center'
  }
})

export default function ResultFooter({ name }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable 
      onPress={() => navigation.navigate('LandingPage')}
      android_ripple={{color: theme.colors.tertiary, radius: 49}}
      style={styles.button}
      >
        <Text style={styles.text}>Back to home</Text>
      </Pressable>
    </View>
  )
}