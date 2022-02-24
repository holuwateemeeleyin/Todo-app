import React from 'react'

export default function item(props) {
    const { todo, onChangeHandler } = props
    return (
        <div className='todoItem'>
            <li>
                <input type='checkbox'
                    checked={todo.completed}
                    onChange={() => onChangeHandler(todo.id)}

                />
                {todo.title}
            </li>
        </div>
    )
}
