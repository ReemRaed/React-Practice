import React, { useContext, useRef, useState } from 'react';
import style from '../styles/Task.module.scss';
import img from '../assets/icons/calendar.png'
import { ButtonTypes } from '../sharedComponent/_enums/ButtonTypes.ts';
import Button from '../sharedComponent/Button';
import { ToDoContext } from '../store/to-do-context.jsx';
import AddUpdate from './AddUpdate.jsx';

const Task = ({ task }) => {

    const { name, description } = task;
    const context = useContext(ToDoContext);
    const ref = useRef();
    const [selectedId, setSelectedId] = useState(null);


    const handleOnClick = (id) => {
        context.onRemoveTask(id);
    };

    const handleOpenModel = (id) => {
        setSelectedId(id); 
        ref.current.open();
    };
    return (
        <div className={style.task}>
            <img className={style.task__img} src={img} alt='task' />
            <div className={style.task__content} >
                <h3>{name}</h3>
                <p>{description}</p>
                <div className={style.task__actions}>
                    <div className={style.task__button}>
                        <Button type={ButtonTypes.submit} onClick={() => handleOpenModel(task.id)}>Update </Button>
                    </div>
                    <div className={style.task__button}>
                        <Button type={ButtonTypes.reset} onClick={() => handleOnClick(task.id)}>Remove </Button>
                    </div>
                    <AddUpdate  ref={ref} title="Update" id={selectedId}/>

                </div>
            </div>

        </div>
    );
};

export default Task;