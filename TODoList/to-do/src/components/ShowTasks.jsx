import React, { useContext } from 'react';
import style from '../styles/ShowTasks.module.scss';
import { ToDoContext } from '../store/to-do-context';
import Task from './Task';

const ShowTasks = () => {

    const context=useContext(ToDoContext);
    return (
        <div className={style.showTasks}>
            {
                context.tasks.map((task)=>{
                    return <Task task={task} key={task.id} />
                })
            }
        </div>
    );
};

export default ShowTasks;