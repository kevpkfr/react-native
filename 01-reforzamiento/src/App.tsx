//import { TiposBasicos } from "./typescript/TiposBasicos";

import { Usuarios } from "./components/Usuarios";

//import { ContadorConHook } from "./components/ContadorConHook";

//import { Funciones } from "./typescript/Funciones";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { Contador } from './components/Contador';
//import { Login } from './components/Login';


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introdución a TS -React</h1>
      <hr />
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Funciones/>*/}
      {/*<Contador />*/}
      {/*<ContadorConHook />*/}
      {/*<Login />*/ }
      <Usuarios/>
    </div>
  )
}

export default App;