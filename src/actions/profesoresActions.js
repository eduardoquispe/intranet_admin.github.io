import { LISTAR_PROFESORES, AGREGAR_PROFESOR, LISTAR_CURSOS_PROFESORES} from './types'
import {URL} from './router/index';
import Axios from 'axios'

export const listarProfesores = () => async dispatch => {
    let profesores = await Axios.get(`${URL}/admin/mostrarDocentes`)

    dispatch({
        payload: profesores.data,
        type: LISTAR_PROFESORES
    })
}

export const listarCursosProfesores = idProfesor => async dispatch => {
    let cursos = await Axios.get(`${URL}/admin/mostrarCursoIdDocente/${idProfesor}`)

    dispatch({
        payload: cursos.data,
        type: LISTAR_CURSOS_PROFESORES
    })
}
