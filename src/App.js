import React, { Component } from 'react';
import Users from './Users';

class App extends Component {
  state = {
    users : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 35, belt: 'pink', id: 3 }
    ]
  }
  
  render(){
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome!</p>
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
