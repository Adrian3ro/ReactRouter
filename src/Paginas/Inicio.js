import React, { useEffect } from 'react'

const Inicio = () => {

  useEffect(() => {
    window.scroll(0,0)
  }, [])
   
  return (
    <div className='componentes'>
      <h1>Pagina de Inicio</h1>
      <p>Esta es la pagina de Inicio, aqui se muestra el inicio del proyecto</p>
    </div>    
  )
}

export default Inicio
