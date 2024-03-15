import React, {useState, useEffect} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cors from 'cors'
import RegistrarUsuario from './components/registrarUsuario';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Registro de Usuarios</h1>
      <RegistrarUsuario />
    </>
  )
}

export default App
