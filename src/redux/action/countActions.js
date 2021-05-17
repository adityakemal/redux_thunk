

const COUNT_ACTIONS = {
    increamentCount : (data)=>{
        return (dispatch)=>{
            console.log(data)
            dispatch({
                type : 'INCREAMENT',
                payload : data
            })
        }
    }
}

export default COUNT_ACTIONS