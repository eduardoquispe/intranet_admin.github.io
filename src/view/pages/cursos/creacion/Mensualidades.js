import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Mensualidad from "./Mensualidad";
import { limpiarInputCostoMensualidad} from '../../../../helpers/functions'
import ModalPublico from "./modal/ModalPublico";
import ModalCorporativo from "./modal/ModalCorporativo";

import shortid from 'shortid'

const Mensualidades = ({ curso, url, datosNuevoCurso, setDatosNuevoCurso}) => {
  const [mensualidadGeneral, setMensualidadGeneral] = useState([]);
  const [costoMensualidadGeneral, setCostoMensualidadGeneral] = useState()
  const [idMensualidad, setIdMensualidad] = useState(shortid.generate())
  const [mensualidadCorporativa, setMensualidadCorporativa] = useState([])
  const [costoMensualidadCorporativa, setcostoMensualidadCorporativa] = useState()
  const [fechaVC, setFechaVC] = useState() 
  const [fechaVG, setFechaVG] = useState() 

  const agregarmensualidadGeneral = e => {
    e.preventDefault();
    setDatosNuevoCurso( {...datosNuevoCurso,
      tipo_inversion:{
        general: {
          mensualidad: [...datosNuevoCurso.tipo_inversion.general.mensualidad,{
            id: idMensualidad,
            clase: "g",
            nombreMensualidadGeneral: `Mensualidad ${datosNuevoCurso.tipo_inversion.general.mensualidad.length + 1}`,
            costoMensualidadGeneral,
            fechaVencimiento: fechaVG
          }],
        },
        coorporativo: {mensualidad:datosNuevoCurso.tipo_inversion.coorporativo.mensualidad}
    }})
    limpiarInputCostoMensualidad()
  };

  const agregarmensualidadCorporativa = e => {
    e.preventDefault();
    setDatosNuevoCurso({
      ...datosNuevoCurso,
      tipo_inversion: {
        general: {mensualidad: datosNuevoCurso.tipo_inversion.general.mensualidad},
        coorporativo: { 
          mensualidad: [...datosNuevoCurso.tipo_inversion.coorporativo.mensualidad,{
            id: idMensualidad,
            clase: "c",
            nombreMensualidadCorporativa: `Mensualidad ${datosNuevoCurso.tipo_inversion.coorporativo.mensualidad.length + 1}`,
            costoMensualidadCorporativa,
            fechaVencimiento: fechaVC
          }]
        }
      }
    })
    limpiarInputCostoMensualidad();
  }

  const eliminarMensualidadGeneral = (idMensualidad) => {
    var numeroM = 1
    var copiaMensualidadG = [...datosNuevoCurso.tipo_inversion.general.mensualidad]
    var nuevaMensualidadG = []
    copiaMensualidadG = copiaMensualidadG.filter(mensualidad => mensualidad.id !== idMensualidad)
    copiaMensualidadG.map(nueva => {
      nuevaMensualidadG=[
        ...nuevaMensualidadG,
        {
          id: nueva.id,
          clase: "g",
          nombreMensualidadGeneral: `Mensualidad ${numeroM++}`,
          costoMensualidadGeneral: nueva.costoMensualidadGeneral,
          fechaVencimiento: nueva.fechaVencimiento
        }
      ]
    })
    console.log(nuevaMensualidadG)
    setDatosNuevoCurso({...datosNuevoCurso, tipo_inversion:{
      general:{mensualidad: nuevaMensualidadG},
      coorporativo: {mensualidad: [...datosNuevoCurso.tipo_inversion.coorporativo.mensualidad]}
    }})
  }
  const eliminarMensualidadC = idMensualidad => {
    var numeroM = 1
    var copiaMensualidadC = [...datosNuevoCurso.tipo_inversion.coorporativo.mensualidad]
    var nuevaMensualidadC = []
    copiaMensualidadC = copiaMensualidadC.filter(mensualidad => mensualidad.id !== idMensualidad)
    copiaMensualidadC.map(nueva => {
      nuevaMensualidadC=[
        ...nuevaMensualidadC,
        {
          id: nueva.id,
          clase: "c",
          nombreMensualidadCorporativa: `Mensualidad ${numeroM++}`,
          costoMensualidadCorporativa: nueva.costoMensualidadCorporativa,
          fechaVencimiento: nueva.fechaVencimiento
        }
      ]
    })
    setDatosNuevoCurso({...datosNuevoCurso, tipo_inversion:{
      general: {mensualidad: [...datosNuevoCurso.tipo_inversion.general.mensualidad]},
      coorporativo: {mensualidad: nuevaMensualidadC}
    }})
  }

 

  useEffect(() => {
    setIdMensualidad(shortid.generate())
    
    //AUTOCOMPLETAR PARA METODO EDITAR
    
  }, [datosNuevoCurso.tipo_inversion.general, datosNuevoCurso.tipo_inversion.coorporativo])

  return (
    <div style={{ padding: "20px 40px" }}>
      <div className="form-row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="costo-matricula">Costo Matricula</label>
            <input type="number" onChange={e => setDatosNuevoCurso({
              ...datosNuevoCurso, monto_matricula: e.target.value
            })} id="costo-matricula" defaultValue={datosNuevoCurso.monto_matricula} className="form-control" />  
          </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="costo-certificado">Costo Certificado</label>
              <input type="number" onChange={e => setDatosNuevoCurso({
                ...datosNuevoCurso, precio_certificado: e.target.value
              })} id="costo-certificado" defaultValue={datosNuevoCurso.precio_certificado} className="form-control" />
            </div>
        </div>
        
      </div>
      <div className="form-group form-check">

        
        <ModalPublico 
         
          mensualidadGeneral={mensualidadGeneral}
          setCostoMensualidadGeneral={setCostoMensualidadGeneral}
          agregarmensualidadGeneral={agregarmensualidadGeneral}
          setFechaVG={setFechaVG}
          datosNuevoCurso={datosNuevoCurso}
        />
        <ModalCorporativo
          mensualidadCorporativa={mensualidadCorporativa}
          setcostoMensualidadCorporativa={
            setcostoMensualidadCorporativa
          }
          agregarmensualidadCorporativa={agregarmensualidadCorporativa}
          setFechaVC={setFechaVC}
          datosNuevoCurso={datosNuevoCurso}
        />
      </div>
      <div>
        <div className="container-fluid mensualidades">
          <div className="row">
            <div className="col-md-6">
            
            <h5>Mensualidades Generales</h5>
              <button
                type="button"
                className="btn btn-warning text-white"
                data-toggle="modal"
                data-target="#modal-publico"
              >
                Agregar <i className="fas fa-plus"></i>
              </button><br/>
              <div className="container p-4 mt-3 rounded">
                {datosNuevoCurso.tipo_inversion.general.mensualidad.length > 0
                  ? datosNuevoCurso.tipo_inversion.general.mensualidad.map(men => (
                    <Mensualidad
                    key={shortid.generate()}
                    men={men} 
                    eliminarMensualidadGeneral={eliminarMensualidadGeneral}/>
                  ))
                  : <p className="text-danger">No hay registro</p>}
              </div>
              <div className="form-group">
                    <label htmlFor="p-unico-g">Pago único:</label>
                    <input type="number" onChange={e => setDatosNuevoCurso({
                      ...datosNuevoCurso,
                      costoPagoUG: e.target.value
                    })} id="p-unico-g" defaultValue={datosNuevoCurso.costoPagoUG} className="form-control"/>
              </div>
            </div>
            <div className="col-md-6">
            <h5>Mensualidades Corporativos</h5>
              <button
                type="button"
                className="btn btn-warning text-white "
                data-toggle="modal"
                data-target="#modal-corporativo"
              >
              Agregar <i className="fas fa-plus"></i>
              </button>
              <br/>
              <div className="container p-4 mt-3 rounded" >
                {(datosNuevoCurso.tipo_inversion.coorporativo.mensualidad).length > 0
                  ? (datosNuevoCurso.tipo_inversion.coorporativo.mensualidad).map(men => (
                  <Mensualidad
                  key={shortid.generate()}
                  men={men}
                  eliminarMensualidadC={eliminarMensualidadC}/>
                  ))
                : <p className="text-danger">No hay registro</p>}
              </div>
              <div className="form-group">
                <label htmlFor="p-unico-c">Pago único:</label>
                <input type="number" onChange={ e => {
                  setDatosNuevoCurso({ ...datosNuevoCurso, costoPagoUC: e.target.value})
                }} id="p-unico-c" defaultValue={datosNuevoCurso.costoPagoUC} className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mensualidades;