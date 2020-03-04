import React, { createContext, useState } from 'react';

const EstudiantesContex = createContext();
export const EstudiantesConsumer = EstudiantesContex.Consumer;

const EstudiantesProvider = (props) => {

    const [nombre, setNombre] = useState('Eduardo')
 
    return (
      <EstudiantesContex.Provider
        value={{
          nombre: nombre
        }}
      >
        {props.children}
      </EstudiantesContex.Provider>
    );
}
 
export default EstudiantesProvider;