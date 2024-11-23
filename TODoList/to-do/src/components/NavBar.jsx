import React, { useContext } from 'react';
import classes from '../styles/NavBar.module.scss';
import { ToDoContext } from '../store/to-do-context';
import img from '../assets/icons/to-do-list.png'

const NavBar = () => {
    const context = useContext(ToDoContext);
    return (
        <div className={classes.navBar}>
            <div className={classes.navBar__header}>
                <img className={classes.navBar__img} src={img} alt='icon' />
                <p className={classes.navBar__title}>{context.users[0]?.name}</p>
            </div>
            <ul className={classes.navBar__taskList}>
                <li></li>
            </ul>
        </div>
    );
};

export default NavBar;