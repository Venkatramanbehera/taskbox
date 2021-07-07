import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = (props) => {
    const { formSubmit, isSaved, toggleIsSet } = props

    const [ id, setId ] = useState(uuidv4())
    const [ title, setTitle ] = useState('')
    const [ status, setStatus ] = useState(false)

    useEffect(() => {
        if(isSaved){
            setId(uuidv4())
            setTitle('')
            setStatus(false)
            toggleIsSet()
        }
    },[isSaved])

    const handleTitleChange = (e) => {
        const data = e.target.value
        setTitle(data)
    }
    const handleStatusChange = (e) => {
        const data = e.target.checked
        setStatus(data)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: id,
            title : title,
            status : status
        }
        formSubmit(formData)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label>Title</label> <br />
            <input type="text" value={ title } onChange={ handleTitleChange }/> <br />

            <input type="checkbox" value={ status } onChange={ handleStatusChange } /> <label>Completed</label> <br />

            <button>Save</button>
        </form>
    )
}

export default TaskForm
