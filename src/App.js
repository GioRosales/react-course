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
  }

  render() {
    const styles = {
      border: `1px solid ${this.state.valid ? "green" : "red"}`,
      padding: '0.5rem',
      outline: 'none'
    }
    return (
      <input type="text" value={this.state.text} onChange={this.setText} style={styles}/>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <h1>Inputs controlados</h1>
        <InputControlled />
      </div>
    )
  }
}

export default App;