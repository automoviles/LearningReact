import React, { Component } from 'react';
import styles from './App.css';
import Person from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
      <div className={styles.App}>
        <Cockpit clicked={this.showPersonsHandler} />
        {this.state.showPersons ?
          <Person
            persons={this.state.persons}
            change={this.nameChangedHandler} />
          : 'Click on the button to view available persons!'
        }
      </div>
    );
  }
}

export default App;
