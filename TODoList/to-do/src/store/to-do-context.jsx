import { createContext, useReducer } from "react";
import Reducer from "../store/reducer";

export const ToDoContext = createContext({
    user: { name: "", password: "", id: "" },
    task: { name: "", description: "", id: "" },
    userCounter: 1,
    taskCounter: 1,
    selectedTask:null,
    users: [],
    tasks: [],
    isValid: false,
    onChange: () => { },
    onChangeTask: () => { },
    onAdd: () => { },
    onAddTask: () => { },
    onRemoveTask: () => { },
    onUpdateTask: () => { },
    onGetTaskByID: () => { },
});

export default function ToDoContextProvider({ children }) {
    const [toDoState, toDoStateDispatch] = useReducer(Reducer, {
        user: { name: "", password: "", id: "" },
        task: { name: "", description: "", id: "" },
        userCounter: 1,
        taskCounter: 1,
        users: [],
        tasks: [],
        isValid: false,
        selectedTask:null,
    });

    const onChange = (name, value) => {
        toDoStateDispatch({
            type: "ON-CHANGE",
            payload: { name, value }
        });
    };
    const onChangeTask = (name, value) => {
        toDoStateDispatch({
            type: "ON-CHANGE-TASK",
            payload: { name, value }
        });
    };
    const onAdd = () => {
        toDoStateDispatch({ type: "ON-ADD" });
    };
    const onAddTask = () => {
        toDoStateDispatch({
            type: "ON-ADD-TASK"
        });
    };
    const onRemoveTask = (id) => {
        toDoStateDispatch({
            type: "ON-REMOVE-TASK",
            payload: { id }
        })
    };
    const onUpdateTask = (id, name, value) => {
        toDoStateDispatch({
            type: "ON-UPDATE-TASK",
            payload: { id, name, value }
        })
    };
    const onGetTaskByID = (id) => {
        toDoStateDispatch({
            type: "ON-GET-TASK-BY-ID",
            payload: { id }
        })
    };
    return (
        <ToDoContext.Provider
            value={{
                users: toDoState.users,
                user: toDoState.user,
                tasks: toDoState.tasks,
                task: toDoState.task,
                userCounter: toDoState.userCounter,
                taskCounter: toDoState.taskCounter,
                isValid: toDoState.isValid,
                selectedTask:toDoState.selectedTask,
                onChange,
                onAdd,
                onChangeTask,
                onAddTask,
                onRemoveTask,
                onUpdateTask,
                onGetTaskByID
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
}