import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

//REDUX
import {connect} from 'react-redux'
import { llenarSelectProyectos, buscarCurso, llenarSelectCursos,llenarSelectTC} from '../../../../actions/cursosActions'

const EstudianteContex = createContext()
export const EstudianteConsumer = EstudianteContex.Consumer;

const EstudianteProvider = (props) => {
    const { llenarSelectProyectos, curso,llenarSelectCursos, buscarCurso,llenarSelectTC,select_proyectos} = props

    const [estudiante, setEstudiante] = useState('Junior')
    // const [curso, setCurso] = useState()

    const [dataSelectTCurso, setDataSelectTCurso] = useState([])

    
    // const llamarCurso = idCurso => {
    //     //Llanar cursos
    //     setCurso({
    //             proyecto: "PAE TRIBUTACIÓN",
    //             nombre: "CAPACITACION EN TESORERIA",
    //             mensualidad: {
    //                 "general": [
    //                     { "monto": 260, id: 1, numeroMensualidad: 1 },
    //                     { "monto": 260, id: 2, numeroMensualidad: 2 },
    //                     { "monto": 360, id: 3, numeroMensualidad: 3 }
    //                 ],
    //                 "corporativo": [
    //                     { "monto": 260, id: 4, numeroMensualidad: 1 },
    //                     { "monto": 450, id: 5, numeroMensualidad: 2 },
    //                     { "monto": 360, id: 6, numeroMensualidad: 3 }
    //                 ]
    //             },
    //             horario: "Martes",
    //             fechaInicio: "18/02/2020",
    //             duracion: 4,
    //             tiempo: "meses"
    //     })
    // }

    const optionsSelectTC = idProyecto => {
        llenarSelectTC(idProyecto)
    }

    const optionsSelectCursos = id_tipo_programa => {
        llenarSelectCursos(id_tipo_programa)
    }

    const capturaraCurso = idCurso =>{
        buscarCurso(idCurso)
    }



    useEffect(() => {
        llenarSelectProyectos()
    }, [])

    return ( 
        <EstudianteContex.Provider
            value={{
                estudiante: estudiante,
                curso: curso,
                // llamarCurso: llamarCurso,
                select_proyectos: select_proyectos,
                selectTipoCurso: dataSelectTCurso,
                optionsSelectTC: optionsSelectTC,
                optionsSelectCursos: optionsSelectCursos,
                capturaraCurso: capturaraCurso,
            }}
        >   
            {props.children}
        </EstudianteContex.Provider>
     );
}

const mapStateToProps = state => ({
    curso: state.cursos.curso,
    select_proyectos: state.cursos.select_proyectos,
    selectTipoCurso: state.cursos.selectTipoCurso,
    selectCursos: state.cursos.selectCursos
})


export default connect(mapStateToProps, { buscarCurso, llenarSelectCursos, llenarSelectProyectos,llenarSelectTC})(EstudianteProvider);