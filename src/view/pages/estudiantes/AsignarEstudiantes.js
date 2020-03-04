import React from 'react'
import MaterialTableDemo from '../../components/plugins/MaterialTableDemo'
import BarraProyectos from './componentsAsiganar/BarraProyectos'
import EstudianteProvider from './contexEstudiante/EstudianteContex';
import DetallesCurso from './componentsAsiganar/DetallesCurso';
import {useState } from 'react';

//REDUX
import {connect} from 'react-redux';
import { mostrarEstudiante} from '../../../actions/estudiantesActions';
import { useEffect } from 'react';
import Axios from 'axios';
import HeaderContent from '../General/HeaderContent';
import Breadcrumb from '../General/Breadcrumb';

const AsignarEstudiantes = ({ idEstudiante, mostrarEstudiante, estudiante}) => {

  const [dataAsignacion, setDataAsignacion] = useState({
    "id_estudiante": idEstudiante,
    "id_postgrado": '',
    "id_tipo_programa": "",
    "id_curso": "",
    "monto_matricula": "100 ",
    "id_tipo_inversion": "",
    "id_tipo_pago": "",
    "id_usuario": '',
    "detallePagos": [],
    "porcentaje_descuento": "10",
    "porcentaje_penalidad": "1"
  })

  const agregarRelacion = async e => {
    e.preventDefault()
    let respuesta = await Axios.post('https://www.buykistudio.com/inedi/admin/insertarMatricula', dataAsignacion)
    
    console.log(respuesta.data)
  }

  useEffect(() => {
    mostrarEstudiante(idEstudiante)
  }, [])

  return (
    <EstudianteProvider>
      <HeaderContent title={`Matrícula`} subItem={'Eduardo'} icon={"menu_book"} />
      <Breadcrumb />
      <div className="container-fluid  mt-4 px-4 border">
        <div className="row">
          <div className="col-md-8">
            <DetallesCurso
              agregarRelacion={agregarRelacion}
              dataAsignacion={dataAsignacion}
              setDataAsignacion={setDataAsignacion}
            />
          </div>
          <div className="col-md-4">
            <div className="container border">
              <BarraProyectos
                dataAsignacion={dataAsignacion}
                setDataAsignacion={setDataAsignacion}
              />
            </div>
          </div>
        </div>
      </div>
    </EstudianteProvider>
  );
}

const mapStateToProps = state => ({
  estudiante: state.estudiantes.estudiante
})
 
export default connect(mapStateToProps, { mostrarEstudiante})(AsignarEstudiantes);