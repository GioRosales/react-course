import React from 'react';
import styles from './TarjetaFruta.module.css';

class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0
  }

  agregar = () => {
    this.setState({cantidad: this.state.cantidad + 1})
  }

  restar = () => {
    this.setState({cantidad: this.state.cantidad - 1})
  }

  resetear = () => {
    this.setState({cantidad: 0});
  }

  render(){
    const setBackgroundByCantidad = () => {return this.state.cantidad > 0 ? "positive" : (this.state.cantidad < 0 ? "negative" : "" )};
    const calculateAmount = () => {
      if(this.state.cantidad < 0)
        return 0;
      
      return this.props.price * this.state.cantidad
    }
  
    console.log(styles);
    return (
      <div className={`${styles.card} ${styles[setBackgroundByCantidad()]}`}>
        <h2>{ this.props.name }</h2>
        <h3>Cantidad: { this.state.cantidad }</h3>
        <button onClick={this.agregar}>+</button>
        <button onClick={this.restar}>-</button>
        <button onClick={this.resetear}>Resetear</button>
        <hr />
        <p>$ { this.props.price }</p>
        <p>Total: $<span>{calculateAmount()}</span></p>
      </div>
    )
  }
}

export default TarjetaFruta;