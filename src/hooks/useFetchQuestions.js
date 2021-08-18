import { useState, useEffect } from 'react';
import db from '../components/utils/firebase';

const useFetchQuestions = (col) => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const tryout = [];
    db.collection(col).get().then((querySnapshot) => {
      querySnapshot.forEach((doc, i) => {
        tryout.push({ id: doc.id, data: doc.data() })
      });
      setQuestions(tryout)
    }).catch(err => console.log(err));
  }, [])

  return questions;
}

export default useFetchQuestions;