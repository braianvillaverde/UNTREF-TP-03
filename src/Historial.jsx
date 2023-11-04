import Tabla from "./Tabla";
import { Link } from "react-router-dom";


function Historial() {

    return (
        <>
            <h1>Historial</h1>
            <Tabla />
            <Link to={"/"}>
                <button>
                    Volver al inicio
                </button>
            </Link>
        </>
    )
}

export default Historial;


