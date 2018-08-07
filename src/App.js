import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  state = {
    persons: [
      {
        name: 'Max', age: 29
      },
      {
        name: 'Manu', age: 30,
      }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: 29
        },
        {
          name: 'Ok', age: 30,
        }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value, age: 29
        },
        {
          name: 'Ok', age: 30,
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi I am a react App </h1>
        <button onClick={() => this.switchNameHandler('Handler')}>Switch name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          change={this.nameChangedHandler}>My Hobbies are: Coding
        </Person>
      </div>
    );
  }
}

export default App;
