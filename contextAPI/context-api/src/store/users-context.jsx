import { createContext, useState } from "react";
import dummyUsers from "../constants/DUMMY-USERS";

export const UsersContext= createContext({
    users:dummyUsers,
    handleRemove:()=>{},
    handleIncrement:()=>{}
});

export default function UserContextProvider ({children})
{

    const [dummyUser, setDummyUsers] = useState(dummyUsers);
    const handleIncrement = (id) => {
        setDummyUsers(
            dummyUser.map((user) => user.id === id ? { ...user, age: user.age + 1 } : user)
        )
    }
    const handleRemove = (id) => {
        setDummyUsers(
            dummyUser.filter((user) => user.id !== id)
        );
    }
    const ctxValue={
      users:dummyUser,
      handleIncrement,
      handleRemove
    }

    return <UsersContext.Provider value={ctxValue}>
            {children}
    </UsersContext.Provider>

}