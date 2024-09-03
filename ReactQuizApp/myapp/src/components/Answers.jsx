import { useRef } from "react";
import questions from "../questions";

const Answers = ({ quizActiveQuestionIndex, answers ,onSelectAnswer,answerState,selectedAnswer}) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [
      ...questions[quizActiveQuestionIndex].answers,
    ].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssStyle = "";
        const isSelected =selectedAnswer===answer ;

        if (answerState === "answered" && isSelected) {
          cssStyle = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssStyle = answerState;
        } else {
          cssStyle = "skipped";
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssStyle}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
