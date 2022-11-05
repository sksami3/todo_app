import React from 'react'
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
        <div>
            <Todos todos = {dummyTodos}/>
        </div>
    )
}

export default Home