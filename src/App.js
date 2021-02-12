import React from 'react';
// En teoría podría quedar "TarjetaFruta" solo, ya que los módulos de ES
// al encontrar la carpeta (y no el archivo js indicado en la importación)
// buscan el archivo "index.js" dentro de esa carpeta (en este caso TarjetaFruta)
// pero parece que conmigo (al menos con la versión 14 de node) no funciona
// import TarjetaFruta from './components/TarjetaFruta';
import TarjetaFruta from './components/TarjetaFruta/index';

const App = () => {
  return (
    <div>
      <TarjetaFruta name="Sandía" price="5"/>
      <TarjetaFruta name="Naranja" price="50"/>
      <TarjetaFruta name="Uva" price="45"/>
    </div>
  )
};

export default App;