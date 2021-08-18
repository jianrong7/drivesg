import React from 'react';
import { StyleSheet, View } from 'react-native';

import theme from '../../theme';
import TestOption from './TestOption';

const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   text: {
//     color: theme.colors.textPrimary,
//     fontFamily: 'Lato_400Regular',
//     fontSize: theme.fontSizes.heading,
//     fontWeight: theme.fontWeights.bold
//   }
});

export default function TestOptions() {
  return (
    <View>
        <TestOption text={'Basic Theory Test'} />
        <TestOption text={'Final Theory Test'} />
    </View>
  );
}