import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { name: 'Avi', age: 24 },
      { name: 'Vivek', age: 31 },
      { name: 'Vijay', age: 36 }
    ]
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
    }
    return (
      <div className="App">
          <h1>This is a React App!</h1>
          <strong>This is really working</strong><br />
          <button style={style} onClick={this.switchNameHandler.bind(this,'Avishek Bhusal!!!')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name}
            age= {this.state.persons[0].age} />
          <Person
          name={this.state.persons[1].name}
          age= {this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Avi!')} 
          changed={this.nameChangedHandler}>My Hobbies: Music</Person>
          <Person 
          name={this.state.persons[2].name}
          age= {this.state.persons[2].age}
          change={this.nameChangeHandler} />
      </div>
    )
  }
}

 

export default App;





