import React, { Component } from 'react'
import { FcPlus } from 'react-icons/fc'
export default class AddTodo extends Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault()
        // console.log(this.state.title);
        if (this.state.title.trim()) { //for removing whitespace
            this.props.addTodo(this.state.title)
            this.setState({
                title: ''
            })
        } else {
            alert('You have to add an item')
        }
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className='form-input'>
                <input
                    type='text'
                    value={this.state.title}
                    onChange={this.handleOnChangeTitle}
                    className='input-text'
                />
                <button className='add-button'>
                    <FcPlus size='30'/> 
                </button>
            </form>
        )
    }
}
