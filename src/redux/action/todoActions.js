import axios from "axios"


const TODO_ACTIONS = {
    getTodos : ()=>{
        return (dispatch)=>{
            axios.get('/todos/').then(res=>{
                // console.log(res.data)
                dispatch({
                    type : 'GET_TODOS',
                    payload : res.data
                })
            }).catch(err=>{
                dispatch({
                    type : 'GET_TODOS',
                    payload : []
                })
                console.log(err.message)
            })
        }
    },
    getUsers : ()=>{
        return (dispatch)=>{
            axios.get('/users/').then(res=>{
                // console.log(res.data)
                dispatch({
                    type : 'GET_USERS',
                    payload : res.data
                })
            }).catch(err=>{
                dispatch({
                    type : 'GET_USERS',
                    payload : []
                })
                console.log(err.message)
            })
        }
    }
}

export default TODO_ACTIONS
