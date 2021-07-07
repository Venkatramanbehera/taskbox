import React,{ useState, useEffect} from 'react'
import TaskList from './TaskList'
import axios from 'axios'
import AddTask from './AddTask'

const TasksContainer = (props) => {
    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3033/api/tasks')
        .then( (response) => {
            setTasks(response.data)
        })
        .catch( (err) => {
            alert(err.message)
        })
    },[])

    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    return (
        <div>
            <TaskList tasks={ tasks }/>
            <AddTask addTask={ addTask }/>
        </div>
    )
}

export default TasksContainer
