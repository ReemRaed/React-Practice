import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ToDoContext } from '../store/to-do-context';
import Button from '../sharedComponent/Button';
import { ButtonTypes } from '../sharedComponent/_enums/ButtonTypes.ts';
import style from '../styles/Model.module.scss';

const AddUpdate = forwardRef(function Modal({ title, id }, ref) {
    const context = useContext(ToDoContext);
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open: () => {
            dialog.current.showModal();
        },
    }));

    useEffect(() => {
        if (id && (!context.task || context.task.id !== id)) {
            context.onGetTaskByID(id);
        }
    }, [id]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        context.onChangeTask(name, value);
    };

    const handleOnClick = () => {
        context.onUpdateTask(context.task);
    };

    return createPortal(
        <dialog ref={dialog} className={style.modal}>
            <h2>Update Task</h2>
            <form method="dialog">
                <h2>{title}</h2>
                <div>
                    <input
                        onChange={handleOnChange}
                        type="text"
                        placeholder="task name"
                        value={context.task?.name || ''}
                        name="name"
                    />
                    <input
                        onChange={handleOnChange}
                        type="text"
                        placeholder="task description"
                        value={context.task?.description || ''}
                        name="description"
                    />
                </div>
                <div>
                    <Button type={ButtonTypes.button} onClick={handleOnClick}>
                        Update Task
                    </Button>
                </div>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
});

export default AddUpdate;
