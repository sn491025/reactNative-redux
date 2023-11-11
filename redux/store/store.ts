import { createStore, combineReducers } from 'redux';
import taskReducer from '../reducers/taskReducer';
// const storeReducer = combineReducers({
//     places: placeReducer
// });

// const configerStore = () => {
//     return createStore(storeReducer);
// }

const Store = createStore(taskReducer);

export default Store;