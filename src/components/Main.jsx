import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Route, Switch, Redirect } from 'react-router-native';

import btt1 from '../assets/output.json';
import theme from '../theme';

import LandingPage from './LandingPage';
import TestQuestions from './TestQuestions';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/test">
          <TestQuestions />
        </Route>
        <Redirect to="/" />
      </Switch>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    padding: 15,
  },
});