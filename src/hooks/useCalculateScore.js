import { useState, useEffect } from "react";

const useCalculateScore = (data) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    data.answers.forEach(answer => {
      if (data.questions[answer.questionNumber].data.options[0].isCorrect) {
        setScore(score => score + 1)
      }
    })
  }, [])

  return {
    score,
    percentage: (score / 50) * 100,
    status: score > 44 ? 'Passed' : 'Failed'
  };
}

export default useCalculateScore;