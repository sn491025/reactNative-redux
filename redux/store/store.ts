import { createStore, combineReducers } from 'redux';
import placeReducer from '../reducers/placeReducer';

// const storeReducer = combineReducers({
//     places: placeReducer
// });

// const configerStore = () => {
//     return createStore(storeReducer);
// }

const Store = createStore(placeReducer);

export default Store;