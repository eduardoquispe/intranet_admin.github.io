import React, { useState, useEffect }  from 'react';

const Horario = ({ curso, url, datosNuevoCurso ,setDatosNuevoCurso}) => {

  const [dataHorario, setDaraHorario] = useState({
    fecha_inicio: '',
    dias_clase: '',
    hr_inicio: '',
    tiempo_tolerancia: '',
    hr_fin: '',
    'hrs_lectivas': '',
    'hrs_academicas': '',

  })

  useEffect(() => {
    if (Object.keys(curso).length > 0 && url !== '/cursos/nuevo') {
      setDaraHorario({
        fecha_inicio: curso.fecha_inicio,
        dias_clase: curso.dias_clase,
        hr_inicio: curso.hr_inicio,
        tiempo_tolerancia: curso.tiempo_tolerancia,
        hr_fin: curso.hr_fin
      })
    }
  }, [curso])

    return (
      <React.Fragment>
        <div style={{ padding: "20px 40px" }}>
          <div className="form-row">
            <div className="col-md-6">
              <div className="from-group">
                <label htmlFor="">
                  Fecha de Inicio
                </label>
                <input defaultValue={datosNuevoCurso.fecha_inicio} onChange={e => setDatosNuevoCurso({...datosNuevoCurso, fecha_inicio: e.target.value})} type="date" className="form-control" name="" id=""/>
              </div>
            </div>
  
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Dias de Clases</label>
                <select className="form-control" onChange={e => setDatosNuevoCurso({ ...datosNuevoCurso, dias_clase: e.target.value })} id="exampleFormControlSelect1">
                  <option>--Seleccione--</option>
                  <option selected={(datosNuevoCurso.dias_clase === 'Lunes')}>Lunes</option>
                  <option selected={(datosNuevoCurso.dias_clase === 'Martes')}>Martes</option>
                  <option selected={(datosNuevoCurso.dias_clase === 'Miercoles')}>Miercoles</option>
                  <option selected={(datosNuevoCurso.dias_clase === 'Jueves')}>Jueves</option>
                  <option selected={(datosNuevoCurso.dias_clase === 'viernes ')}>Viernes</option>
                  <option selected={(datosNuevoCurso.dias_clase === 'Sabados ')}>Sábado</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-row">
            
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="">Hora de Inicio</label>
                <input defaultValue={datosNuevoCurso.hr_inicio} onChange={e => setDatosNuevoCurso({ ...datosNuevoCurso, hr_inicio: e.target.value })} type="time" className="form-control"/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="">Tiempo de Tolerancia (min)</label>
                <input defaultValue={datosNuevoCurso.tiempo_tolerancia} onChange={e => setDatosNuevoCurso({ ...datosNuevoCurso, tiempo_tolerancia: e.target.value })} type="number" className="form-control"/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="" htmlFor="">Hora de culminación</label>
                <input defaultValue={datosNuevoCurso.hr_fin} onChange={e => setDatosNuevoCurso({ ...datosNuevoCurso, hr_fin: e.target.value })} type="time" className="form-control" />              </div>
            </div>
            </div>
        </div>
      </React.Fragment>
    );
}
 
export default Horario;