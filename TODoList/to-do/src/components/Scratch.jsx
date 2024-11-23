import React from 'react';
import style from  '../styles/Scratch.module.scss';
import icon from '../assets/icons/to-do-list.png'

const Scratch = () => {
    return (
        <div className={style.Scratch}>
            <img className={style.Scratch__img} src={icon} alt='icon'/>
            <p className={style.Scratch__title}>TO DO LIST </p>
        </div>
    );
};

export default Scratch;