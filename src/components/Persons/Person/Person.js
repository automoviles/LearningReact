import React from 'react';
import styles from './Person.css';

const Person = (props) => {
    return (
        <div className={styles.Person}>
            <p>I'm a {props.name} and I am  {props.age} years old!</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default Person;