import logo from './logo.svg';
import './App.css';
import ManualComponent from './ManualComponent';
import { InterpolarComponent } from './InterpolarComponent';
import { PropsComponent } from './PropsComponent';

function App() {

  const info = {
    renderiza:'si',
    cantidad: '2'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ManualComponent />
        <InterpolarComponent />
        <PropsComponent 
          comunicacion= 'props en el componente padre'
          estado= 'correcto'
          objeto= {info}
        />
      </header>
    </div>
  );
}

export default App;
