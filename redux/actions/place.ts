import { ADD_PLACE } from "./type";

type props = {
    placeName: any,
    places: Array<string>,
}

export const addPlace = ({placeName, places}: props) => {
    return{
        type: ADD_PLACE,
        payload: {
            places: places,
            placeName: placeName,
        },
    }
}