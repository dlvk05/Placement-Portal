import { createStore, applyMiddleware, compose ,combineReducers} from "redux";
import thunk from "redux-thunk";



//des  we are creating a enhancer which will give access to the store to our redux Devtools extension in google chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;