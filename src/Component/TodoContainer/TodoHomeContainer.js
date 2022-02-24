import React, { Component } from 'react'
import TodoList from './TodoList'
export default class TodoHomeContainer extends Component {
    state = {
        todo: [
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
  render() {
      const {todo} = this.state
    return (
    <div className='TodoHomeContainer'>
          <h1>Todo</h1>
          <TodoList
            todo ={todo}
          />
    </div>
    )
  }
}
