import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import theme from '../theme';

import LandingPage from './LandingPage';
import TestQuestions from './TestQuestions';
import Results from './Results';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="LandingPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
            shadowColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 0,
          },
          headerTitleStyle : {
            fontSize: theme.fontSizes.heading,
            color: theme.colors.textPrimary,
            fontWeight: theme.fontWeights.bold
          },
          headerTintColor: theme.colors.textPrimary
        }}
        >
          <Stack.Screen
          name="LandingPage" 
          component={LandingPage} 
          options={{ title: 'DriveSG 👋' }}
          />
          <Stack.Screen 
          name="TestQuestions"
          component={TestQuestions}
          options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
          name="Results"
          component={Results}
          options={({ route }) => ({ answers: route.params.answers })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

