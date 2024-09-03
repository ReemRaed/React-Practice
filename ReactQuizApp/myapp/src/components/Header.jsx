import { useEffect } from 'react';
import img from '../assets/quiz-logo.png'
const Header =()=>{
    return(
        <header>
            <img src={img} alt="quiz app"/>
            <h1>React Quiz App</h1>
        </header>
    )
}

export default Header;