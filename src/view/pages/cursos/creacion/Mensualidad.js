import React, { useEffect, useState } from "react";


const Mensualidad = ({ men, eliminarMensualidadGeneral, eliminarMensualidadC, curso }) => {

    const [nombreMensualidad, setNombreMensualidad] = useState('')
    const [costoMensualidad, setCostoMensualidad] = useState('')
    const [fechaV, setFechaV] = useState('')

    const guardarvalor = () => {
      setFechaV(men.fechaVencimiento)
        if (men.nombreMensualidadGeneral) {
          setNombreMensualidad(men.nombreMensualidadGeneral);
          setCostoMensualidad(men.costoMensualidadGeneral);
          
          return;
        }

        if (men.nombreMensualidadCorporativa) {
          setNombreMensualidad(men.nombreMensualidadCorporativa);
          setCostoMensualidad(men.costoMensualidadCorporativa);
          return;
        }
    }

    const eliminarMensualidad = () => {
      if(men.clase === "g"){
        eliminarMensualidadGeneral(men.id)
        return
      }
      eliminarMensualidadC(men.id)
    }

    useEffect(() => {
      guardarvalor();
      
    }, [men]);
  return (
      <div className="content-mensualidad mb-2">
     
        <div className="row">
          <div className="col-md-12 d-flex align-items-center">
            <div className="form-row">
              <label className="pt-1 col-12">{nombreMensualidad}</label>
              <div className="col-md-3">
                <div className="row">
                
                  <input type="text" className="form-control" defaultValue={costoMensualidad} />
                </div>
              </div>
              <div className="col-md-7">
              <input type="date" className="form-control" defaultValue={fechaV}/>
              </div>
            <div className="col-md-2">
              <div className="content-acciones align-items-center">
                <button type="button" onClick={eliminarMensualidad} className="btn rounded-circle btn-info"><i className="fas fa-trash-alt"></i></button>
              </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default Mensualidad;
