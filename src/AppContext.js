import React from 'react';

const AppContext = React.createContext({
    value: '',
    toDos: [],
    handleInputChange: () => { },
    handleToDoSubmit: (value) => { },
    handleToDoDelete: (value) => { }
})

export default AppContext
