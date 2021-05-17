import {createStore, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk'
import countReducer from './reducers/countReducer'
import todosReducer from './reducers/todosReducer'

// const initialState = {
//     count : 0,
//     todos : []
// }


// const rootReducer = (state = initialState, action)=>{
//     switch (action.type) {
//         case 'INCREAMENT':
//            return{
//                ...state,
//                count : action.payload
//            }
//         case 'GET_TODOS':
//         return{
//             ...state,
//             todos : action.payload
//         }
//         default:
//             return state
//     }

// }

const rootReducer = combineReducers({
	countReducer,
	todosReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))