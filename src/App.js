import React, {Fragment, Component} from 'react';

const mainBox = {
  border: "2px dashed gray",
  padding: '1rem',
  maxWidth: '50vw',
};

const Header = () => {
  const boxStyle = {
    border: '2px solid lightgray',
    borderRadius: '0.5rem',
    color: "teal",
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
  handleClick = (e) => {
    e.stopPropagation();
    console.log("click en <Hijo />");
  }
  render(){
    return(
      <div 
        style={mainBox}
        onClick={this.handleClick}
      >
        <p>Hijo</p>
      </div>
    )
  }
}

class App extends Component {
  handleClick = () => {
    console.log('Click en <Padre />');
  }
  render(){
  return(
    <div 
      style={mainBox}
      onClick={this.handleClick}
    >
      <Header />
      <Hijo />
    </div>
  )
}
};

export default App;