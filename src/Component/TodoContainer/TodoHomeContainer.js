import React, { Component } from 'react'
import TodoList from './TodoList'
export default class TodoHomeContainer extends Component {
    state = {
        todos: [
            {
                id:1,
                title: 'Outing with the Kids',
                completed: true
            },
            {
                id:2,
                title:'Learn Javascript',
                completed:true
            },
            {
                id: 3,
                title: 'Create a todo App',
                completed:false
            },
            {
                id:4,
                title: 'Rest and enjoy my life',
                completed:false
            }
        ]
    }

    onChangeHandler = (id)=> {
        // Checking if todo.id is the same with the clicked id,
        // If it is the same flipped the true to false
        // we have to do it by first looping through the data
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
        // console.log('clicked', id);
    }
  render() {
      const {todos} = this.state
    return (
    <div className='TodoHomeContainer'>
          <h1>Todo</h1>
          <TodoList
            todos ={todos}
            onChangeHandler={this.onChangeHandler}
          />
    </div>
    )
  }
}
