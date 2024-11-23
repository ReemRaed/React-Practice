import { useState } from "react";
import style from "../style/Login.module.scss";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";


const Login = () => {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnClick = () => {
    if (user.name.length < 6) {
      console.log("In Valid mmm");
    }
  };

  return (
    <section className={style.login}>
      <img className={style.login__icon} src="./logo.png" alt="logo" />
      <div style={{ marginBottom: "2rem" }}>
        <h1 className={style.login__title}>login</h1>
        <p className={style.login__description}>
          Please enter you Login and your Password
        </p>
      </div>
      <div className={style.login__inputBox}>
        <input
          className={style.login__username}
          type="text"
          placeholder="username"
          value={user.name}
          onChange={handleOnChange}
          name="name"
        />
        <CiUser className={style.login__iconU} />
      </div>
      <div  className={style.login__inputBox}>
        <input
          className={style.login__password}
          type="password"
          placeholder="password"
          value={user.password}
          onChange={handleOnChange}
          name="password"
        />
        <RiLockPasswordLine  className={style.login__iconP}  />
      </div>

      <div className={style.login__inputBox}>
      <button className={style.login__button} onClick={handleOnClick}>
        Login
      </button>
      <p className={style.login__signUp}>Dont have an account sign up?</p>
      </div>
    </section>
  );
};

export default Login;
