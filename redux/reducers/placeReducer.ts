import { ADD_PLACE } from "../actions/type";

var id = 0;

const initialState: any = {
    id: 0,
    placeName: '',
    places: [],
};

const placeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                id: ++id,
                placeName: action.payload.placeName,
                places: action.payload.places,
            };
        default:
            return state;
    }
}

export default placeReducer;