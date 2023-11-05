import {createContext, useEffect, useState } from "react";


 export const AppContext=createContext();

 export const AppProvider = ({children})=>{
  const costoM2 = 35.86
  const [metros,setMetros]=useState("");
  const [valorpoliza,setValorPoliza]=useState(0);
  const [tipoelegido,setTipoElegido]=useState({});
  const[ubicacionelegida,setUbicacionElegida]=useState({});
  const url1="../src/datosPropiedad.json";
  const url2="../src/datosUbicacion.json";

    const [tipos,setTipos]=useState([]);

    useEffect(() => {
        fetch(url1)
          .then((response) => response.json())
          .then((propiedades) => setTipos(propiedades));
      }, []);


      const [lugares,setLugares]=useState([]);

      useEffect(() => {
          fetch(url2)
            .then((response) => response.json())
            .then((ubicaciones) => setLugares(ubicaciones));
        }, []);





        const data={ubicacionelegida,setUbicacionElegida,tipoelegido,setTipoElegido,tipos,lugares,metros,setMetros,valorpoliza,setValorPoliza,costoM2};
        
        return <AppContext.Provider value={data}>{children}</AppContext.Provider>



 }