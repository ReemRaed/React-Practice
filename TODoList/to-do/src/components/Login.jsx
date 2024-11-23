import React, { useContext, useEffect } from 'react';
import style from '../styles/Login.module.scss';
import icon from '../assets/icons/calendar.png';
import { ToDoContext } from '../store/to-do-context';
import Home from './Home';

const Login = () => {

    const context = useContext(ToDoContext);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        context.onChange(name, value);
    }
    const handleOnClick = () => {
        context.onAdd();
    };
    useEffect(() => {
        console.log("Updated users list:", context.users);
    }, [context.users]);

    return (<>
        {
            context.isValid ? <Home /> : <div className={style.Login}>
                <p className={style.Login__title}>Login</p>
                <div className={style.Login__container}>
                    <div className={style.Login__containerLogin}>
                        <p className={style.Login__containerLoginTitle}>Sign In</p>

                        <input name='name' value={context.user.name} onChange={handleOnChange} className={style.Login__containerLoginInput} placeholder='Enter your name' type='text' />
                        <input name='password' value={context.user.password} onChange={handleOnChange} className={style.Login__containerLoginInput} placeholder='Enter your password' type='password' />

                        <button className={style.Login__containerLoginButton} onClick={handleOnClick}>Sign In</button>
                        <p className={style.Login__footerTitle}>remember me</p>
                    </div>
                    <div className={style.Login__containerSplash}>
                        <p className={style.Login__containerTitle}>Welcome to a login </p>
                        <img className={style.Login__img} src={icon} alt='logo' />
                    </div>
                </div>
            </div>
        }
</>
    );
};

export default Login;