import React, { useState, useEffect } from "react";
import "./App.css";
import uuid from "react-uuid";
import Input from "./components/Input/Input";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [items, setItems] = useState([
    {
      id: uuid(), // this fucntion will create a unique id for every item, making it easy to select
      task: "buy bananas",
      done: false,
      category: "Home",
      memo: "chiquitas",
    },
    {
      id: uuid(),
      task: "clean kitchen",
      done: true,
      category: "Personal",
      memo: "use dirty towels",
    },
  ]);

  const [category, setCategory] = useState("Home");

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  // useEffect to run and save in the local storage
  useEffect(() => {
    getLocalItems();
  }, []);

  useEffect(() => {
    const saveLocalItems = () => {
      localStorage.setItem("items", JSON.stringify(items));
    };
    saveLocalItems();
  }, [items]);

  // Function that adds completely new Items
  const addNewItem = (newItem) => {
    const newItemList = [...items, newItem];
    setItems(newItemList);
  };

  // Function that can the properties of specific items (e.g. when editing)
  const updateItems = (id, newPropValues) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item = { ...item, ...newPropValues };
      }
      return item;
    });
    console.log(items)
    setItems(updatedItems);
  };

  // Function that deletes the clicked item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // local storage
  const getLocalItems = () => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      let itemLocal = JSON.parse(localStorage.getItem("items"));
      setItems(itemLocal);
    }
  };

  return (
    <div className="app">
      <div className="app__content">
        <h1 className="app__title"><span className="title--yellow">To Do</span> or not <span className="title--yellow">To Do</span></h1>
        <Input action={addNewItem} changeCategory={changeCategory} />
        <hr className="app__hr" />
        <ToDoList
          items={items}
          action={addNewItem}
          category={category}
          updateItems={updateItems}
          onDelete={deleteItem}
          changeCategory={changeCategory}
        />
      </div>
    </div>
  );
}

export default App;
