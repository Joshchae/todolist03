import React, { useRef } from "react";
import uuid from "react-uuid";
import "./Input.css";
import {FaPlus} from 'react-icons/fa'
import {MdCreate} from 'react-icons/md'

function Input({ action, changeCategory }) {
  const inputItem = useRef(null);
  const dateItem = useRef(null);
  const category = useRef(null);

  const onClick = () => {
    const inputObject = {
      task: inputItem.current.value,
      done: false,
      category: category.current.value,
      id: uuid(),
      memo: "",
      date: dateItem.current.value,
    };
    action(inputObject);
    console.log(dateItem.current.value);
    inputItem.current.value = "";
  };

  const onCategoryChange = () => {
    changeCategory(category.current.value);
    console.log(category.current.value);
  };

  return (
    <div className="input">
        <div className="input__inputfields">
          <div className="input__text-and-create">
            <input
                className="input__textfield"
                type="text"
                placeholder="Enter Text"
                ref={inputItem}/>

            <div className="input__create-button">
                <button className="btn btn--create btn-round" onClick={onClick} type="button">
                {/* <MdCreate size={20}/> */}
                <FaPlus size={20}/>
                </button>
            </div>
          </div>
          
          <div className="input__category-and-date">
           <div className="input__select--duedate input__select">
              <label htmlFor="dueDate" className='input__label'>Due Date:</label>
              <input
                id='dueDate'
                type="date"
                ref={dateItem}
                className="due-date-select"
                min="2021-01-01"
                max="2021-12-31">
              </input>
            </div>

            <div className="input__select--category input__select">
              <label htmlFor="category" className="input__label">Category:</label>
              <select
                id="category"
                onChange={onCategoryChange}
                className="category-select"
                ref={category}
              >
                <option value="fruits">Fruits</option>
                <option value="kitchen">Kitchen</option>
                <option value="vegetable">Vegetables</option>
              </select>
            </div>

          </div>
        </div>
    </div>
  );
}

export default Input;
