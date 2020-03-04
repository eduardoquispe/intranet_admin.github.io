import React, { createContext, useState, useEffect } from "react";
//REDUX
import { connect } from "react-redux";
import { mostrarCursos, buscarCurso } from "../../../../actions/cursosActions";

const CursosContex = createContext();
export const CursosConsumer = CursosContex.Consumer;

const CursosProvider = props => {
  const { mostrarCursos, cursos, buscarCurso } = props;


  useEffect(() => {
    mostrarCursos();
  }, [])
  

  return (
    <React.Fragment>
      <CursosContex.Provider
        value={{
          cursos: cursos,
          buscarCurso: buscarCurso
        }}
      >
        {props.children}
      </CursosContex.Provider>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  cursos: state.cursos.cursos,
  curso: state.cursos.curso
});

export default connect(mapStateToProps, { mostrarCursos, buscarCurso })(
  CursosProvider
);