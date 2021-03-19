import React , {useRef} from 'react'

function Input({action}) {
    const inputItem = useRef(null);
    
    const onClick = () => {
        const inputObject = {task: inputItem.current.value};
        action(inputObject);
        inputItem.current.value = "";
    };
        
    return (
        <div>
            <input type="text" placeholder="To-do" ref={inputItem} />
            <button onClick={onClick} type="button">Create</button>
        </div>
    )
}

export default Input
