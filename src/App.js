import React, { Component } from 'react';

const frutas = [
  'fresa',
  'manzana',
  'sandía',
  'kiwi',
  'durazno',
  'mango',
  'piña'
];

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          { frutas.map( fruta => (<li key={fruta}>{fruta}</li>) ) }
        </ul>
      </div>
    )
  } 
}

export default App;