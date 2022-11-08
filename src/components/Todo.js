import React from 'react'
import style from './todo.module.css'

const Todo = (props) => {

  const clickHandler = (id) => {
    props.onDeleteToDo(id);
  }

  const { desc, title } = props.todo;
  const{ id } = props;
  
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className='btn' onClick={() => { clickHandler(id) }}><i className='fa fa-trash fa-2x'></i></button>
      </div>
    </article>
  )
}

export default Todo