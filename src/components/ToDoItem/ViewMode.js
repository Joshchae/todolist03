import React from "react";
import './ToDoItem.css'

function ViewMode({ itemContent, toggleEdit }) {
  return (
    <div>
      <div className="todoitem__content" onClick={toggleEdit}>
        <div className="todoitem__text-and-buttons">
          <p className="todoitem__text">{itemContent.task}</p>
          <div className="todoitem__buttons">
            {/* <button className="btn btn--edit" >
              Edit
            </button> */}
            {/* edit the text of item */}
          </div>
        </div>
        {/* <textarea
          className={memoContent.className}
          onChange={changeMemo}
          width="20"
          height="10"
          placeholder="Notes"
          value={memoText}
        ></textarea> */}
        <div className="todoitem__info">
          <p className="todoitem__date">{itemContent.date}</p>
          <p className="todoitem__info__category">{itemContent.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewMode;
