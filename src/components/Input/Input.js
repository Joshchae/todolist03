import React , {useRef} from 'react'
import uuid from 'react-uuid'
import './Input.css'

function Input({action, changeCategory}) {
    const inputItem = useRef(null);
    const dateItem = useRef(null);
    const category = useRef(null)
    
    const onClick = () => {
        const inputObject = {task: inputItem.current.value, done: false, category: category.current.value, id: uuid(), memo: '', date: dateItem.current.value};
        action(inputObject);
        inputItem.current.value = "";
    };

    const onCategoryChange = () => {
        changeCategory(category.current.value)
        console.log(category.current.value)
    }
        
    return (
        <div className="input">
            <div className="input__inputfields">
                <input className="input__textfield" type="text" placeholder="Enter Text" ref={inputItem} />
                <div className="input__category-and-date">
                    <select onChange={onCategoryChange} className="category-select" ref={category}>
                            <option value="fruits">Fruits</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="vegetable">Vegetables</option>
                    </select>
                    <input type="date" ref={dateItem} className="due-date-select"
                    
                    min="2021-01-01" 
                    max="2021-12-31"></input>
                </div>
             </div>
             <div className="input__create-button">
                 <button className="btn btn--creates" onClick={onClick} type="button">Create</button>
             </div>
        </div>
    )
}

export default Input
