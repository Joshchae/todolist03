import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'


function ToDoList({items}, {editAction}) {
    return  (
        <div className="ToDoList">
            <ul>
                    {console.log(items)}
                    {items.map((item, index) => (<li><ToDoItem itemContent={item} key={index} editAction={editAction}/></li>))}
            </ul>
        </div>
    )
}

export default ToDoList
