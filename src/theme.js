import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#ffffff',
    textSecondary: '#3e9ffe',
    primary: '#353a65',
    secondary: '#0369CE',
    tertiary: '#343b78',
    pressed: '#1666b5',
    correct: '#27ae60',
    wrong: '#ff004e',
    grey: '#a8a9b2',
  },
  fontSizes: {
    body: 16,
    subheading: 18,
    heading: 20
  },
  fonts: {
    main: Platform.select({
      android: 'Lato-Regular',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
    thin: '200'
  },
};

export default theme;