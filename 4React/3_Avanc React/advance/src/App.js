import './App.css';
import City from "./assets/react1.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Container from './components/Container';


function App() {
  // const name = 'Joaquim'
  const [userName] = useState('Maria');


  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, KM: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, KM: 35600},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, KM: 55600}
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
          {/*imagem em public */}
          <div>
            <img src="/react.avif" alt="Paisagem" />
          </div>
          {/*imagem em assets */}
          <div>
            <img src={City} alt="Cidade" />
          </div>
          <ManageData/>
          <ListRender/>
          <ConditionalRender/>
          {/* props */}
          <ShowUserName name={userName} />
          {/* Destructuring */}
          <CarDetails brand='VW' KM={100000} color='Azul' newCar={false} />
          {/* Reaproveitamento */}
          <CarDetails brand='Ford' color='Vermelha' KM={0} newCar={true} />
          <CarDetails brand='Fiat' color='Branco' KM={4500} newCar={false} />
          {/* Loop em array de objetos */}
          {cars.map((car) =>(
            <CarDetails 
            brand={car.brand}
            color={car.color} 
            KM={car.KM} 
            newCar={car.newCar}
            />
          ))}
          {/* children */}
          <Container myValue = 'testin'>
            <p>Este é o conteudo</p>
          </Container>
    </div>
  );
}

export default App;
