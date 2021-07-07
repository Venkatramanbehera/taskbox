import React,{ useState } from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'

const AddTask = (props) => {
    const { addTask } = props
    const [ isSaved , setIsSaved ] = useState(false)

    const formSubmit = (tasks) => {
        axios.post('http://localhost:3033/api/tasks',tasks)
            .then((response) => {
                addTask(response.data)
                setIsSaved(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const toggleIsSet = () => {
        setIsSaved(false)
    }
    
    return (
        <div>
            <h1>Add Task</h1>
            <TaskForm 
                formSubmit = { formSubmit } 
                isSaved={ isSaved } 
                toggleIsSet={ toggleIsSet }
            />
        </div>
    )
}

export default AddTask
