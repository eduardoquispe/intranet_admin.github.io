import React, { createContext, useState } from 'react';

const CursoContex = createContext()
export const CursoConsumer = CursoContex.Consumer; 

const CursoProvider = (props) => {

    const [curso, setCurso] = useState('Hola Soy un curso')
    const guardarCurso = id => {
        setCurso(id)
    }
    return ( 
        <CursoContex.Provider
            value={{
                curso: curso,
                guardarCurso: guardarCurso()
            }}
        >
            {props.children}
        </CursoContex.Provider>
     );
}
 
export default CursoProvider;