import { ADD_TASK, DELETE_TASK } from "../actions/type";

var id = 1;
const date = new Date();
const currentDate = date.toLocaleDateString("en-US");
const initialState: any = {
    Task: [
        {
            id: 1,
            taskdescription: 'need to buy a milk',
            updateAt: currentDate,
        },
    ]
};

const taskReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                Task: [
                    ...state.Task, {
                        id: ++id,
                        taskdescription: action.payload.Task.find((i: any) => i.taskdescription).taskdescription,
                        updateAt: action.payload.Task.find((i: any) => i.updateAt).updateAt,
                    }],
            };
        case  DELETE_TASK: 
            return{
                ...state,
                Task: action.payload.Task,
            }
        default:
            return state;
    }
}

export default taskReducer;