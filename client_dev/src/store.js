import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//importamos nuestro reducer
import meetupsReducer from './reducers';

//creamos un reducer principal que combina todos los reducer que realicemos
const mainReducer = combineReducers({meetups:meetupsReducer});

//creamos el store especificando que utilizamos thunk 
export default createStore(mainReducer,applyMiddleware(thunk));