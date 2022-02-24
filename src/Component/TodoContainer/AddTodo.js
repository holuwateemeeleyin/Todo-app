import React, { Component } from 'react'

export default class AddTodo extends Component {
    state= {
        title:''
    }

    handleOnChangeTitle =(e)=> {
        this.setState({
            title:e.target.value
        })
    }
    submitForm=(e)=> {
        e.preventDefault()
        // console.log(this.state.title);
        this.props.addTodo(this.state.title)
        this.setState({
            title:''
        })
    }

  render() {
      const { addTodo } = this.props
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
