import React, { useContext } from 'react';
import AppContext from '../AppContext';
import styles from './ToDoList.module.css'

const ToDoList = () => {
    const context = useContext(AppContext)

    const deleteToDo = (index) => {
        const { handleToDoDelete } = context;
        handleToDoDelete(index);
    }

    return (
        <AppContext.Consumer>
            {appContext => (
                <div className={styles.toDosSection}>
                    {appContext.toDos.map((el, index) =>
                        <div key={index} className={styles.toDoItemWrapper} style={{ backgroundColor: (index % 2 === 0) ? '#f8f8ff': 'gainsboro'}}>
                            <span className={styles.trash} onClick={(index) => deleteToDo(index)}>&#128465;</span>{el}
                        </div>
                    )}
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default ToDoList
