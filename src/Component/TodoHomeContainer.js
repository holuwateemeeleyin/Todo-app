import React, { Component } from 'react'

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
          {
           todo.map((todoList)=>(
               <ul>
                   <li key={todoList.id}>
                       {todoList.title}
                   </li>
               </ul>
           ))   
          }

    </div>
    )
  }
}
