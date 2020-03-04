import React, { useState, useEffect } from "react";
import Playground from "../../../components/plugins/Playground";
import shortid from 'shortid'

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//REDUX
import {connect} from 'react-redux'
import { llenarSelectProyectos, llenarSelectTC, llenarSelectCursos} from '../../../../actions/cursosActions'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const NivelAcademico = ({
  agregarAcionModal,
  setDatosNuevoCurso,
  datosNuevoCurso,
  dataNuevoPrograma,
  curso,
  llenarSelectProyectos,//REDUX
  llenarSelectTC,//REDUX
  llenarSelectCursos,//REDUX
  select_proyectos,//REDUX STATE
  selectTipoCurso,//REDUX STATE
  selectCursos//REDUX STATE
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [dataNivelAcademico, setDataNivelAcademico] = useState({
    nombre_curso: '',
    id_tipo_programa: '', //curso o taller
    cantidad_lapso: '', //cantidad meses numero
    id_lapso_curso: '' // meses o dias, 1 0 2
    
  })

  //STATE PARA LOS DATOS DE TIPOS PROGRAMA(DIPLOMADO, ETC)
  const [dataEspecializacion, SetDataEspecializacion] = useState([]); 
  //STATE PARA EL NOMBRE DE LA ESPECIALIZACION (CURSOS, TALLERES)
  const [dataNombreCursoTaller, setDataNombreCursoTaller] = useState([]);

  const [dataTipoE, setDataTipoE] = useState([]);
  //USE EFFECT PARA INSTERTAR NUEVOS DATOS EN LOS SELECTS
  const nuevosDatosSelect = () => {
    if (dataNuevoPrograma.area === "programa") {
      SetDataEspecializacion([
        ...dataEspecializacion,
        { title: dataNuevoPrograma.nombre }
      ]);
      handleClick();
      return;
    }

    if (dataNuevoPrograma.area === "Curso-Taller") {
      setDataNombreCursoTaller([
        ...dataNombreCursoTaller,
        { title: dataNuevoPrograma.nombre }
      ]);
      handleClick();
      return;
    }
    setOpen(false);
  }
  useEffect(() => {
    nuevosDatosSelect()
    llenarSelectProyectos()
    if(select_proyectos.length > 0){
      SetDataEspecializacion(select_proyectos)
      
    }
  }, [dataNuevoPrograma.nombre, curso, select_proyectos.length ]);
  
  //Llenar select curso / taller
  useEffect(() => {
    setDataTipoE(selectTipoCurso)
  }, [selectTipoCurso])

  useEffect(() => {
    setDataNombreCursoTaller(selectCursos)
  }, [selectCursos])

  return (
    
    <div style={{ padding: "20px 40px" }}>
        <div className="form-row align-items-center">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Proyecto:</label>
            <div className="form-row">
              <div className="col-md-10">
                <select
                  onChange={e => {
                    setDatosNuevoCurso({
                      ...datosNuevoCurso,
                      programa: e.target.value
                    });
                    llenarSelectTC(e.target.value)
                    llenarSelectCursos(999999999)
                  }}
                  defaultValue={datosNuevoCurso.programa}
                  className="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option >--Seleccione--</option>
                  {dataEspecializacion.map(data => optionsSelectProyecto(data))}
                </select>
              </div>
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-dark pt-1"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => agregarAcionModal("programa")}
                  data-whatever="@mdo"
                >
                  ...
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group align-items-center">
            <label htmlFor="">Tipo de Curso:</label>
            <div className="form-row">
              <div className="col-md-10">
                <select
                  onChange={e => {
                    setDatosNuevoCurso({
                      ...datosNuevoCurso,
                      tipoEspecializacion: e.target.value
                    });
                    llenarSelectCursos(e.target.value)
                  }}
                  className="form-control"
                  id="exampleFormControlSelect1"
                > 
                <option value="">--Seleccione--</option>
                  {dataTipoE.map(data => optionsSelectTipoCurso(data))}
                </select>
              </div>
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-dark pt-1"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@mdo"
                  onClick={() => agregarAcionModal("especializacion")}
                >
                  ...
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-row ml-md-2 align-items-center">
            <div className="col-md-10">
            <label htmlFor="">Nombre Curso</label>
             <select
                  onChange={e => {
                    setDatosNuevoCurso({
                      ...datosNuevoCurso,
                      nombre_curso: e.target.options[e.target.selectedIndex].text,
                      id_tipo_programa: e.target.value
                    });
                  }}
                  className="form-control"
                  id="exampleFormControlSelect1"
                > 
                <option value="">--Seleccione--</option>
                {dataNombreCursoTaller.map(data => optionsSelectTCursos(data))}
                </select>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-dark pt-1"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => agregarAcionModal("Curso-Taller")}
                data-whatever="@mdo"
              >
                ...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mt-3 ml-md-2  align-items-center">
        <div className="form-row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">Duración:</label>
              <div className="form-row">
                <div className="col-md-9">
                  <input
                    id="standard-number"
                    className="form-control"
                    label="Number"
                    type="number"
                    defaultValue={datosNuevoCurso.cantidad_lapso}
                    onChange={e =>
                      setDatosNuevoCurso({
                        ...datosNuevoCurso,
                        cantidad_lapso: e.target.value
                      })
                    }
                    
                  />
                </div>
                <div className="col-md-3">
                  {console.log(dataNivelAcademico.nombre_lapso === 'MESES') }
                  <select onChange={e => setDatosNuevoCurso({ ...datosNuevoCurso, id_lapso_curso: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                    <option selected={(datosNuevoCurso.nombre_lapso === 'Dias')} value="2">Dias</option>  
                    <option selected={(datosNuevoCurso.nombre_lapso === 'MESES')} value="1">Meses</option>
                  </select>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="hr_lectivas">Horas lectivas</label>
              <input type="number" onChange={e => 
                {setDatosNuevoCurso({...datosNuevoCurso, hrs_lectivas: e.target.value})}} 
                id="hr_lectivas" defaultValue={datosNuevoCurso.hrs_lectivas} className="form-control"/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="hr_lectivas">Horas académicas</label>
              <input type="number" id="hr_lectivas" onChange={e => 
              { setDatosNuevoCurso({ ...datosNuevoCurso, hrs_academicas: e.target.value }) }}
              defaultValue={datosNuevoCurso.hrs_academicas} className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div className="form-grop mt-3 ml-md-2  align-items-center">
        <div className="form-row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="lugar">Lugar:</label>
              <input type="text" id="lugar" className="form-control" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">Cantidad de estudiantes:</label>
              <input type="number" className="form-control" name="" id="" />
            </div>  
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      {/* IMPORTANDO EL MODAL*/}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          AGREGADO CORECTAMENTE
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToPorps = state => ({
  select_proyectos: state.cursos.select_proyectos,
  selectTipoCurso: state.cursos.selectTipoCurso,
  selectCursos: state.cursos.selectCursos
})

export default connect(mapStateToPorps, { llenarSelectCursos, llenarSelectProyectos, llenarSelectTC})(NivelAcademico);

const optionsSelectProyecto = data => {
  return <option key={data.id_postgrado} value={data.id_postgrado}>{data.nombre_postgrado}</option>;
};
const optionsSelectTipoCurso = data => {
  return <option key={data.id_tipo_programa} value={data.id_tipo_programa}>{data.nombre_tipo_programa}</option>;
}
const optionsSelectTCursos = data => {
  return <option key={data.id_curso} value={data.id_tipo_programa}>{data.nombre_curso}</option>;
}