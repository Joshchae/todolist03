import React, {useState} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  const [items, setItems] = useState([
    {
      task: 'buy bananas',
      done: false,
      category: 'shopping',
    },
    {
      task: 'clean kitchen',
      done: true,
      category: 'home',
    }
  
  ]);

  // const [category, setCategory] = useState([
  //   'shopping', 'inbox', 'home'
  // ])

  const addNewItem = (newItem) => {
    const newItemList = [
      ...items,
      {
        task: newItem.task,
        done: false,
        category: newItem.category
      }
    ];
    setItems(newItemList);
  };

  return (
    <div>
      <Header />
      <Input action={addNewItem}
      />
      <ToDoList items={items} action={addNewItem}
      />
    </div>
  );
}

export default App;