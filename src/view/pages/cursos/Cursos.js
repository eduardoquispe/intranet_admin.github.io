import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import MaterialtableDemo from '../../components/plugins/MaterialTableDemo'
import CursosProvider from './ContexCursos/CursosContex'
import {CursosConsumer} from './ContexCursos/CursosContex'
import HeaderContent from '../General/HeaderContent'
import Breadcrumb from '../General/Breadcrumb';
import { useHistory } from "react-router-dom";

import {connect} from 'react-redux'
import { mostrarCursos, buscarCurso } from "../../../actions/cursosActions";


const Cursos = ({ cursos, mostrarCursos }) => {
  const history = useHistory();

  const eliminarCurso = (e, id_curso) => {
    e.preventDefault();
    console.log(`Eliminar: ${id_curso}`);
  };

  const redireccionarEditar = (e, id_curso) => {
    e.preventDefault();
    history.push(`/cursos/${id_curso}`);
  };
  useEffect(() => {
    mostrarCursos();
  }, []);

  useEffect(() => {
    llenarData(cursos, eliminarCurso, redireccionarEditar);
  }, [cursos.length]);

  return (
    <CursosProvider>
      <HeaderContent title={"cursos"} icon={"menu_book"} />
      {/*MIGAJAS */}

      <Breadcrumb />
      <div className="clearfix">
        <div className="container-fluid px-0 content-actions my-3">
          <div className="row">
            <div className="col-md-9">
              <button
                disabled
                className="btn btn-outline-secondary align-items-center"
                to="/alumnos/1/cursos"
              >
                <p className="mb-0 d-flex align-items-center">
                  <i className="material-icons mr-1">list_alt</i>Sesiones
                </p>
              </button>
              <button
                disabled
                className="btn ml-1 btn-outline-secondary align-items-center"
                to="/alumnos/1/cursos"
              >
                <p className="mb-0 d-flex align-items-center">
                  <i class="material-icons mr-1">library_add_check</i>Registros
                </p>
              </button>
            </div>
            <div className="col-md-3">
              <Link className="btn btn-primary float-right" to="/cursos/nuevo">
                <p className="mb-0 d-flex align-items-center">
                  <i className="material-icons">add</i>
                  <span> Añadir Curso</span>
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="container p-0 mb-5 bg-white">
          <div className="continer-fluid border-bottom-0 border">
            <h5
              className="p-3 d-flex align-items-center mb-0"
              style={{ color: "#434343" }}
            >
              <i class="fas fa-list pr-2"></i>Lista de cursos
            </h5>
          </div>
          <div className="tabla border">
              
                  <React.Fragment>
                    <MaterialtableDemo
                      colums={colums}
                      tabla={dataGenerado}
                    />
                  </React.Fragment>
          </div>
        </div>
      </div>
    </CursosProvider>
  );
};
const mapStateToProps = state => ({
  cursos: state.cursos.cursos
})
 
export default connect(mapStateToProps, { mostrarCursos })(Cursos);


/**====================== TABLA =========== */

 const colums = [
   {
     text: "ID",
     key: "id",
     align: "left",
     sortable: true,
     className: "type_of_food"
   },
   {
     text: "Curso",
     key: "curso",
     align: "left",
     sortable: true,
     className: "type_of_food"
   },
   {
     text: "Programa",
     key: "programa",
     align: "left",
     sortable: true,
     className: "type_of_food"
   },
   {
     text: "Fecha inicio",
     key: "fecha_inicio",
     align: "left",
     sortable: true,
     className: "type_of_food"
   },
   {
     text: "Programa",
     key: "programa",
     align: "left",
     sortable: true,
     className: "type_of_food"
   },
   {
     text: "Duracion",
     key: "duracion",
     align: "left",
     sortable: true,
     className: "type_of_food"
   },
   {
     text: "Acciones",
     key: "button",
     align: "left",
     sortable: true,
     className: "type_of_food"
   }
 ]
var dataGenerado = [];

const llenarData = (cursos,eliminarCurso, redireccionarEditar) => {
  dataGenerado = [];
  cursos.map(curso => {
    dataGenerado = [
      ...dataGenerado,
      {
        id: `${curso.id_curso}`,
        curso: `${curso.nombre_curso}`,
        fecha_inicio: `${curso.fecha_inicio}`,
        programa: `${curso.id_tipo_programa}`,
        duracion: `${curso.cantidad_lapso}`,
        button: (
          <React.Fragment>
            <button
              className="btn btn-danger btn-sm"
              type="button"
              onClick={e => eliminarCurso(e, curso.id_curso)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={e => redireccionarEditar(e, curso.id_curso)}
            >
              <i class="far fa-eye"></i>
            </button>
          </React.Fragment>
        )
      }
    ];
  });
};