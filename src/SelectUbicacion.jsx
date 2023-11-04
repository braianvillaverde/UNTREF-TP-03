import { useContext } from "react";
import { AppContext } from "./AppContext";



function SelectUbicacion(){
    const {lugares,setUbicacionElegida}=useContext(AppContext);

    const handleChange = (event) => {
        // console.log(event.target.value);
        const lugar = lugares.find((lugar) => lugar.id == event.target.value);
         console.log(lugar);

         setUbicacionElegida(lugar);

        //  setSeleccion({...seleccion,lugar});
    
      };

      return(
        <>
        <div>
      <label htmlFor="ubicacion">Seleccione la Ubicacion : </label>
      <select name="ubicacion" id="ubicacion" onChange={handleChange}>
        <option value="">Elegir...</option>
        {lugares.map((lugar) => (
          <option key={lugar.id} value={lugar.id}>
            {lugar.nombre}
          </option>
        ))}
      </select>
      </div>
    </>

      )
}
export default SelectUbicacion;