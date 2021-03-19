import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'


function ToDoList({items}) {
    return  (
        <div className="ToDoList">
            <ul>
                    {console.log(items)}
                    {items.map((item, index) => <li><ToDoItem itemContent={item} key={index}/></li>)
                    }
            </ul>
        </div>
    )
}

export default ToDoList
