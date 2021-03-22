import React , {useRef} from 'react'
import uuid from 'react-uuid'
import './Input.css'

function Input({action}) {
    const inputItem = useRef(null);
    const dateItem = useRef(null)
    
    const onClick = () => {
        const inputObject = {task: inputItem.current.value, done: false, category: '', id: uuid(), memo: '', date: dateItem.current.value};
        action(inputObject);
        inputItem.current.value = "";
    };
        
    return (
        <div className="input">
            <input className="input__textfield" type="text" placeholder="To-do" ref={inputItem} />
            
            <input type="date" ref={dateItem} id="start" name="trip-start"
            
             min="2021-01-01" 
             max="2021-12-31"></input>
             <button className="input__createbutton btn" onClick={onClick} type="button">Create</button>
        </div>
    )
}

export default Input
