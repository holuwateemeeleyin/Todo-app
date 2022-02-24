import React, { Component } from 'react'

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
            <form onSubmit={this.submitForm}>
                <input
                    type='text'
                    value={this.state.title}
                    onChange={this.handleOnChangeTitle}
                />
                <button>Add todo</button>
            </form>
        )
    }
}
