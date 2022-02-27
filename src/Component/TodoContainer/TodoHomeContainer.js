import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid' //added uuid for generating random id
export default class TodoHomeContainer extends Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: 'Outing with the Kids',
                completed: true
            },
            {
                id: uuidv4(),
                title: 'Learn Javascript',
                completed: true
            },
            {
                id: uuidv4(),
                title: 'Create a todo App',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Rest and enjoy my life',
                completed: false
            }
        ]
    }

    componentDidUpdate (prevProps, prevState){
        // If what is entered into the state is not in the state
        // store it in the local storage
        if (prevState.todos !== this.state.todos){
            const data = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", data)
        }
    }

    componentDidMount(){
        const data = localStorage.getItem("todos")
        const displayTodos = JSON.parse(data)
        if (displayTodos){
            this.setState({
                todos: displayTodos
            })
        }
    }

    onChangeHandler = (id) => {
        // Checking if todo.id is the same with the clicked id,
        // If it is the same flipped the true to false
        // we have to do it by first looping through the data
        this.setState(prevState => ({
            // using prevState is to get the upto date data
            todos: prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        }))
        // console.log('clicked', id);
    }


    //  Deleting function 
    deleteTodoItem = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter((todo) => {
                return todo.id !== id
            })
        }))
        // console.log('deleted', id);
    }

    // Add todo
    addTodo = (title) => {
        // console.log('add todo', id);
        // add new todo
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    updateTodo = (updateTitle, id) =>{
        this.setState({
            todos: this.state.todos.map((todo)=> {
                if(todo.id === id) {
                    todo.title = updateTitle
                }
                return todo
            })
        })
    }

    render() {
        const { todos } = this.state
        return (
            <div className='todoHome_Container'>
                <h1>Todo</h1>
                <AddTodo
                    addTodo={this.addTodo}
                />
                <TodoList
                    todos={todos}
                    onChangeHandler={this.onChangeHandler}
                    deleteTodo={this.deleteTodoItem}
                    updateTodo={this.updateTodo}
                />
            </div>
        )
    }
}
