import React, { useRef , useState } from "react";
import uuid from "react-uuid";
import "./Input.css";
import {FaPlus} from 'react-icons/fa'

function Input({ action, changeCategory }) {
  const inputItem = useRef(null);
  const dateItem = useRef(null);
  const category = useRef(null);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear()
    let month = today.getMonth() + 1
    if (month < 10) {
      month = '0' + month;
    }
    const day = today.getDate()
    return `${year}-${month}-${day}`
  }

  const [date, setDate] = useState(getCurrentDate)

  const changeDate = (evt) => {
    setDate(evt.target.value)
  }


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

  const onEnter = (evt) => {
    console.log(evt.code)
    if (evt.code === 'Enter') {
        onClick()
    }  
  }

  const onCategoryChange = () => {
    changeCategory(category.current.value);
    console.log(category.current.value);
  };

  return (
    <div className="input">
        <div className="input__inputfields">
          <div className="input__text-and-create">
            <input
                onKeyDown={onEnter}
                className="input__textfield"
                type="text"
                placeholder="What to do?"
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
              <label htmlFor="dueDate" className='input__label'>When?</label>
              <input
                value={date}
                onChange={changeDate}
                id='dueDate'
                type="date"
                ref={dateItem}
                className="due-date-select"
                min="2021-01-01"
                max="2021-12-31">
              </input>
            </div>

            <div className="input__select--category input__select">
              <label htmlFor="category" className="input__label">Where?</label>
              <select
                id="category"
                onChange={onCategoryChange}
                className="category-select"
                ref={category}
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
              </select>
            </div>

          </div>
        </div>
    </div>
  );
}

export default Input;
