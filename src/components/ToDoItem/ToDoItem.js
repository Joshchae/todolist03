import React from 'react'
import './ToDoItem.css'


function ToDoItem() {
    return (
        <div className="todoitem">
            <p>To Do</p>
            <button>Due Date</button>
            {/* {DaTe} */}
            <button>Edit</button> 
            {/* edit the text of item */}
            <button>Done</button> {/* cross out the item */}
            <button>Trash</button> {/* delete the item */}
        </div>    
    )
}

export default ToDoItem