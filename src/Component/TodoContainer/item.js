import React from 'react'
import { MdDeleteForever } from 'react-icons/md'


export default function item(props) {

    const { todo, onChangeHandler, deleteTodo } = props

    const completedStyle = {
        textDecoration: 'line-through',
        color: 'green',
        fontStyle: "italic",
        opacity: 0.4,
    }
    return (
        <li className='todoItem'>
            <input type='checkbox'
                className='checkbox'
                checked={todo.completed}
                onChange={() => onChangeHandler(todo.id)}
            />
            {/* {todo.title} */}
            <button onClick={() => deleteTodo(todo.id)} className='delete-button'>
                <MdDeleteForever size='20' color='red' />
            </button>
            <span style={todo.completed ? completedStyle : null}>
                {todo.title}
            </span>
        </li>

    )
}
