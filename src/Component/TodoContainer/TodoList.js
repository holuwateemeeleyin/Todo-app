import React from 'react'
import TodoItem from './item';

export default function TodoList(props) {
    const {todo} = props
    return (
        <div className='todoList-container'>
            <TodoItem
                todo={todo}
            />
        </div>
    )
}
