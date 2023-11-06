import React from "react";
import { Link } from "react-router-dom";
import InputMetros from "./InputMetros";
import SelectTipo from "./SelectTipo";
import SelectUbicacion from "./SelectUbicacion";

function Form () {
    
    return (
        <>
            <h1>Seguros del hogar</h1>
            <SelectTipo/>
            <SelectUbicacion/>
            <InputMetros/>
            <button>
            <Link to={"historial"}>
                    <span>💾</span>
            </Link>
            </button>
        </>
    )
}

export default Form;



