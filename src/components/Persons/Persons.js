import React from 'react';

import Person from './Person/Person';

const persons = (props) =>
    props.persons.map((person, index) => {
        return (
            <Person
                name={person.name}
                age={person.age}
                change={(event) => props.change(event, person.id)}
                key={person.id}>
            </Person>)
    })

export default persons;