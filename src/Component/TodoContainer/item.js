import React from 'react'

export default function item(props) {
    const {todo} = props
  return (
    <div className='todoItem'>
        {
            todo.map((todoItem)=> (
                <ul key={todoItem.id}>
                    <li> 
                        <input type='checkbox' 
                        checked={todoItem.completed}
                        onChange={()=>console.log('checked')}
                        />
                        {todoItem.title}</li>
                </ul>
            ))
        }
    </div>
  )
}
