import { MOSTRAR_CURSOS, MOSTRAR_CURSO, LLENAR_SELECT_PROYECTOS, LLENAR_SELECT_CURSOS, LLENAR_SELECT_TC} from '../actions/types'

const initialState = {
    cursos: [],
    curso: {},
    select_proyectos: [],
    selectTipoCurso: [],
    selectCursos: []
}

export default function(state = initialState, action){
    switch (action.type) {
      case MOSTRAR_CURSOS:
        return{
            ...state,
            cursos: action.payload,
        }

      case MOSTRAR_CURSO:
        return{
          ...state,
          curso: action.payload
        }
      case LLENAR_SELECT_PROYECTOS:
        return{
          ...state,
          select_proyectos: action.payload
        }
      case LLENAR_SELECT_TC: 
        return{
          ...state,
          selectTipoCurso: action.payload
        }
      case LLENAR_SELECT_CURSOS:
        return{
          ...state,
          selectCursos: action.payload
        }

      default:
        return state
    }
}