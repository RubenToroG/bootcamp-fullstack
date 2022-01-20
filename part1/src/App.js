import './App.css';
import Mensaje from './Mensaje';


const Description = () => {
  return <p>Esta es la descripción del curso fullstack bootcamp</p>
}

const App = () => {
  
  return (
    <div className="App">
      <Mensaje color= 'red' msg='Estamos trabajando'/>
      <Mensaje color= 'yellow' msg='en un corso de react'/>
      <Mensaje color= 'green' msg='JS claro'/>
      <Description />
      
    </div>
  );
}

export default App;
