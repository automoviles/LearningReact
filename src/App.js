import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  state = {
    persons: [
      {
        id: 1, name: 'Max', age: 29
      },
      {
        id: 2, name: 'Manu', age: 30,
      }
    ],
    showPersons: false
  }

  showPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  nameChangedHandler = (event, id) => {
    const index = this.state.persons.findIndex(p => { return p.id === id });
    const person = { ...this.state.persons[index] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({
      persons: persons
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi I am a react App </h1>
        <button className="toggleButton" onClick={this.showPersonsHandler}>Toggle Persons </button>
        {this.state.showPersons ? (this.state.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              change={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}>
            </Person>)
        })) : 'Click on the button to view available persons!'
        }
      </div>
    );
  }
}

export default App;
