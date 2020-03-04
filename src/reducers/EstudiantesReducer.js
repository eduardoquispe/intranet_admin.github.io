import { LISTAR_ESTUDIANTES, MOSTRAR_ESTUDIANTE} from '../actions/types';

const initialState = {
    estudiantes: [],
    estudiante: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case LISTAR_ESTUDIANTES:
            return{
                ...state,
                estudiantes: action.payload
            } 
        case MOSTRAR_ESTUDIANTE: 
            return{
                ...state,
                estudiante: action.payload
            }
        default:
            return state
    }
}