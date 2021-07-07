import React from 'react'

const TaskItem = (props) => {
    const { title, status } = props
    return (
        <div style={ { width:'30rem', height:'7rem' ,backgroundColor : status ? 'red' : 'yellow'} }>
            <h3>{ title }</h3>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default TaskItem
