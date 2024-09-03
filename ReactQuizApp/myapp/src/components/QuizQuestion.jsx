import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const QuizQuestion=({answers,text,quizActiveQuestionIndex,handleSkipQuestion,
    answerState,selectedAnswer,onSelectAnswer
})=>{
    
    return(
        <div id="question">
        <QuestionTimer
          timeOut="10000"
          OnTimeOut={handleSkipQuestion}
        />
        
        <h2>{text}</h2>

        <Answers
        quizActiveQuestionIndex={quizActiveQuestionIndex}
        answers={answers}
        onSelectAnswer={onSelectAnswer}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        />
      </div>
    )
}

export default QuizQuestion;
