import React, { useContext} from 'react';
import style from '../scss/users.module.scss';
import User from './User';
import { UsersContext } from '../store/users-context';
const Users = () => {

    const users=useContext(UsersContext);
    


    return (
        <>
        <div className={style.users}>
            {
                users.users.map((user) => {
                    return <li key={user.id}><User user={user} handleIncrement={users.handleIncrement} handleRemove={users.handleRemove} /></li>
                })
            }
        </div>
        </>
    );
};

export default Users;