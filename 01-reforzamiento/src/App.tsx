//import { TiposBasicos } from "./typescript/TiposBasicos";

//import { Funciones } from "./typescript/Funciones";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { Contador } from './components/Contador';


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduciion a TS -React</h1>
      <hr />
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Funciones/>*/}
      <Contador />
    </div>
  )
}

export default App;