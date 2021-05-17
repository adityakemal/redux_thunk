import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import ACTION from './redux/action/action';
// import { increamentAction, todosAction } from './redux/action/action';

function App({increamentFunc,getTodos, count, todos, users, getUsers}) {
  console.log(count)
  useEffect(()=>{
    // getTodos()
  }, [])
  console.log(todos)
  return (
    <div className="App">
      <h1>TEST</h1>
        <button 
          style={{padding : 20}} 
          onClick={()=> increamentFunc(count + 2)}
        >
          {count}
        </button>
        <br/>
        <br/>

        <button onClick={getUsers}>get data user</button>
        <h2>USER LIST</h2>
        {
          users.map((res,i)=>(
            <p key={i}>{res.name}</p>
          ))
        }

        <br/>
        <br/>

        <button onClick={getTodos}>get data todos</button>
        <h2>TODO LIST</h2>
        {
          todos.map((res,i)=>(
            <p key={i}>{res.title}</p>
          ))
        }

        
    </div>
  );
}

const mapStateToProps = (state) => ({
  count : state.countReducer.count,
  todos : state.todosReducer.todos,
  users : state.todosReducer.users,
})

const mapDispatchToProps = {
  increamentFunc : (data)=> ACTION.increamentCount(data),
  getTodos : ()=> ACTION.getTodos(),
  getUsers : ()=> ACTION.getUsers(),
}

export default connect(mapStateToProps, mapDispatchToProps)(App)