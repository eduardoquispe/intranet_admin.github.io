import React from 'react';
import MaterialTableDemo from "../../components/plugins/MaterialTableDemo" 
import EstudiantesProvider from './contexEstudiante/EstudiantesContex'
import HeaderContent from '../General/HeaderContent'
import Breadcrumb from '../General/Breadcrumb'
import {Link} from 'react-router-dom'
//REDUX
import {connect} from 'react-redux'
import { listarEstudiantes} from '../../../actions/estudiantesActions';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Estudiantes = ({ listarEstudiantes, estudiantes}) => {
    
  const history = useHistory()
  const [capturaId, setCaptura] = useState()
  const redireccionarEditar = (e, idEstudiante) => {
    e.preventDefault()
    history.push(`/estudiantes/asignar/${idEstudiante}`)
  }

    useEffect(() => {
      listarEstudiantes()
      llenarDataEstudiantes(estudiantes, redireccionarEditar);
    }, [estudiantes.length])

    return (
      <EstudiantesProvider>
        <HeaderContent title={"estudiantes"} icon={"people_alt"} />
        <Breadcrumb />
        <div className="container-fluid px-0 content-actions my-3">
          <div className="row">
            <div className="col-md-9">
              <button
                disabled
                className="btn btn-outline-secondary align-items-center"
                to="/alumnos/1/cursos"
              >
                <p className="mb-0 d-flex align-items-center">
                  <i className="material-icons mr-1">list_alt</i>Cursos
                </p>
              </button>
              <button
                disabled
                className="btn ml-1 btn-outline-secondary align-items-center"
                to="/alumnos/1/cursos"
              >
                <p className="mb-0 d-flex align-items-center">
                  <i class="material-icons mr-1">library_add_check</i>Matricular
                </p>
              </button>
            </div>
            <div className="col-md-3">
              <Link className="btn btn-primary float-right" to="/cursos/nuevo">
                <p className="mb-0 d-flex align-items-center">
                  <i className="material-icons">add</i>
                  <span> Añadir Estudiante</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container p-0 bg-white">
          <div className="continer-fluid border-bottom-0 border">
            <h5
              className="p-3 d-flex align-items-center mb-0"
              style={{ color: "#434343" }}
            >
              <i class="fas fa-list pr-2"></i>Lista de Estudiantes
            </h5>
          </div>
          <div className="tabla px-3 border">
            <MaterialTableDemo
              colums={colums}
              tabla={dataEstudiante}
              redireccionarEditar={redireccionarEditar}
              setCaptura={setCaptura}
            />
          </div>
        </div>
      </EstudiantesProvider>
    );
     
}

const mapSateToProps = state => ({
  estudiantes: state.estudiantes.estudiantes
})
 
export default connect(mapSateToProps, { listarEstudiantes})(Estudiantes);

//----------------------DATATABLE/---------------
const colums = [
  {
    text: "ID",
    key: "id_estudiante",
    align: "left",
    sortable: true,
    className: "type_of_food"
  },
  {
    text: "Nombre",
    key: "usuario",
    align: "left",
    sortable: true,
    className: "type_of_food"
  },
  {
    text: "Apellido",
    key: "apellido_usuario",
    align: "left",
    sortable: true,
    className: "type_of_food"
  },
  {
    text: "DNI",
    key: "dni",
    align: "left",
    sortable: true,
    className: "type_of_food"
  },
  {
    text: "Usuario",
    key: "nombre_usuario",
    align: "left",
    sortable: true,
    className: "type_of_food"
  },
  {
    text: "Estado",
    key: "nombre_estado",
    align: "left",
    sortable: true,
    className: "type_of_food"
  },
  {
    text: "Usuario",
    key: "nombre_usuario",
    align: "left",
    sortable: true,
    className: "type_of_food"
  },
  {
    text: "Acciones",
    key: "button",
    align: "center",
    sortable: true,
    className: "type_of_food"
  }

];

var dataEstudiante = []
const llenarDataEstudiantes = (estudiantes, redireccionarEditar) => {
  dataEstudiante = [];
  estudiantes.map(estudiante => {
    dataEstudiante = [
      ...dataEstudiante,
      {
        id_estudiante: estudiante.id_estudiante,
        nombre_usuario: estudiante.usuario,
        apellido_usuario: estudiante.apellido_usuario,
        dni: estudiante.dni,
        usuario: estudiante.nombre_usuario,
        nombre_estado: estudiante.nombre_estado,
        button: (
          <React.Fragment>
            <button className="btn btn-danger btn-sm" type="button" title="Eliminar">
              <i className="fas fa-trash-alt"></i>
            </button>
            <button className="btn btn-warning btn-sm" type="button" title="Ver">
              <i className="fas fa-eye"></i>
            </button>
            <button
              onClick={(e) =>  redireccionarEditar(e, estudiante.id_estudiante)}
              className="btn btn-primary btn-sm"
              title='Matricular'
              type="button"
            >
              <i class="fas fa-swatchbook"></i>
            </button>
          </React.Fragment>
        )
      }
    ];
  });
};