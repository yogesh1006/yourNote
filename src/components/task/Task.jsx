import React from 'react'
import './task.css'

function Task({title ,content,onDelete,id}) {

    return (
        <div className="task">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={()=>onDelete(id)}>delete</button>
        </div>
    )
}

export default Task
