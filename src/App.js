import React, { Component } from 'react';

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄 holis
  </span>
)

class InputNoControlado extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const nombre  = e.target[0].value;
    const email   = e.target[1].value;


    this.props.onSend({nombre, email})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        placeholder="Nombre" />
        <input 
        type="text"
        placeholder="Email" />
        <input type="submit"/>
      </form>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(`${data.nombre}, ${data.email}`)
  }

  render() {
    return (
      <div>
        <h1>Inputs no controlados Refs <Unicorn /></h1>
        <InputNoControlado 
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App;