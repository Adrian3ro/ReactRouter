import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import VerPerfil from '../Paginas/VerPerfil';
import EditarPerfil from '../Paginas/EditarPerfil';

const Perfil = ({login}) => {
  const historia = useHistory();

  useEffect(() => {
    if (!login) {
      historia.push("/");
    }
  }, [login,historia]);
  
  const {path,url} = useRouteMatch();

  return (
    <div className='componentes'>
      <h1>Pagina de Perfil</h1>
      <p>Aqui va la informacion respecto al mantenimiento a los perfiles de usuario</p>
      <br/>

      <ul>
        <li>
          <Link to={`${url}/VerPerfil`}>Ver Perfil</Link>
        </li>
        <li>
          <Link to={`${url}/EditarPerfil`}>Editar Perfil</Link>
        </li>
      </ul>

      <Switch>
         <Route path={`${path}/VerPerfil"`} component={VerPerfil} />
         <Route path={`${path}/EditarPerfil"`} component={EditarPerfil} />
      </Switch>
    </div>    
  )
}

export default Perfil