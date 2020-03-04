import React from "react";
import MaterialTableDemo from "../../components/plugins/MaterialTableDemo";
import HeaderContent from "../General/HeaderContent";
import Breadcrumb from "../General/Breadcrumb";
import { Link } from "react-router-dom";
//REDUX
import { connect } from "react-redux";
import { listarProfesores } from "../../../actions/profesoresActions";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Profesores = ({ listarProfesores, profesores }) => {
  const history = useHistory();

  const redirigirEditar = idDocente => {
    history.push(`profesores/editar/${idDocente}`);
  };

  useEffect(() => {
    listarProfesores();
    llenarDataProfes(profesores, redirigirEditar);
  }, [profesores.length]);

  return (
    <div>
      <HeaderContent title={"Profesores"} icon={"people_alt"} />
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
            <Link
              className="btn btn-primary float-right"
              to="/profesores/nuevo"
            >
              <p className="mb-0 d-flex align-items-center">
                <i className="material-icons">add</i>
                <span> Añadir Profesor</span>
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
            <i class="fas fa-list pr-2"></i>Lista de Profesores
          </h5>
        </div>
        <div className="tabla px-3 border">
          <MaterialTableDemo colums={colums} tabla={dataProfe} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profesores: state.profesores.profesores
});

export default connect(mapStateToProps, { listarProfesores })(Profesores);

//----------------------DATATABLE/---------------
const colums = [
  {
    text: "ID",
    key: "id_docente",
    align: "left",
    sortable: true,
    className: "type_of_food"
  },
  {
    text: "Nombre",
    key: "nombre_usuario",
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
    key: "usuario",
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
    text: "Acciones",
    key: "button",
    align: "center",
    sortable: true,
    className: "type_of_food"
  }
];
var dataProfe = [];
const llenarDataProfes = (profesores, redirigirEditar) => {
  dataProfe = [];
  profesores.map(profesor => {
    dataProfe = [
      ...dataProfe,
      {
        id_docente: profesor.id_docente,
        nombre_usuario: profesor.usuario,
        apellido_usuario: profesor.apellido_usuario,
        dni: profesor.dni,
        usuario: profesor.nombre_usuario,
        button: (
          <React.Fragment>
            <button className="btn btn-danger btn-sm" type="button">
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-warning btn-sm"
              type="button"
              onClick={() => redirigirEditar(profesor.id_docente)}
            >
              <i className="fas fa-eye"></i>
            </button>
          </React.Fragment>
        )
      }
    ];
  });
};
