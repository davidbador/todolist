import React from 'react';
import AppContext from '../AppContext';
import styles from './Input.module.css';

const Input = () => {
    return (
        <AppContext.Consumer>
            {appContext => (
                <div className={styles.formWrapper}>
                    <form className={styles.form}>
                        <div>
                            <label className={styles.title}>To-Do List</label><span className={styles.add} onClick={(event) => appContext.handleToDoSubmit(event, appContext.value)}>&#65291;</span>
                        </div>
                        <input type="text" value={appContext.value} onChange={event => appContext.handleInputChange(event)} />
                    </form>
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default Input
