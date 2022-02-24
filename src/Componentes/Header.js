import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1>React Router Tutorial</h1>
        {/* <p>Powered by Adrian Alvarado</p> */}

        <ul className='nav'>
            <li>
              <Link to="/" activeClass="active"> Inicio</Link>
            </li>

            <li>
              <Link to="/AcercaDe"  activeClass="active">Acerca de...</Link>
            </li>

            <li>
              <Link to="/Perfil"  activeClass="active">Perfil</Link>
            </li>
        </ul>
    </div>    
  )
}

export default Header