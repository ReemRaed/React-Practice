import { useCallback, useState } from "react";
import questions from "../questions";
import img from "../assets/quiz-complete.png";
import QuizQuestion from "./QuizQuestion";

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [answerState, setanswerState] = useState('');

  const quizActiveQuestionIndex =
    answerState === '' ? answers.length : answers.length - 1;
    const quizCompleted = quizActiveQuestionIndex === questions.length;

  const handleOnAnswerSelect = useCallback(
    (answer) => {
      setanswerState('answered');
      setAnswers((prev) => [...prev, answer]);
      setTimeout(() => {
        if (answer === questions[quizActiveQuestionIndex].answers[0]) {
          setanswerState("correct");
        } else {
          setanswerState("wrong");
        }
        setTimeout(() => {
          setanswerState("");
        }, 2000);
      }, 1000);
      
    },
    [ quizActiveQuestionIndex]
  );

  const handleSkipQuestion = useCallback(
    () => handleOnAnswerSelect(null),
    [handleOnAnswerSelect]
  );

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={img} alt="completed" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  

  return (
    <>
        <div id="quiz">
        <QuizQuestion
        key={quizActiveQuestionIndex}
        text={questions[quizActiveQuestionIndex].text}
        quizActiveQuestionIndex={quizActiveQuestionIndex}
        handleSkipQuestion={handleSkipQuestion}
        onSelectAnswer={handleOnAnswerSelect}
        selectedAnswer={answers[answers.length - 1]}
        answerState={answerState}
        answers={questions[quizActiveQuestionIndex].answers}
        />
        </div>
    </>
  );
};

export default Quiz;
