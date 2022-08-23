import { combineReducers } from "redux"
import todoReducer from './todos/reducer'
import filterReducer from './filters/reducer'


const rootReducer = combineReducers({
    todo: todoReducer,
    filter: filterReducer
})

export default rootReducer;