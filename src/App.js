import React, { Component } from 'react';

class App extends Component {
  state = {
    user: {
      name: 'Gio Rosales',
      country: 'Mexico',
      twitter: '@something',
      youtube: 'mexmen'
    }
  }
  render() {
    const {user}  = this.state,
          keys    = Object.keys(user);

    return (
      <div>
        <h3>Iterando propiedades de objetos</h3>
        <ul>
          {keys.map(key=>(<li key={key}>{key}: {user[key]}</li>))}
        </ul>
      </div>
    )
  } 
}

export default App;