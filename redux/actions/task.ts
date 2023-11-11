import { ADD_PLACE } from "./type";

type props = {
    taskdescription: any,
    updateAt: any,
}

export const addPlace = ({taskdescription, updateAt }: props) => {

    var id = 0;

    return {
        type: ADD_PLACE,
        payload: {
            Task: [{
                id: ++id,
                taskdescription: taskdescription,
                updateAt: updateAt,
            }],
        },
    }
}