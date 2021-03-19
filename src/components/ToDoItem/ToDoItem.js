import React, {useRef} from 'react'
import InputToDo from './InputToDo'
import './ToDoItem.css'


function ToDoItem({itemContent}, {editAction}) {


    return (

        <div className="todoitem">
            <p className="itemText">{itemContent.task}</p>
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
