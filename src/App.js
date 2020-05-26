import React, { useState } from 'react';
import Input from './Components/Input';
import ToDoList from './Components/ToDoList';
import AppContext from './AppContext';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);

  return (
    <div className="App">
      <AppContext.Provider value={{
        handleToDoSubmit: (value) => {
          if (value === null || value === "") {
            return false
          } else {
            let addNew = [...toDos, value];
            setToDos(addNew)
          }
        },
        toDos: toDos,
        handleToDoDelete: (index) => {
          let list = [...toDos];
          list.splice(index, 1);
          setToDos(list);
        }
      }}>
        <Input></Input>
        <ToDoList></ToDoList>
      </AppContext.Provider>
    </div>
  );
}

export default App;
