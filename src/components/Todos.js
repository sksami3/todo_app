import React from 'react'
import Todo from './Todo';
import style from './todos.module.css'


const Todos = (props) => {

  const deleteHandler = (id) => {
    props.onDeleteToDo(id);
  }

  return (
    <section className={style.todos}>
      {
        props.todos.map((todo) => <Todo todo={todo.todo} key={todo.id} id={todo.id} onDeleteToDo={ deleteHandler } />)
      }
    </section>
  )
}

export default Todos