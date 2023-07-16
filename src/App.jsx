import { useState, useRef, useEffect } from "react";
import { QuizContext } from "./context/QuizContext";
import ContentWrapper from "./components/ContentWrapper";

const App = () => {
  const [showComponent, setShowComponent] = useState('intro');
  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const getRandomQuestions = (arr) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, 3);
  }
  const getQuestions = () => {
    fetch('../questions.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setQuestions(getRandomQuestions(data));
    })
    .catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <QuizContext.Provider 
      value={{
        showComponent, 
        setShowComponent, 
        questions, 
        step, 
        setStep,
        userAnswers,
        setUserAnswers
      }}
    >
      <div className="w-screen h-screen flex justify-center items-center">
        <ContentWrapper />
      </div>
    </QuizContext.Provider>
  )
}

export default App;
