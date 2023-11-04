import { useContext } from "react";
import { AppContext } from "./AppContext";



function InputMetros(){


    const {metros, setMetros,costoM2,valorpoliza,setValorPoliza,tipoelegido,ubicacionelegida}=useContext(AppContext);
    // let poliza=0;

    const handleChange=(event)=>{
        // console.log(event.target.value);

        setMetros(event.target.value);
        console.log(metros);

    }

    const cotizar=function(){
        setValorPoliza(metros*costoM2*tipoelegido.factor*ubicacionelegida.factor);
        let mensualidad=metros*costoM2*tipoelegido.factor*ubicacionelegida.factor;

        let hora=new Date().toLocaleString()

        guardarEnHistorial(hora, mensualidad.toFixed(2), tipoelegido.tipo, ubicacionelegida.nombre, metros);

        mostrarPoliza(mensualidad);
        

    }

    const guardarEnHistorial = (hora, resul, prop, ubi, metros)=> {
        const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []

        const cotizacion = {
                            fecha: hora,
                            propiedad: prop,
                            ubicacion: ubi,
                            metros: metros,
                            poliza: resul,
                            id: historialCotizaciones.length+1
                           }
        
              historialCotizaciones.push(cotizacion)
              localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones))
    }

    const mostrarPoliza = (mensualidad) => {
        let valorPoliza = document.getElementById('preciomensualidad');
        valorPoliza.innerText = mensualidad.toFixed(2);
    }



    return(
        <>
        <div>
        {/* <form onSubmit={handleSubmit}> */}
        <label htmlFor="metroscuadrados">Ingrese los metros Cuadrados : </label>
        <input type="number" name="metroscuadrados" id="metroscuadrados" placeholder="Minimo admitido 5" onChange={handleChange} min={5} />
        <button onClick={cotizar}><span>💰</span>Cotizar</button>
        <p>
        <span id="preciomensualidad">0.00</span>
        </p>
        {/* </form> */}
        </div>

        </>

    )
}

export default InputMetros;