import React from 'react'
import style from './newTodo.module.css';

const NewTodo = () => {
  return (
    <form className={style.form}>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title: </label>
            <input type="text" id='title' name='title' />
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc'>Description: </label>
            <textarea id='desc' name='desc' />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default NewTodo