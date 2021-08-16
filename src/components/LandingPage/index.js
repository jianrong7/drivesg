import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import TestOptions from './TestOptions';

export default function LandingPage() {
  return (
    <View>
      <Header />
      <TestOptions />
    </View>
  );
}