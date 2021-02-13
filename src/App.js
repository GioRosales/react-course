import React, { Component } from 'react';

class InputControlled extends Component {
  state = {
    text: '',
    valid: false
  }

  setText = (e) => {
    const text = e.target.value;

    const valid = text.trim() !== '' && text.trim().length > 5

    this.setState({text, valid});

    this.props.onChange(text, this.props.name)
  }

  render() {
    const styles = {
      border: `1px solid ${this.state.valid ? "green" : "red"}`,
      padding: '0.5rem',
      outline: 'none'
    }
    return (
      <input type="text" value={this.state.text} onChange={this.setText} style={styles} placeholder={this.props.placeholder}/>
    )
  }
}

class App extends Component {
  state = {
    name: '',
    email: ''
  }
  actualizar = (text, item) => {
    console.log(text, item);
    this.setState({[item]: text});
  }

  render() {
    return (
      <div>
        <h1>Inputs controlados</h1>
        <InputControlled onChange={this.actualizar} name='name' placeholder="Nombre completo"/>
        <InputControlled onChange={this.actualizar} name='email' placeholder="Correo electrónico"/>
        <h2>Nombre: {this.state.name}</h2>
        <h2>Correo: {this.state.email}</h2>
      </div>
    )
  }
}

export default App;