import { useCallback, useState } from "react";
import DUMMY_QUESTION from '../question'
import img from '../assets/quiz-complete.png'
import QuestionTimer  from "./QuestionTimer";
const Quiz = () => {

    const [answers, setAnswers] = useState([]);
    const activeQuizIndex = answers.length;
    const quizCompleted = activeQuizIndex === DUMMY_QUESTION.length;


    const handleSelectedAnswer = useCallback((answer) => {
        if(answer===DUMMY_QUESTION[activeQuizIndex].answers[0])
        {
            console.log(DUMMY_QUESTION[activeQuizIndex].answers[0])
        }
        setAnswers(oldAnswers => [...oldAnswers, answer]);

    },[activeQuizIndex]);

    const handleSkipAnswer = useCallback(()=>handleSelectedAnswer(null),[handleSelectedAnswer]);

    if (quizCompleted) {
        return <div id="summary">
            <img src={img} alt="quizCompleted" />
            <h2>Quiz Completed</h2>
        </div>
    }


    const shuffledAnswersArray = [...DUMMY_QUESTION[activeQuizIndex].answers];
    shuffledAnswersArray.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer time={10000} timeLogic={handleSkipAnswer} key={activeQuizIndex}/>
                <h2>{DUMMY_QUESTION[activeQuizIndex]['text']}</h2>
                <ul id="answers">
                    {
                        shuffledAnswersArray.map((answer) => <li key={answer} className="answer">
                            <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button></li>)
                    }
                </ul>
            </div>

        </div>
    )

}

export default Quiz;