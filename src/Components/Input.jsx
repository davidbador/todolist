import React, { useState, useContext } from 'react';
import AppContext from '../AppContext';
import styles from './Input.module.css';

const Input = () => {
    const [value, setValue] = useState('')
    const context = useContext(AppContext);

    const submitContent = (event) => {
        const { handleToDoSubmit } = context;
        handleToDoSubmit(event, value)
        setValue('')
    }

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form}>
                <div>
                    <label className={styles.title}>To-Do List</label><span className={styles.add} onClick={submitContent}>&#65291;</span>
                </div>
                <input type="text" value={value} onChange={event => setValue(event.target.value)} />
            </form>
        </div>
    )
}

export default Input
