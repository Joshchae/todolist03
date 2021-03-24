import React, { useRef, useState } from "react";
import './ToDoItem.css'

const EditMode = ({ itemContent, updateItems, changeCategory, toggleEdit }) => {
  // UseRefs for the Edit function
  const inputItem = useRef(null);
  const dateItem = useRef(null);
  const category = useRef(null);

  const [updatedTask, setUpdatedTask] = useState(itemContent.task);
  const [updatedCategory, setUpdatedCategory] = useState(itemContent.category);
  const [updatedDate, setUpdatedDate] = useState(itemContent.date)

  const onTaskChange = (evt) => {
    setUpdatedTask(evt.target.value);
  };

  const saveEdit = () => {
    updateItems(itemContent.id, {
      task: updatedTask,
      category: updatedCategory,
      date: updatedDate,
      done: false
    });
  };

  const onCategoryChange = () => {
    setUpdatedCategory(category.current.value);
  };

  const onDateChange = () => {
      setUpdatedDate(dateItem.current.value)
  }

  const changeEditMode = () => {
    saveEdit();
    toggleEdit();
  };

  return (
    <div className="todoitem__content">
      <div className="todoitem__text-and-buttons">
        <input
          className="input__textfield"
          type="text"
          value={updatedTask}
          ref={inputItem}
          onChange={onTaskChange}
        />
        <div className="todoitem__buttons">
          <button className="btn btn--edit" onClick={changeEditMode}>
            Save
          </button>
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
        <input
          type="date"
          ref={dateItem}
          className="due-date-select"
          min="2021-01-01"
          max="2021-12-31"
          onChange={onDateChange}
          value={updatedDate}
        ></input>
        {/* <p className="todoitem__date">{itemContent.date}</p> */}
        <select
          onChange={onCategoryChange}
          className="category-select"
          ref={category}
          value={updatedCategory}
        >
          <option value="fruits">Fruits</option>
          <option value="kitchen">Kitchen</option>
          <option value="vegetable">Vegetables</option>
        </select>
        {/* <p className="todoitem__info__category">{itemContent.category}</p> */}
      </div>
    </div>
  );
};

export default EditMode;

//   const [memoContent, setMemoState] = useState({
//     className: "memo",
//     isActive: false,
//   });
//   const [memoText, setMemoContent] = useState(itemContent.memo);

//   const toggleMemo = () => {
//     if (!memoContent.isActive) {
//       setMemoState({ className: "memo memo-active", isActive: true });
//     } else {
//       setMemoState({ className: "memo", isActive: false });

//       const newMemo = { memo: memoText };

//       updateItems(itemContent.id, newMemo);
//     }
//   };

//   // Action that changes the content of the Memo for our Item in the Main State Database
//   const changeMemo = (evt) => {
//     setMemoContent(evt.target.value);
//   };
