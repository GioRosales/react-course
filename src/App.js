import React, { Component } from 'react';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'camisa unicornio',
        colors: ['#467367', '#05fd88', '#a706ee' ],
        price: 20
      },
      {
        id: 2,
        name: 'jeans',
        colors: ['#D35EFF', '#9956E8', '#876BFF', '#5662E8' ],
        price: 32
      },
      {
        id: 3,
        name: 'taza',
        colors: ['#804342', '#ffd2d1', '#ff8785', '#806969' ],
        price: 20
      },
      {
        id: 4,
        name: 'camisa icream',
        colors: ['#2544b3', '#ff8a69', '#5076ff', '#7fcc2b' ],
        price: 20
      },
      {
        id: 5,
        name: 'camisa dragon',
        colors: ['#b32542', '#ff6987', '#ff4f73', '#14b32e' ],
        price: 20
      }
    ]
  }
  render() {
    return (
      <div>
        <h3>Iterando listas de objetos star</h3>
        <div>
          { this.state.products.map(({id, name, price, colors}) => {
            return (
              <div key={id}>{name}: ${price}
                <div>
                  {colors.map( color => {
                    return(
                      <span style={ {
                        width: "13px",
                        height: "13px",
                        borderRadius: '0.1rem',
                        border: '1px solid gray',
                        display: 'inline-block',
                        margin: '0.1rem',
                        backgroundColor: color
                      } }></span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  } 
}

export default App;