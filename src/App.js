import React, {Fragment, Component} from 'react';

const Header = () => {
  const boxStyle = {
    border: '2px solid lightgray',
    borderRadius: '0.5rem',
    color: "teal",
    maxWidth: '50vw',
    textAlign: 'center',
    fontFamily: 'sans',
    marginBottom: '2rem'
  };
  const spanStyle = {
    fontWeight: 'bold',
    display: 'block'
  };


  return (
    <div style={boxStyle}>
      <p>Comunicación entre componentes <span style={spanStyle} >Métodos de instancia</span></p>
    </div>
  )
}

class Hijo extends Component {
  state = {
    message: '****'
  }

  dispatchAlert = (e, message = "Alerta desde el hijo") => {
    alert(message)
    this.setState({
      message
    })
  }

  render() {
    return(
      <>
        <h2>Mensaje: {this.state.message}</h2>
        <button onClick={this.dispatchAlert}>Hijo</button>
      </>
    )
  }
}

class App extends Component {
hijo = React.createRef()

handleClick = () => {
  console.log(this.hijo);
  this.hijo.current.dispatchAlert(null, "Mensaje desde el padre")
}

render(){
  return(
    <>
      <Header />
      <Hijo ref={this.hijo}/>
      <button onClick={this.handleClick}>Padre</button>
    </>
  )
}
};

export default App;