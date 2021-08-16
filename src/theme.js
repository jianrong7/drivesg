import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#ffffff',
    textSecondary: '#3e9ffe',
    primary: '#353a65',
    secondary: '#3e9dfc',
    correct: '#27ae60',
    wrong: '#ff004e',
    grey: '#a8a9b2',
    white: '#fff',
    red: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 18,
    heading: 22
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