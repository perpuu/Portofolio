import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import postReducer from "./post";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({postReducer})
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store