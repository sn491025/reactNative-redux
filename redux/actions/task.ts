import { ADD_TASK, DELETE_TASK } from "./type";


type addTask = {
    taskdescription: any,
    updateAt: any,
};

export const addTask = ({taskdescription, updateAt }: addTask) => {

    var id = 0;

    return {
        type: ADD_TASK,
        payload: {
            Task: [{
                id: ++id,
                taskdescription: taskdescription,
                updateAt: updateAt,
            }],
        },
    }
}

type deleteTask = {
    deleteTask: any;
};

export const DeleteTask = (deleteTask: any) => {
    // console.log('djsjdhsjdh',deleteTask);
        return {
            type: DELETE_TASK,
            payload: {
                Task: deleteTask
            }
        }
}