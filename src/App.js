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
      category: 'vegetable',
      memo: 'chiquitas'
    },
    {
      id: uuid(),
      task: 'clean kitchen',
      done: true,
      category: 'fruits',
      memo: 'use dirty towels'
    }
  
  ]);

  const [category, setCategory] = useState("vegetable");

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  }


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

  // Function that deletes the clicked item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // Function that sorts the done item
  const doneItem = (id) => {
    setItems(
      items.map((item) => 
      item.id === id ? {
        ...item, done: !item.done
      } : item))
  }


  return (
    <div className="app">
      <div className="app__content">
        <h1 className="title">To-Do or Not-To-Do</h1>
        <Input action={addNewItem} changeCategory={changeCategory}
        />
        <ToDoList 
          items={items}
          action={addNewItem} 
          category={category} 
          updateItems={updateItems} 
          onDelete={deleteItem}
          onDone={doneItem}
          />
      </div>
    </div>
  );
}

export default App;