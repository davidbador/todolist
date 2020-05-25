import React from 'react';
import AppContext from '../AppContext';
import styles from './ToDoList.module.css'

const ToDoList = () => {
    return (
        <AppContext.Consumer>
            {appContext => (
                <div className={styles.toDosSection}>
                    {appContext.toDos.map((el, index) =>
                        <div key={index} className={styles.toDoItemWrapper} style={{ backgroundColor: (index % 2 === 0) ? '#f8f8ff': 'gainsboro'}}>
                            <span className={styles.trash} onClick={() => appContext.handleToDoDelete(index)}>&#128465;</span>{el}
                        </div>
                    )}
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default ToDoList
