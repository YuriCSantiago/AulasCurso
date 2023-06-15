import './App.css';
import Mycomponent from './components/Mycomponent';
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('Yuri');
  const redTitle = true;

  return (
    <div className="App">
      {/*CSS global */}
      <h1>React com CSS</h1>
      {/*CSS do component */}
      <Mycomponent/>
      <p>Este paragrafo é do App.js</p>
      {/*Inline CSS -- Pouco utilizado */}
      
      <p style={{
      color: 'blue', 
      padding: '25px', 
      borderTop: '2px solid red'}}>Este elemento foi estilizado de forma inline</p>
      {/*CSS inline dinamico */}
      <h2 style={n < 10 ? { color: 'purple' } : {color: 'pink' }}>CSS dinamico</h2>
      <h2 style={n > 10 ? { color: 'purple' } : {color: 'pink' }}>CSS dinamico</h2>
      <h2 style={name === 'Yuri' ? { color: 'green', backgroundColor: '#000' } : null}>Teste nome</h2>
      {/*Classe dinamica */}
      <h2 className={redTitle ? 'red-title' : 'tittle'}>Este titulo vai ter classe dinamica</h2>
      {/*CCS Modules */}
      <Title/>
      <h2 className='my_title'>testando</h2>
    </div>
  );
}

export default App;
