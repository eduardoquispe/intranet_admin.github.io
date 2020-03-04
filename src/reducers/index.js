import { combineReducers } from "redux";
import CursosReducer from './CursosReducer';
import ProfesoresReducer from './ProfesoresReducer';
import EstudiantesReducer from './EstudiantesReducer';

export default combineReducers({
  cursos: CursosReducer,
  profesores: ProfesoresReducer,
  estudiantes: EstudiantesReducer
});