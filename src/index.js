import React from 'react';
import ReactDOM from 'react-dom';

class TarjetaFruta extends React.Component {
  constructor() {
    super();
    const METHODS = [
      "agregar",
      "restar",
      "resetear"
    ];
    this.state = {
      cantidad: 0
    };
    
    METHODS.forEach( method => {
      this[method] = this[method].bind(this);
    });
  }

  agregar(){
    this.setState({cantidad: this.state.cantidad + 1})
  }

  restar(){
    this.setState({cantidad: this.state.cantidad - 1})
  }

  resetear() {
    this.setState({cantidad: 0});
  }

  render(){
    return (
      <div>
        <h2>{ this.props.name }</h2>
        <h3>Cantidad: { this.state.cantidad }</h3>
        <button onClick={this.agregar}>+</button>
        <button onClick={this.restar}>-</button>
        <button onClick={this.resetear}>Resetear</button>
        <hr />
        <p>$ { this.props.price }</p>
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      <TarjetaFruta name="Sandía" price="5"/>
      <TarjetaFruta name="Naranja" price="50"/>
      <TarjetaFruta name="Uva" price="45"/>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));