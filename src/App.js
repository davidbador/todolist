import React, { useState } from 'react';
import Input from './Components/Input';
import ToDoList from './Components/ToDoList';
import AppContext from './AppContext';
import './App.css';

function App() {
  const [value, updateValue] = useState('')
  const [toDos, updateToDos] = useState([]);

  return (
    <div className="App">
      <AppContext.Provider value={{
        handleToDoSubmit: (event, value) => {
          event.preventDefault()
          const addNew = [...toDos, value];
          updateToDos(addNew)
          updateValue('')
        },
        handleInputChange: (event) => {
          updateValue(event.target.value)
        },
        value: value,
        toDos: toDos,
        handleToDoDelete: (index) => {
          const list = [...toDos];
          list.splice(index, 1);
          updateToDos(list);
        }
      }}>
        <Input></Input>
        <ToDoList></ToDoList>
      </AppContext.Provider>
    </div>
  );
}

export default App;
