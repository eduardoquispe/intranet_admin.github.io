import React from 'react';
import FormularioProfesor from '../../components/Formularios/FormualrioProfesor'
import { useEffect } from 'react';
import CursosProfesores from './componentsProfesor/CursosProfesor'
//REDUX
import {connect} from 'react-redux';
import { listarCursosProfesores} from '../../../actions/profesoresActions';

const InspeccionarProfesor = ({ idProfesor, listarCursosProfesores}) => {

    useEffect(() => {
        listarCursosProfesores(idProfesor)
    }, [])

    return ( 
        <React.Fragment>
            <div className="container px-md-3">
                <div className="row ">
                    <div className="col-lg-12 order-lg-2">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button type="button" 
                                    href="#"
                                    data-target="#profile"
                                    data-toggle="tab"
                                    className="nav-link active">Perfíl</button>
                            </li>
                            <li className="nav-item">
                                <button href="#"
                                    data-target="#cursos"
                                    data-toggle="tab"
                                    className="nav-link">Cursos</button>
                            </li>
                        </ul>

                       
                            <div className="tab-content py-4">
                                <div className="tab-pane active" id="profile">
                                    <FormularioProfesor 
                                    idProfesor={idProfesor}
                                    />
                                </div>
                                <div className="tab-pane" id="cursos">
                                    <CursosProfesores/>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

const mapStateToPops = state => ({
    cursoProfesor: state.profesores.cursoProfesor
})
 
export default connect(mapStateToPops, { listarCursosProfesores})(InspeccionarProfesor);