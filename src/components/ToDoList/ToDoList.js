import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

function ToDoList({ items, updateItems, category, onDelete, changeCategory }) {
  // iterate thorugh every item and check if its category is the selected category
  const filteredList = items.filter((item) => item.category === category);

  return (
    <div className="to-do-list">
      <div className="to-do-list__items">
        <p>Items To-do</p>
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
      <div className="done-items">
        <p>Items Done</p>
        <div>
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
