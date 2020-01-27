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
    // const style = {
    //   // backgroundColor: 'red',
    //   // color: 'white',
    //   // fontWeight: 'bold',
    //   // border: '1px solid white',
    //   // borderRadius: '25px',
    //   // padding: '11px',
    //   // cursor: 'pointer',
    //   // ':hover': {
    //   //   backgroundColor: 'green',
    //   //   color:'white'
    //   // }
    // };

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
      })}
    </div>
  )

  // style.backgroundColor ='green';
  // style[':hover']= {
  //   backgroundColor: 'red',
  //   color:'black'
  // }
}

    const classes = [];
    if(this.state.persons.length <=2) {
      classes.push('red');
    }

    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (

      <div className="App">
          <h1>This is a React App!</h1>
          <p className={classes.join(' ')}>This is really working</p><br />
          <button className="button" onClick={this.togglePersonsHandler}>Toggle Handler</button>
          {persons}
      </div>
      
    )
  }
}

 

export default App;





