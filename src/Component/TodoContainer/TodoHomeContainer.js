import React, { Component } from 'react'
import AddTodo from './AddTodo'
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
        this.setState( prevState=> ({
            // using prevState is to get the upto date data
            todos: prevState.todos.map((todo) => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        }))
        // console.log('clicked', id);
    }


    //  Deleting function 
    deleteTodoItem = (id)=> {
        this.setState(prevState=> ({
            todos:prevState.todos.filter((todo)=>{
                return todo.id !== id
            })
        }))
        // console.log('deleted', id);
    }

    // Add todo
    addTodo=(title)=>{
        // console.log('add todo', id);
        // add new todo
        const newTodo = {
            id:5,
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

  render() {
      const {todos} = this.state
    return (
    <div className='TodoHomeContainer'>
          <h1>Todo</h1>
          <AddTodo
            addTodo={this.addTodo}
          />
          <TodoList
            todos ={todos}
            onChangeHandler={this.onChangeHandler}
            deleteTodo={this.deleteTodoItem}
          />
    </div>
    )
  }
}
