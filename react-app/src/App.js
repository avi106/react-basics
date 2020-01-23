import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { id: 'asd11', name: 'Max', age: 24 },
      { id: 'asd22', name: 'Steph', age: 31 },
      { id: 'asd33', name: 'James', age: 36 }
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} );
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      fontWeight: 'bold',
      border: '1px solid white',
      borderRadius: '25px',
      padding: '11px',
      marginTop: '10px'
    };

let persons = null;

if ( this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
        return <Person
          click={() => this.deletePersonHandler(index)} 
          name={person.name}
          age={person.age}
          key={person.id}
          changed={ (event) => this.nameChangedHandler(event, person.id)}/> 
      })};
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





