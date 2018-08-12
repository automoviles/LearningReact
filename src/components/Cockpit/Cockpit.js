import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
    return (
        <div>
            <h1> Hi I am a react App </h1>
            <button className={styles.toggleButton} onClick={props.clicked}>Toggle Persons </button>
        </div>)
}

export default cockpit;