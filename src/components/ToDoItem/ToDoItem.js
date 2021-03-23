import React, { useState } from 'react'
import './ToDoItem.css'

// Edit Button: use State for toggling edit view. use State also for editing content.

function ToDoItem({itemContent, updateItems, onDelete}) {

// Text Field Button: use State to change the Status of the Memo Area by changing the className
    const [memoContent, setMemoState] = useState(
        {
            className: 'memo',
            isActive: false
        }
    )
    const [memoText, setMemoContent] = useState(itemContent.memo)

// Click Action that toggles the Memo Area by checking and changing the State.
    const toggleMemo = () => {
        if (!memoContent.isActive) {
            setMemoState({className: 'memo memo-active', isActive: true})
        } else {
            setMemoState({className: 'memo', isActive: false})
            
            const newMemo = {memo: memoText}
            
            updateItems(itemContent.id, newMemo)
            
        }
    }

// done item
    const toggleDone = () => {
      updateItems(itemContent.id, {done : !itemContent.done})
      }
    

    const checkItems = () => {
        console.log(itemContent)
    }


// Action that changes the content of the Memo for our Item in the Main State Database
    const changeMemo = (evt) => {
        setMemoContent(evt.target.value)
    }


    return (
      <div className="todoitem">

        <div className="todoitem__button">
          <button className="btn-round btn-round--done" onClick={toggleDone} > Done </button>{" "}
          {/* cross out the item */}
        </div>
        <div className="todoitem__content">
          <div className="todoitem__text-and-buttons">
            <p className="todoitem__text">{itemContent.task}</p>
            <div className="todoitem__buttons">
              <button className="btn btn--edit" onClick={toggleMemo}>
                Edit
              </button>{" "}
              {/* edit the text of item */}
            </div>
          </div>
          <textarea
            className={memoContent.className}
            onChange={changeMemo}
            width="20"
            height="10"
            placeholder="Notes"
            value={memoText}
          ></textarea>
          <div className="todoitem__info">
            <p className="todoitem__info__category">{itemContent.category}</p>
          </div>
        </div>
        <div className="todoitem__button">
          <button className="btn-round btn-round--trash" onClick={() => {checkItems(); onDelete(itemContent.id);}}>
            Trash
          </button>
        </div>
      </div>
    );
}

export default ToDoItem