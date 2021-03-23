import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import './ToDoList.css'


function ToDoList({items, updateItems, category, onDelete, onDone}) {

    // iterate thorugh every item and check if its category is the selected category
    const filteredList = items.filter(item => item.category === category);
    
    return  (
        <div className="to-do-list">
            <div className="to-do-list__items">
                    {filteredList.map((item, index) => (<ToDoItem itemContent={item} key={index} updateItems={updateItems} onDelete={onDelete} onDone={onDone}/>))}
            </div>
            <div className="done-items">
                <p>Items Done</p>
            </div>
        </div>
    )
}

export default ToDoList
