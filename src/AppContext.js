import React from 'react';

const AppContext = React.createContext({
    toDos: [],
    handleToDoSubmit: (value) => { },
    handleToDoDelete: (value) => { }
})

export default AppContext
