import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import './ToDoList.css'


function ToDoList({items, updateItems}) {
    return  (
        <div className="to-do-list">
            <div className="to-do-list__items">
                    {items.map((item, index) => (<ToDoItem itemContent={item} key={index} updateItems={updateItems}/>))}
            </div>
            <div className="done-items">
                <p>Items Done</p>
            </div>
        </div>
    )
}

export default ToDoList
