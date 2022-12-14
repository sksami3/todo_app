import React, { useState } from 'react'
import style from './home.module.css'
import NewTodo from './NewTodo';
import Todos from './Todos';
import { v4 as uuid } from 'uuid';


const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((oldList) => {
            return [...oldList, { id: uuid(), todo }];
        })
    }

    const deleteToDoHandler = (id) => {
        setTodos((oldList) => {
            return oldList.filter((x) => x.id !== id);
        })
    }

    return (
        <div className={style.container}>
            <h1 style={{ color: "white" }}>TODO App</h1>
            <NewTodo onAddTodo={handleAddTodo} />
            <Todos todos={todos} onDeleteToDo={deleteToDoHandler} />
        </div>
    )
}

export default Home