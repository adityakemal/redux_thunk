const initialState = {
    todos : [], 
    users : []
}


const todosReducer= (state = initialState, action)=>{
    if (action.type === 'GET_TODOS') {
        return{
            ...state,
            todos : action.payload
        }
    }

    if (action.type === 'GET_USERS') {
        return{
            ...state,
            users : action.payload
        }
    }

    return state
}

export default todosReducer