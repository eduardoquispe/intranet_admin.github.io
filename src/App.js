import React from 'react';
import "./Loader"; 
import Sidebar from './view/components/Sidebar'
import Navbar from "./view/components/Navbar";
import Inicio from './view/pages/Inicio'
import Estudiantes from './view/pages/estudiantes/Estudiantes';
import Asistencia from './view/pages/asistencia/Asistencia';
import ReporteAsistencia from './view/pages/asistencia/ReporteAsistencia';
import Profesores from './view/pages/profesores/Profesores';
import NuevoProfesor from './view/pages/profesores/NuevoProfesor'
import InspeccionarProfesor from './view/pages/profesores/InspeccionarProfesor'
import Cursos from './view/pages/cursos/Cursos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NuevoCurso from './view/pages/cursos/NuevoCurso';
import AsignarEstudiantes from './view/pages/estudiantes/AsignarEstudiantes'


//REDUX
import { Provider } from "react-redux";
import store from "./store";

function App() {

  const profesores = () => {
    return <Profesores/>
  }
  const asistencia = () => {
    return <Asistencia />;
  }

  const editarCurso = props => {
    return <NuevoCurso idCurso={props.match.params.idCurso}/>
  }

  const nuevoCurso = props => {
    console.log(props)
    return <NuevoCurso url={props.match.url} />
  }

  const editarProfesor = props => {
    return <InspeccionarProfesor idProfesor={props.match.params.idProfesor}/>
  }

  const asignarEstudiante = props => {
    return <AsignarEstudiantes idEstudiante={props.match.params.idEstudiante}/>
  }

  return (
    <Provider store={store}>
    <Router>
     
          <Navbar />
          <Sidebar />
          <div className="content-wrapper">
            <section className="content">
              <div className="container-build p-2 content-body">
                <Switch>
                  <Route exact path="/" component={Inicio} />
                  <Route exact path="/estudiantes" component={Estudiantes} />
                  <Route exact path="/estudiantes/nuevo" component={Estudiantes} />
                <Route exact path="/estudiantes/asignar/:idEstudiante" component={asignarEstudiante} />
                  <Route exact path="/registro-asistencia" component={asistencia} />
                  <Route exact path="/reporte-asistencia" component={ReporteAsistencia} />
                  <Route exact path="/profesores" component={profesores} />
                  <Route exact path="/profesores/nuevo" component={NuevoProfesor} />
                <Route exact path="/profesores/editar/:idProfesor" component={editarProfesor} />
                  <Route exact path="/cursos" component={Cursos} />
                  
                <Route exact path="/cursos/nuevo" component={nuevoCurso}/>
                <Route exact path="/cursos/:idCurso" component={editarCurso} />
                  </Switch>
              </div>
            </section>
          </div>
       
    </Router>
    </Provider>
  );
}
export default App;
