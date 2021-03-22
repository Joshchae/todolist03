import React, {useState} from 'react'
import './App.css';
import uuid from 'react-uuid'
import Input from './components/Input/Input';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  const [items, setItems] = useState([
    {
      id: uuid(), // this fucntion will create a unique id for every item, making it easy to select
      task: 'buy bananas',
      done: false,
      category: 'shopping',
      memo: 'chiquitas'
    },
    {
      id: uuid(),
      task: 'clean kitchen',
      done: true,
      category: 'home',
      memo: 'use dirty towels'
    }
  
  ]);


  // Function that adds completely new Items
  const addNewItem = (newItem) => {
    const newItemList = [
      ...items, newItem
    ];
    setItems(newItemList);
  };

  // Function that can the properties of specific items (e.g. when editing)
  const updateItems = (id, newPropValues) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        item = {...item, ...newPropValues}
      } 
      return item
    })
    setItems(updatedItems)
  }


  return (
    <div className="app">
      <div className="app__content">
        <h1 className="title">To-Do or Not-To-Do</h1>
        <Input action={addNewItem}
        />
        <ToDoList items={items} action={addNewItem} updateItems={updateItems} 
        />
      </div>
    </div>
  );
}

export default App;