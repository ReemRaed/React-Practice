import React from 'react';
import NavBar from './NavBar';
import style from '../styles/Home.module.scss';
import Management from './Management';
const Home = () => {


    return (
        <div className={style.Home}>
            <NavBar className={style.Home__navBar} />
            <div className={style.Home__container}>
                <Management />
            </div>
        </div>
    );
};

export default Home;