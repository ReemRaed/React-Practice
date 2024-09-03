import { useEffect, useState } from "react";

const QuestionTimer = ({ timeOut, OnTimeOut }) => {
  const [remainingTime, setremainingTime] = useState(timeOut);

  useEffect(()=>{
    console.log("Question Timer")
  },[]);
  
  useEffect(() => {
    const time = setTimeout(OnTimeOut, timeOut);
    return () => {
      clearTimeout(time);
    };
  }, [OnTimeOut, timeOut]);

  useEffect(() => {
    const time= setInterval(() => {
      setremainingTime((prev) => prev - 100);
    }, 100);
    return () => {
      clearInterval(time);
    };
  }, []);

  return <progress id="question-time" max={timeOut} value={remainingTime} />;
};

export default QuestionTimer;
