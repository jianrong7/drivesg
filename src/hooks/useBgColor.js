import { useState, useEffect } from 'react';
import theme from '../theme';

const useBgColor = (data, answer) => {
  const [bgColor, setBgColor] = useState([
    theme.colors.pressed,
    theme.colors.pressed,
    theme.colors.pressed,
  ])

  useEffect(() => {
    const newBgColor = []
    for (let i = 0; i < 3; i++) {
      if (data.options[i].isCorrect) {
        newBgColor.push(theme.colors.correct)
      } else if (i === answer.optionNumber) {
        newBgColor.push(theme.colors.wrong)
      } else {
        newBgColor.push(theme.colors.pressed)
      }
    }
    setBgColor(newBgColor)
  }, [])

  return bgColor;
}

export default useBgColor;