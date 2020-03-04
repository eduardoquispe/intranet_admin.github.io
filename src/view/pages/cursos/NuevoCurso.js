import React, { useState, useEffect } from "react";

import Horario from "./creacion/Horario";
import Mensualidades from "./creacion/Mensualidades";
import NivelAcademico from "./creacion/NivelAcademico";
import Modal from "../../components/plugins/Modal";
import HeaderContent from '../General/HeaderContent'
import CursosProvider, { CursosConsumer } from './ContexCursos/CursosContex'
import axios from 'axios'
//REDUX 
import {connect} from 'react-redux';
import { buscarCurso} from '../../../actions/cursosActions'
import Breadcrumb from "../General/Breadcrumb";

function HorizontalLabelPositionBelowStepper({ url, idCurso, buscarCurso, curso}) {
  //
  const [actionModal, setActionModal] = useState("");
  //Para guardar nuevo programa
  const [dataNuevoPrograma, setDataNuevoPrograma] = useState({
    area: "",
    nombre: "",
    descipcion: ""
  });
  //
  const [datosNuevoCurso, setDatosNuevoCurso] = useState({
    programa: "",
    id_tipo_programa: '',
    tipoEspecializacion: "",
    nombre_curso: "",
    lugar: '',
    estudiantes: '',
    cantidad_lapso: '', //cantidad meses numero
    nombre_lapso: '', //meses o dias
    fecha_inicio: '',
    dias_clase: '',
    hr_inicio: '',
    tiempo_tolerancia: '',
    hr_fin: '',
    'hrs_lectivas': '',
    'hrs_academicas': '',
    matricula: '',
    "certificado": "Certificado por San Marcos", 
    costoPagoUG: '',
    costoPagoUC: '',
    tipo_inversion: {
      general: {
        mensualidad: []
      },
      coorporativo: {
        mensualidad: []
      }
    },
    precio_certificado: ''
  });

  const agregarAcionModal = action => {
    setActionModal(action);
  };
  
  const guardarCurso = async e => {
    e.preventDefault()

    if(
      datosNuevoCurso.programa === '' ||
      datosNuevoCurso.tipoEspecializacion === "" ||
      datosNuevoCurso.nombreCursoTaller === "" ||
      datosNuevoCurso.cantidadDuracion === "" ||
      datosNuevoCurso.mesesDias === '' ||
      datosNuevoCurso.lugar ===  '' ||
      datosNuevoCurso.estudiantes === '' ||
      datosNuevoCurso.fechainicio === '' ||
      datosNuevoCurso.diasClases === '' ||
      datosNuevoCurso.horaInicio === '' ||
      datosNuevoCurso.tiempoTolerancia === '' ||
      datosNuevoCurso.horaCulminacion === '' ||
      datosNuevoCurso.matricula === '' ||
      datosNuevoCurso.pagoUnico === '' ||
      datosNuevoCurso.costoCertificado === ''
    ){
      alert('hay vacios')
    }{
      let respuesta = await axios.post('https://www.buykistudio.com/inedi/admin/insertarCurso', datosNuevoCurso) 
      console.log(respuesta)
    }

  }  

  useEffect(() => {
    
    if (idCurso) {
      
      console.log(idCurso)
      buscarCurso(idCurso)
    }
    if (Object.keys(curso).length > 0 && url !== '/cursos/nuevo'){
      setDatosNuevoCurso({
        ...datosNuevoCurso, 
        programa: curso.nombre_curso,
        id_lapso_curso: curso.id_lapso_curso,
        id_tipo_programa: curso.id_tipo_programa,
        cantidad_lapso: curso.cantidad_lapso,
        nombre_lapso: curso.nombre_lapso,
        fecha_inicio: curso.fecha_inicio,
        dias_clase: curso.dias_clase,
        'hrs_lectivas': curso.hrs_lectivas,
        'hrs_academicas': curso.hrs_academicas,
        hr_inicio: curso.hr_inicio,
        tiempo_tolerancia: curso.tiempo_tolerancia,
        hr_fin: curso.hr_fin,
        monto_matricula: curso.monto_matricula,
        precio_certificado: curso.precio_certificado,
        costoPagoUG: curso.costoPagoUG,
        costoPagoUC: curso.costoPagoUC,
        tipo_inversion: {
          general: {
            mensualidad: curso.GENERAL.MENSUAL,
          },
          coorporativo: {
            mensualidad: curso.COORPORATIVO.MENSUAL,
          }
        },
      })
    }
  }, [curso.id_curso])

  return (
    <CursosProvider>
      <HeaderContent title={"Nuevo curso"} icon={"menu_book"} />

      <Breadcrumb/>

      <div className="container mt-4 px-md-3 border">
        <Modal
          actionModal={actionModal}
          setDataNuevoPrograma={setDataNuevoPrograma}
        />
        <div className="row mt-4">
          <div className="col-lg-12 order-lg-2">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  href="#"
                  data-target="#profile"
                  data-toggle="tab"
                  className="nav-link active"
                >
                  Nivel Academico
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  data-target="#messages"
                  data-toggle="tab"
                  className="nav-link"
                >
                  Horario
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  data-target="#edit"
                  data-toggle="tab"
                  className="nav-link"
                >
                  Mensualidades
                </button>
              </li>
            </ul>
            <form onSubmit={e => guardarCurso(e)}>
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <NivelAcademico
                    setDatosNuevoCurso={setDatosNuevoCurso}
                    agregarAcionModal={agregarAcionModal}
                    datosNuevoCurso={datosNuevoCurso}
                    dataNuevoPrograma={dataNuevoPrograma}
                    curso={curso}
                    url={url}
                  />
                </div>
                <div className="tab-pane" id="messages">
                  <Horario
                    curso={curso}
                    url={url}
                    datosNuevoCurso={datosNuevoCurso}
                    setDatosNuevoCurso={setDatosNuevoCurso}
                  />
                </div>
                <div className="tab-pane" id="edit">
                  <Mensualidades
                    curso={curso}
                    url={url}
                    datosNuevoCurso={datosNuevoCurso}
                    setDatosNuevoCurso={setDatosNuevoCurso}
                  />
                </div>
              </div>
              <div className="container px-md-5 botones">
                <button type="submit" className="btn btn-danger">
                  Guardar
                </button>
                <button type="button" className="btn btn-dark ml-2">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CursosProvider>
  );
}

const mapStateToProps = state => ({
  curso: state.cursos.curso 
})

export default connect(mapStateToProps, { buscarCurso}) (HorizontalLabelPositionBelowStepper)