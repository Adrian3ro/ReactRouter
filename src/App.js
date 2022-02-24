import { BrowserRouter, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './Componentes/Header';
import Inicio from './Paginas/Inicio';
import AcercaDe from './Paginas/AcercaDe';
import Perfil from './Paginas/Perfil';
import NoEncontrada from './Paginas/NoEncontrada';
import { Route, Switch} from 'react-router-dom';
import {useState} from "react";
import Footer from './Componentes/Footer';

function App() {
  const [login, setLogin] = useState(false);
  
  return (
    <BrowserRouter>
       <div className="App">
        <Header/>      
      
        <button onClick={() => setLogin(!login)}>
          {login ? "Salir Sesion" : "Iniciar Sesion"}
        </button>
        <br/>

        <Switch>
          <Route path = "/" component={Inicio} exact />
          <Route path = "/AcercaDe" component={AcercaDe} />
          <Route path = "/Perfil">
            {/* {login ? <Perfil/> : <Redirect to="/" />} */}
            <Perfil login={login} />
          </Route>
          <Route component={NoEncontrada} />
        </Switch>  
      </div>

      <div className="Footer">
        <Footer/>
      </div>
    </BrowserRouter>   
  );
}

export default App;
