import { useContext } from "react";
import { AppContext } from "./AppContext";



function SelectTipo(){
    const {tipos,setTipoElegido}=useContext(AppContext);

    const handleChange = (event) => {
        //  console.log(event.target.value);
        const tipo = tipos.find((tipo) => tipo.id == event.target.value);
        console.log(tipo);

        setTipoElegido(tipo);

        // setSeleccion({...seleccion,tipo});
    
      };

      return(
        <>
        <div>
      <label htmlFor="tipo">Tipo de Inmueble: </label>
      <select name="tipo" id="tipo" onChange={handleChange} required>
        <option value="" >Elegir...</option>
        {tipos.map((tipo) => (
          <option key={tipo.id} value={tipo.id}>
            {tipo.tipo}
          </option>
        ))}
      </select>
      </div>
      
    </>

      )
}
export default SelectTipo;