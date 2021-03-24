import React, { useState } from "react";
import EditMode from "./EditMode";
import "./ToDoItem.css";
import ViewMode from "./ViewMode";

// Edit Button: use State for toggling edit view. use State also for editing content.

function ToDoItem({ itemContent, updateItems, onDelete, changeCategory }) {
  // Text Field Button: use State to change the Status of the Memo Area by changing the className


  const [editState, setEditState] = useState(false);

  // After clicking the Edit button: opening up Edit Window
  const toggleEdit = () => {
    setEditState(!editState);
  };

  // done item
  const toggleDone = () => {
    updateItems(itemContent.id, { done: !itemContent.done });
  };

  const viewOrEditMode = () => {
    if (editState) {
      return (
        <EditMode
          itemContent={itemContent}
          updateItems={updateItems}
          changeCategory={changeCategory}
          toggleEdit={toggleEdit}
        />
      );
    } else {
      return <ViewMode itemContent={itemContent} toggleEdit={toggleEdit} />;
    }
  };

  return (
    <div className="todoitem">
      <div className="todoitem__button">
        <button className="btn-round btn-round--done" onClick={toggleDone}>
          Done
        </button>
        {/* cross out the item */}
      </div>
      {viewOrEditMode()}
      <div className="todoitem__button">
        <button
          className="btn-round btn-round--trash"
          onClick={() => {
            onDelete(itemContent.id);
          }}
        >
          Trash
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
