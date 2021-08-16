import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#ffffff',
    textSecondary: '#3e9ffe',
    primary: '#353a65',
    secondary: '#0369CE',
    correct: '#27ae60',
    wrong: '#ff004e',
    grey: '#a8a9b2',
  },
  fontSizes: {
    body: 18,
    subheading: 21,
    heading: 24
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
  },
};

export default theme;