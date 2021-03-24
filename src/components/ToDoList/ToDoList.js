import React, { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";
import {FaChevronDown} from 'react-icons/fa'

function ToDoList({ items, updateItems, category, onDelete, changeCategory }) {
  // iterate thorugh every item and check if its category is the selected category

  const [doneItems, setDoneItems] = useState('doneItem-hidden')

  // doneitems have two css classes: first one is the basic one, second one has 'display: none'
  const toggleDone = () => { doneItems === '' ? setDoneItems('doneItem-hidden') : setDoneItems('')};

  const filteredList = items.filter((item) => item.category === category);

  return (
    <div className="to-do-list">
      <div className="to-do-list__items">
        <h2 className="to-do-list__headline">Items To-do</h2>
        {filteredList.map((item, index) =>
          item.done ? (
            ""
          ) : (
            <ToDoItem
              itemContent={item}
              key={index}
              updateItems={updateItems}
              onDelete={onDelete}
              changeCategory={changeCategory}
            />
          )
        )}
      </div>
      <div className="to-do-list__items">
        <h2 className="to-do-list__headline" onClick={toggleDone}>Items Done<br /><FaChevronDown size={20}/></h2>
        <div className={doneItems}>
          {filteredList.map((item, index) =>
            item.done ? (
              <ToDoItem
                itemContent={item}
                key={index}
                updateItems={updateItems}
                onDelete={onDelete}
                changeCategory={changeCategory}
              
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  ); 
}

export default ToDoList;
