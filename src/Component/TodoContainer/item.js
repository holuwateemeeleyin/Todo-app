import React, { Component } from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default class item extends Component {
    render() {

        const completedStyle = {
            textDecoration: 'line-through',
            color: 'green',
            fontStyle: "italic",
            opacity: 0.4,
        }
        const { todo, onChangeHandler, deleteTodo } = this.props
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
                {/* If the todo is completed, the sytling will be true. and if not the
        will be normal */}
                <span style={todo.completed ? completedStyle : null}>
                    {todo.title}
                </span>
            </li>

        )
    }
}