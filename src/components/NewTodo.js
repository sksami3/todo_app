import React, { useState } from 'react'
import style from './newTodo.module.css';

const NewTodo = (props) => {

  const [todo, setTODO] = useState({ title: "", desc: "" });

  const handleChange = (event) => {
    var name = event.target.name;

    setTODO((oldValue) =>{
      return {...oldValue, [name]: event.target.value}
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onAddTodo(todo);
    setTODO({title: "", desc: ""});
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor='title'>Title: </label>
        <input type="text" id='title' name='title' value={todo.title} onChange={handleChange} />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor='desc'>Description: </label>
        <textarea id='desc' name='desc' value={todo.desc} onChange={handleChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewTodo