import * as axios from 'axios'
import COUNT_ACTIONS from './countActions'
import TODO_ACTIONS from './todoActions'

axios.defaults.baseURL = `https://jsonplaceholder.typicode.com`;


const ACTION = {
    ...COUNT_ACTIONS,
    ...TODO_ACTIONS
}

export default ACTION

// export const increamentAction = ()=> async( dispatch, getState)=>{
//     const newCount = await increamentCount()
//     dispatch({
//         type : 'INCREAMENT',
//         payload : newCount
//     })
// }

// export const todosAction = ()=> async( dispatch)=>{
//     const data = await todoService()
//     dispatch({
//         type : 'GET_TODOS',
//         payload : data
//     })
// }

// export const todosAction = ()=>{
//     return (dispatch)=>{
//         axios.get('https://jsonplaceholder.typicode.com/todos/').then(res=>{
//             console.log(res.data)
//             dispatch({
//                 type : 'GET_TODOS',
//                 payload : res.data
//             })
//         }).catch(err=>{
//             dispatch({
//                 type : 'GET_TODOS',
//                 payload : []
//             })
//             console.log(err.message)
//         })
//     }
// }