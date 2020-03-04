import { MOSTRAR_CURSOS, MOSTRAR_CURSO, LLENAR_SELECT_PROYECTOS, LLENAR_SELECT_CURSOS, LLENAR_SELECT_TC } from "./types";
import {URL} from './router/index'
import axios from 'axios'


export const mostrarCursos = () =>async dispatch => {

    let cursos = await axios.get(`${URL}/admin/mostrarCursos`);
  
    dispatch({
      payload: cursos.data,
      type: MOSTRAR_CURSOS
    });
} 

export const buscarCurso = idCurso => async dispatch => {
  let body = {
    "id_curso": idCurso
  }

  let curso = await axios.post(`${URL}/admin/mostrarCursoId`, body)

  dispatch({
    payload: curso.data,
    type: MOSTRAR_CURSO
  })
}

export const llenarSelectProyectos = () => async dispatch => {
  let proyectos = await axios.post(`${URL}/admin/mostrarPostgrado`)

  dispatch({
    payload: proyectos.data,
    type: LLENAR_SELECT_PROYECTOS
  })
}

export const llenarSelectTC = idProyecto => async dispatch => {
  let config = {
    "id_post": idProyecto
  }
  let tc = await axios.post(`${URL}/admin/mostrarTipoProgramaIdPost`, config)

  dispatch({
    payload: tc.data,
    type: LLENAR_SELECT_TC
  })
}

export const llenarSelectCursos = idRTP => async dispatch => {
  let config = {
    "id_tp_prog": idRTP
  }

  let cursos = await axios.post(`${URL}/admin/mostrarCursoIdTipoPrograma`, config)

  dispatch({
    payload: cursos.data,
    type: LLENAR_SELECT_CURSOS
  })
}
