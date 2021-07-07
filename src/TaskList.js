import React from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {
    const { tasks } = props
    return (
        <div>
            {
                tasks.length === 0 ? (
                    <div>
                        <h1>No Tasks found</h1>
                        <p>Add your first task</p>
                    </div>
                ) : (  
                    <div>
                        <h3> My Tasks -  { tasks.length } </h3>
                        {
                            tasks.map((task) => {
                                return <TaskItem key={ task.id } {...task}/>
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default TaskList
