import { useContext } from 'react';
import style from '../scss/user.module.scss'
import { UsersContext } from '../store/users-context';

const User = ({user}) => {

    const users=useContext(UsersContext);

    const handleOnClick=(id)=>{
        users.handleIncrement(id)
    }
    const handleOnRemove=(id)=>{
        users.handleRemove(id)
    }

    return (
        <div className={style.user}>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <button className={style.user__btn} onClick={()=>handleOnClick(user.id)}>Increment Age</button>
            <button className={style.user__btn} onClick={()=>handleOnRemove(user.id)}>Remove</button>
        </div>
    );
};

export default User;