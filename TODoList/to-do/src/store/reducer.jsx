const Reducer = (state, action) => {
    switch (action.type) {
        case "ON-CHANGE":
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.name]: action.payload.value
                }
            };
        case "ON-CHANGE-TASK":
            return {
                ...state,
                task: {
                    ...state.task,
                    [action.payload.name]: action.payload.value
                }
            };
        case "ON-ADD":
            return {
                ...state,
                users: [...state.users, { ...state.user, id: state.userCounter }],
                user: { name: "", password: "" },
                userCounter: state.userCounter + 1,
                isValid: true,
            };
        case "ON-ADD-TASK":
            return {
                ...state,
                tasks: [...state.tasks, { ...state.task, id: state.taskCounter }],
                task: { name: "", description: "" },
                taskCounter: state.taskCounter + 1,
            };
        case "ON-REMOVE-TASK":
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.payload.id)
            };
        case "ON-UPDATE-TASK":
            return{
                ...state,
                tasks:state.tasks.map((task)=>task.id===action.payload.task?{...task,[action.payload.name]:action.payload.value}:task)
            };
        case "ON-GET-TASK-BY-ID":
                const task = state.tasks.find(task => task.id === action.payload.id);
                if (!task) return state; 
                return {
                    ...state,
                    selectedTask: task  
                };
            
            default:
            return state;
    }
};

export default Reducer;