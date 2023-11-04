import Form from "./Form";
import Historial from "./Historial";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";

function App() {



  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={Form} />
          <Route path='/Historial' Component={Historial} />
        </Routes>
      </BrowserRouter>
    {/* <h1>Seguros del Hogar</h1>
     <SelectTipo/>
     <SelectUbicacion/>
     <InputMetros/> */}
     
    </>
  )
}

export default App
