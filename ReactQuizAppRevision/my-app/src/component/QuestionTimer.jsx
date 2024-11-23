import React, { useEffect, useState } from 'react';

const QuestionTimer = ({ time, timeLogic }) => {

    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(()=>{
       const timer= setTimeout(timeLogic, time);
        return ()=>{
            clearTimeout(timer)
        }

    },[time, timeLogic])

    
    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(preRemainingTime=>preRemainingTime - 100)
        }, 100);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div>
            <progress id='question-time'  max={time} value={remainingTime}/>
        </div>
    );
};

export default QuestionTimer;