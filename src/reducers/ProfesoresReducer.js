import { LISTAR_PROFESORES, LISTAR_CURSOS_PROFESORES} from '../actions/types';

const initialState = {
    profesores: [],
    cursosProfe: []
}

export default function(state = initialState, action){
    switch (action.type) {
        case LISTAR_PROFESORES:
            return{
                ...state,
                profesores: action.payload
            }
        case LISTAR_CURSOS_PROFESORES:
            return{
                ...state,
                cursosProfe: action.payload
            }

        default:
            return state
    }
}