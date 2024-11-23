import React, { useContext,useEffect, useState } from 'react';
import { ButtonTypes } from '../sharedComponent/_enums/ButtonTypes.ts';
import Button from '../sharedComponent/Button';
import style from '../styles/Management.module.scss';
import { ToDoContext } from '../store/to-do-context.jsx';
import ShowTasks from './ShowTasks.jsx';

const Management = () => {

    const context = useContext(ToDoContext);
    const[isAdd,setIsAdd]=useState(false);

    const handleOnClick = () => {
        context.onAddTask();
    }
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        context.onChangeTask(name, value);
    }

    useEffect(() => {
        setIsAdd(prev=>prev=true);
    }, [context.tasks]);

    return (
        <div className={style.management}>
            <div className={style.management__add}>
                <input onChange={handleOnChange} className={style.management__addInput} type='text' placeholder='task name' value={context.task.name} name="name" />
                <input onChange={handleOnChange} className={style.management__addInput} type='text' placeholder='task description' value={context.task.description} name="description" />
            </div>

            <div className={style.management__btn} >
                <Button type={ButtonTypes.button} onClick={handleOnClick} >Add Task </Button>
            </div>
            {isAdd &&<ShowTasks/>}
        </div>
    );
};

export default Management;