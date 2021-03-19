import React from 'react'
import './ToDoItem.css'


function ToDoItem({itemContent}) {
    
    return (
        <div className="todoitem">
            <p>{itemContent.task}</p>
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