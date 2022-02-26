import React, { Component } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { BsPencilSquare } from 'react-icons/bs'
import { IoMdCheckmarkCircle } from 'react-icons/io'

export default class item extends Component {
    state = {
        isEditMode: false
    }

    handleOnClickTodo = () => {
        this.setState({
            isEditMode:true
        })
    }

    closeEditMode =(e)=> {
        e.preventDefault()
        this.setState({
            isEditMode:false
        })
    }

    render() {
        const completedStyle = {
            textDecoration: 'line-through',
            color: 'green',
            fontStyle: "italic",
            opacity: 0.4,
        }

        // go to edit mode when clicked.  
        let editMode = {}
        // if it is not in editing mode, display edit mode when clicked
        // by default, it will not be in editing Mode, cos it is set to false
        if (!this.state.isEditMode){
            editMode.display = 'none'
        }
        
        const { todo, onChangeHandler, deleteTodo, updateTodo } = this.props
        return (
            <li className='todoItem'>
                <input type='checkbox'
                    className='checkbox'
                    checked={todo.completed}
                    onChange={() => onChangeHandler(todo.id)}
                />
                {/* {todo.title} */}
                
                <button onClick={() => deleteTodo(todo.id)} className='delete-button'>
                    <MdDeleteForever size='20' color='red' />
                </button>

                <button className='edit-button' onClick={this.handleOnClickTodo}>
                    <BsPencilSquare size='16px' color='green'/>
                </button>

                {/* If the todo is completed, the sytling will be true. and if not the
        will be normal */}
                <span style={todo.completed ? completedStyle : null}>
                    {todo.title}
                </span>

                <form className='edit_todo-form' style={editMode} onSubmit={this.closeEditMode}>
                    <input type='text' 
                        value={todo.title}
                        onChange={(e)=> updateTodo(e.target.value, todo.id)}
                        className='edit-text'
                    />
                    <button className='updateDone-icon'>
                        <IoMdCheckmarkCircle size='25px' color='green'/>
                    </button>
                </form>
            </li>

        )
    }
}