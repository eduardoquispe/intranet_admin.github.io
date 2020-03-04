import React from 'react';
import Curso from './Curso'
import MaterialTableDemo from '../../../components/plugins/MaterialTableDemo'

import {connect} from 'react-redux';



const CursosProfesor = ({ cursosProfe}) => {

    
    return (
      <React.Fragment>
        <div className="container-fluid">
          {llenarDataCursoProfes(cursosProfe)}
        </div>
      </React.Fragment>
    );
}

const mapStateToPops = state => ({
    cursosProfe: state.profesores.cursosProfe
})

export default connect(mapStateToPops, {})(CursosProfesor);

const colums = [
  {
    text: "ID",
    key: "id",
    align: "center",
    sortable: true,
    className: "type_of_food"
  },
  { text: "Nombre", key: "nombre_curso", align: "center",
    sortable: true,
    className: "type_of_food" },
  { text: "Tipo", key: "nombre_tipo_programa", align: "center",
    sortable: true,
    className: "type_of_food" },
  { text: "Dias de clase", key: "dias_clase", align: "center",
    sortable: true,
    className: "type_of_food" },
  { text: "Hora Inicio", key: "hr_inicio", align: "center",
    sortable: true,
    className: "type_of_food" },
  { text: "Hora Fin", key: "hr_fin", align: "center",
    sortable: true,
    className: "type_of_food" },
  { text: "Acciones", key: "button", align: "center",
    sortable: true,
    className: "type_of_food" }
];

var dataCursoProfe = []
const llenarDataCursoProfes = (cursosProfesor) => {
    if (cursosProfesor.length > 0) {
       console.log(cursosProfesor);
       dataCursoProfe = [];
       cursosProfesor.map(curso => {
         dataCursoProfe = [
           ...dataCursoProfe,
           {
             id: curso.id_curso,
             nombre_curso: curso.nombre_curso,
             nombre_tipo_programa: curso.nombre_tipo_programa,
             dias_clase: curso.dias_clase,
             hr_inicio: curso.hr_inicio,
             hr_fin: curso.hr_fin,
             button: (
               <React.Fragment>
                 <button className="btn btn-danger btn-sm" type="button">
                   <i className="fas fa-trash-alt"></i>
                 </button>
                 <button className="btn btn-primary btn-sm" type="button">
                   <i className="fas fa-eye"></i>
                 </button>
               </React.Fragment>
             )
           }
         ];
       }); 
           return <MaterialTableDemo colums={colums} tabla={dataCursoProfe} />;

    }
    
}