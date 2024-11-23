import React from 'react';
import style from '../styles/sharedStyles/Button.module.scss';
import { ButtonTypes } from '../sharedComponent/_enums/ButtonTypes.ts';
import classNames from 'classnames';


const Button = ({ children, type, ...props }) => {
    
    const buttonTypeClasses = {
        [ButtonTypes.submit]: 'button--submit',
        [ButtonTypes.reset]:  'button--reset',
        [ButtonTypes.reject]: 'button--reject',
        [ButtonTypes.cancel]: 'button--cancel',
        default: 'button--button',
    };

    const colorClass = buttonTypeClasses[type] || buttonTypeClasses.default;
    return (
        <button
            className={classNames(style.button, style[colorClass])}
            {...props}
        >
            {children}
        </button>

    );
};

export default Button;