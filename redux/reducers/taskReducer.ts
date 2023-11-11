import { ADD_PLACE } from "../actions/type";

var id = 1;
const date = new Date();
const currentDate =  date.toLocaleDateString("en-US");
const initialState: any = {
    Task: [{
        id: id,
        taskdescription: 'need to buy a milk',
        updateAt: currentDate,
    }]
};

const taskReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_PLACE:
            // console.log(...state);
            return {
                ...state,
                Task: [{
                    id: ++id,
                    taskdescription: action.payload.Task.find((i: any) => i.taskdescription).taskdescription,
                    updateAt: action.payload.Task.find((i: any) => i.updateAt).updateAt,
                }],
                // Task: action.payload.Task,
                // updateAt: action.payload.updateAt,
            };
        default:
            return state;
    }
}

export default taskReducer;