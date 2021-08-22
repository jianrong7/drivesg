import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#ffffff',
    textSecondary: '#3e9ffe',
    primary: '#353a65',
    secondary: '#3e9fff',
    tertiary: '#3e549e',
    pressed: '#2276c9',
    correct: '#229954',
    wrong: '#bd3146',
    wrongScore: '#eb2d53',
  },
  fontSizes: {
    body: 16,
    subheading: 18,
    heading: 20
  },
  fonts: {
    main: Platform.select({
      android: 'Lato-Regular',
      ios: 'Lato-Regular',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    light: '300',
    bold: '700',
    thin: '100'
  },
};

export default theme;