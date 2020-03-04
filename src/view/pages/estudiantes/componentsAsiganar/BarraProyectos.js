import React, { useState } from "react";
import { EstudianteConsumer } from "../contexEstudiante/EstudianteContex";
import shortid from 'shortid'
//REDUX
import {connect} from 'react-redux'

const BarraProyectos = ({ selectTipoCurso, selectCursos, dataAsignacion, setDataAsignacion, estudiante }) => {

  //setDataAsignacion es para guardar en el state global y guardar la realcion
  //de alumno y su curso
  const changeProyecto = (optionsSelectTC, valor) => {
    optionsSelectTC(valor)
    setDataAsignacion({
      ...dataAsignacion,
      id_postgrado: valor
    })
  }

  const changeTipoPrograma = (optionsSelectCursos, valor) => {
    optionsSelectCursos(valor)
    setDataAsignacion({
      ...dataAsignacion,
      id_tipo_programa: valor
    })
  }

  const changeCurso = (capturaraCurso, valor) => {
    capturaraCurso(valor)
    setDataAsignacion({
      ...dataAsignacion,
      id_curso: valor
    })
  }

  const guardarIdUsuario = () => {
    if (dataAsignacion.id_usuario === '') {
      setDataAsignacion({
        ...dataAsignacion,
        id_usuario: estudiante[0].id_usuario
      })
    }

    
    return <React.Fragment> 
            <picture className="container">
            {(estudiante[0].img_usuario) ? 
              <img style={{ height: "50%", width: "50px" }} src={`https://buykistudio.com/inedi/${estudiante[0].img_usuario}`} alt="no hay imagen" className="rounded-circle img img-fluid" />
              : null
            }
              </picture>
              <div>
        <h4 class="text-center mt-1 text-uppercase">{`${estudiante[0].usuario} ${estudiante[0].apellido_usuario}`}</h4>
              </div>
            </React.Fragment>
   
  }
  return (
    <EstudianteConsumer>
      {value => {
        return (
          <React.Fragment>
          
          <div>{estudiante.length > 0 ? guardarIdUsuario() : null}</div>
            <div className="form-group">
              <label htmlFor="">Proyecto</label>
              <select onChange={e => { changeProyecto(value.optionsSelectTC,e.target.value); value.optionsSelectCursos(9999999)}} className="form-control" id="exampleFormControlSelect1">
                <option>--Seleccione--</option>
                {(value.select_proyectos).map(data => (
                  optionsProyectos(data)
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Clase de Curso</label>
              <select onChange={e => changeTipoPrograma(value.optionsSelectCursos,e.target.value)} className="form-control" id="clase_curso">
                <option>--Seleccione--</option>
                {(selectTipoCurso) ? (selectTipoCurso).map(data => (
                  optionsTipoC(data)
                )): ''}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Contenido</label>
              <div
                className="lista border"
                style={{ height: "350px" }}
              >
                <div class="form-check">
                  <ul className="list-group">
                  </ul>
                  {selectCursos ? selectCursos.map(data => (
                    <li className="list-group-item" key={shortid.generate()}>
                      <div className="custom-control custom-radio">
                        {optionsRadioCursos(data, value.capturaraCurso, changeCurso)}
                      </div>
                    </li>
                  )): null}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </EstudianteConsumer>
  );
};

const mapStateToProps = state => ({
  select_proyectos: state.cursos.select_proyectos,
  selectTipoCurso: state.cursos.selectTipoCurso,
  selectCursos: state.cursos.selectCursos,
  estudiante: state.estudiantes.estudiante
})

export default connect(mapStateToProps, {})(BarraProyectos);

const optionsProyectos = (data) => {
  return <option key={data.id_postgrado} value={data.id_postgrado}>{data.nombre_postgrado}</option>
}
const optionsTipoC = (data) => {
  return <option key={data.id_tipo_programa} value={data.id_tipo_programa}>{data.nombre_tipo_programa}</option>
}
const optionsRadioCursos = (data, capturaraCurso, changeCurso) => {
  return <React.Fragment key={data.id_curso}>
    <input
      className="form-check-input"
      type="radio"
      name="exampleRadios"
      onChange={e => changeCurso(capturaraCurso,e.target.value)}
      defaultValue={data.id_curso}
    />
    <label className="form-check-label" htmlFor="exampleRadios2">
      {data.nombre_curso}
    </label>
  </React.Fragment>
  
}