import React from 'react'
import TodoItem from './item';

export default function TodoList(props) {
    const { todos, onChangeHandler, deleteTodo, updateTodo } = props
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
                            deleteTodo = {deleteTodo}
                            updateTodo={updateTodo}
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
