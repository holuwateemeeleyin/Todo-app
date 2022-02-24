import React from 'react'
import TodoItem from './item';

export default function TodoList(props) {
    const { todos, onChangeHandler } = props
    console.log(props);
    return (
        <div className='todoList-container'>
            <ul>
                {
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onChangeHandler={onChangeHandler}
                        />
                    ))
                }
            </ul>
            {/* <TodoItem
                todo={todo}
            /> */}
        </div>
    )
}
