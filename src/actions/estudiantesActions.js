import { LISTAR_ESTUDIANTES, MOSTRAR_ESTUDIANTE} from './types';
import {URL} from './router/index';
import Axios from 'axios';

export const listarEstudiantes = () => async dispatch => {
    let estudiantes = await Axios.get(`${URL}/admin/mostrarEstudiantes`)

    dispatch({
        payload: estudiantes.data,
        type: LISTAR_ESTUDIANTES
    })
}

export const mostrarEstudiante = idEstudiante => async dispatch => {
    let estudiante = await Axios.get(`${URL}/admin/mostrarEstudianteId/${idEstudiante}`)

    dispatch({
        payload: estudiante.data,
        type: MOSTRAR_ESTUDIANTE
    })
}