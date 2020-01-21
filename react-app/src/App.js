import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { name: 'Avi', age: 24 },
      { name: 'Vivek', age: 31 },
      { name: 'Vijay', age: 36 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Vivek', age: 30 },
        { name: 'Vijay', age: 35 }
      ]
      
    
    }); 
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (PersonIndex) => {
    const person = this.state.persons;
    person.splice(PersonIndex, 1);
    this.setState({person: person})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Avi', age: 24 },
        { name: event.target.value, age: 31 },
        { name: 'Vijay', age: 36 }
      ]
    });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person , index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
          <h1>This is a React App!</h1>
          <strong>This is really working</strong><br />
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Handler</button>
          {persons}
      </div>
    )
  }
}

 

export default App;





