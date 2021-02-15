import React, {Fragment, Component} from 'react';
import PubSub from 'pubsub-js';

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
      <p>Comunicación entre componentes <span style={spanStyle} >Observer Pattern</span></p>
    </div>
  )
};

class Hijo extends Component {
  render() {
    return(
      <div style={mainBox}>
        <Nieto />
      </div>
    )
  }
}

class Nieto extends Component {
  state = {
    title: '****'
  }

  componentDidMount() {
    PubSub.subscribe('other event', (e, data) => {
      const {title} = data;
      console.log(title);
      this.setState({title: title});
    });
  }

  render() {
    const {title} = this.state;
    return(
      <div style={mainBox}>
        <h1>{title}</h1>
        <Bisnieto />
      </div>
    )
  }
}

class Bisnieto extends Component {
  

  handleClick = (e) => {
    e.stopPropagation();
    PubSub.publish('Saludo', "Hola desde el bisnieto");
  }
  render() {
    return(
      <div style={mainBox}>
        <button onClick={this.handleClick}>Nieto</button>
      </div>
    )
  }
}

class App extends Component {
  componentDidMount() {
    PubSub.subscribe('Saludo', (e, data) => {
      console.log(e);
      alert(data);
    })
  }

  handleClick = (e) => {
    e.stopPropagation();
    PubSub.publish('other event', {
      title: 'Hola desde <App/>'
    });
  }

  render(){
    return(
      <div 
        style={mainBox}
      >
        <Header />
        <button onClick={this.handleClick}>Padre</button>
        <Hijo />
      </div>
    )
  }
};

export default App;