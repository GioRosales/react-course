import React, { Component } from 'react';

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄 holis
  </span>
)

class InputNoControlado extends Component {
  nombre = React.createRef()
  email = React.createRef()

  handleClick = () => {
    const nombre = this.nombre.current.value;
    const email = this.email.current.value;

    this.props.onSend({nombre, email});
  }

  render() {
    return (
      <div>
        <input 
        type="text"
        ref={this.nombre}
        placeholder="Nombre" />
        <input 
        type="text"
        ref={this.email}
        placeholder="Email" />
        <input type="submit" onClick={this.handleClick} />
      </div>
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