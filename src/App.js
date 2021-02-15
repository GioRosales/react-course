import React, {Fragment, Component} from 'react';

const mainBox = {
  border: "2px dashed gray",
  padding: '1rem',
  maxWidth: '50vw',
};

const blueBox = {
  ...mainBox,
  border: '2px solid blue'
};

const redBox = {
  ...mainBox,
  border: '2px solid red'
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

class ComponentA extends Component {
  render(){
    const { num } = this.props
    return(
      <div style={blueBox}>
        <p>Some text</p>
        <button onClick={this.props.onAdd}>
          Component A ( {num} )
        </button>
      </div>
    )
  }
}

class ComponentB extends Component {
  render(){
    const { num } = this.props
    return(
      <div style={redBox}>
        <p>Some text</p>
        <button onClick={this.props.onAdd}>
          Component B ( {num} )
        </button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    countA: 0,
    countB: 0
  }
  onAdd = () => {

  }

  handleAddA = () => {
    this.setState(state => ({
      countA: state.countA + 1
    }));
  }

  handleAddB = () => {
    this.setState(state => ({
      countB: state.countB + 2
    }));
  }

  render(){
    const {countA, countB} = this.state;
    return(
      <div 
        style={mainBox}
      >
        <Header />
        <ComponentA num={countA} onAdd={this.handleAddB}/>
        <ComponentB num={countB} onAdd={this.handleAddA}/>
      </div>
    )
  }
};

export default App;