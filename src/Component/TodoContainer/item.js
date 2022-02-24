import React from 'react'

export default function item(props) {
    const { todo, onChangeHandler, deleteTodo } = props
    return (
        <div className='todoItem'>
            <li>
                <input type='checkbox'
                    checked={todo.completed}
                    onChange={() => onChangeHandler(todo.id)}
                />
                {todo.title}
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </li>
            
        </div>
    )
}
