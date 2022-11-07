import React from 'react'
import style from './home.module.css'
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummyTodos = [
    {
        id: 1,
        title: "todo title 1",
        desc: "todo 1 desc"
    },
    {
        id: 2,
        title: "todo title 2",
        desc: "todo 2 desc"
    }
];

const Home = () => {
    return (
        <div className={style.container}>
            <h1 style={{color: "white"}}>TODO App</h1>
            <NewTodo />
            <Todos todos = {dummyTodos}/>
        </div>
    )
}

export default Home