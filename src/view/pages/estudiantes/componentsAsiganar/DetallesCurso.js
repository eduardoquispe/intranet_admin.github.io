import React, { useState } from "react";
import { EstudianteConsumer } from "../contexEstudiante/EstudianteContex";
import Mensualidad from "./Mensualidad";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

//REDUX
import {connect} from 'react-redux'

const DetallesCurso = ({ agregarRelacion, curso, dataAsignacion, setDataAsignacion}) => {

  const [clasepago, setClasepago] = useState();
  const [tipoPago, setTipoPago] = useState('')
    const history = useHistory()
  
  const guardarClase = clase => {
    if (clase === "general") {
      setClasepago(clase);
      return;
    }
    if (clase === "corporativo") {
      setClasepago(clase);
      return;
    }
    setClasepago("");
  };

  const mostrarEleccion = eleccion => {
    if (eleccion === 'mensual') {
      setTipoPago('mensual')
      setDataAsignacion({
        ...dataAsignacion,
        id_tipo_pago: 1
      })
      return
    }
    if (eleccion === 'unico') {
      setTipoPago('unico')
      setDataAsignacion({
        ...dataAsignacion,
        id_tipo_pago: 2
      })
      return
    }

  }

  const guardarCursoEstudiante = (e) => {
      e.preventDefault()
      agregarRelacion()
      // const swalWithBootstrapButtons = Swal.mixin({
      //   customClass: {
      //     confirmButton: "btn btn-success",
      //     cancelButton: "btn btn-danger"
      //   },
      //   buttonsStyling: false
      // });

      // swalWithBootstrapButtons
      //   .fire({
      //     title: "¿Estas seguro de continuar?",
      //     text: "You won't be able to revert this!",
      //     icon: "warning",
      //     showCancelButton: true,
      //     confirmButtonText: "Si, continuar",
      //     cancelButtonText: "No, cancelar!",
      //     reverseButtons: true
      //   })
      //   .then(result => {
      //     if (result.value) {
      //       swalWithBootstrapButtons.fire(
      //         "Guardado",
      //         "Se guardaron los cambios exitosamente",
      //         "success",
      //       );
      //       history.push("/estudiantes");
            
      //     } else if (
      //       /* Read more about handling dismissals below */
      //       result.dismiss === Swal.DismissReason.cancel
      //     ) {
      //       swalWithBootstrapButtons.fire(
      //         "Cancelado",
      //         "No se guardaron los cambios",
      //         "error"
      //       );
      //     }
      //   });
  }

  return (
    <EstudianteConsumer>
      {value => {
        return (
          <React.Fragment>
            {Object.keys(value.curso).length > 0 ? (
              <form onSubmit={e => { agregarRelacion(e)}} className="container-fluid">
                <div className="row">
                  <div className="col-md-6 p-0">
                    <div className="card mb-3">
                      <div className="card-header">{value.curso.nombre_curso}</div>
                      <div className="card-body text-primary">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5>Imagen de profesores</h5>
                  </div>
                  <div className="col-md-12 pt-3">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="costro-matricula">
                            Costo Matrícula
                          </label>
                          <input
                            defaultValue={value.curso.monto_matricula}
                            type="number"
                            id="costro-matricula"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Tipo de pago</label><br/>
                          <div className="form-check">
                            <input onChange={() => mostrarEleccion('unico')} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                              Pago único
                            </label>
                            <input onChange={() => mostrarEleccion('mensual')} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"/>
                            <label className="form-check-label" htmlFor="exampleRadios2">
                              Pago por mensualidades
                            </label>
                            </div>
                        </div>
                        <div class="form-group">
                          {tipoPago === 'mensual' ? 
                            <React.Fragment>
                              <label htmlFor="tipo-mesualidades">
                                Tipo de Mesualidades
                              </label>
                              <select
                                onChange={e => {
                                  guardarClase(e.target.value);
                                    (e.target.value === 'general') ? setDataAsignacion({
                                    ...dataAsignacion,
                                    id_tipo_inversion: 1,
                                    detallePagos: value.curso.GENERAL.MENSUAL
                                  }) 
                                  : setDataAsignacion({
                                    ...dataAsignacion,
                                    id_tipo_inversion: 2,
                                    detallePagos: value.curso.COORPORATIVO.MENSUAL
                                  })
                                }}
                                class="form-control"
                                name=""
                                id="tipo-mesualidades"
                              >
                                <option>--Seleccione--</option>
                                <option value="general">General</option>
                                <option value="corporativo">Corporativo</option>
                              </select>
                            </React.Fragment>
                            : (tipoPago === 'unico') ?
                            <React.Fragment>
                                  <div className="form-check">
                                  <ul className="list-group">
                                    <li className="list-group-item">
                                      <div class="custom-control custom-radio">
                                        <input onChange={() => setDataAsignacion({
                                          ...dataAsignacion,
                                          id_tipo_inversion: 1,
                                          detallePagos: [{
                                            nombrePagoU: 'Pago unico',
                                            "montoEstablecido": value.curso.costoPagoUG
                                          }]
                                        })} className="form-check-input" name="pago-unico" type="radio" id="exampleRadios1" />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                          General
                                        <input type="number" disabled="true" className="form-control" defaultValue={value.curso.costoPagoUG} />
                                        </label> 
                                      </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="custom-control custom-radio">
                                        <input onChange={() => setDataAsignacion({
                                          ...dataAsignacion,
                                          id_tipo_inversion: 2,
                                          detallePagos: [{
                                            nombrePagoU: 'Pago unico',
                                            "montoEstablecido": value.curso.costoPagoUC
                                          }]
                                        })} className="form-check-input" type="radio" name="pago-unico" id="exampleRadios2"/>
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                          Corporativo
                                        <input type="number" disabled="true"  defaultValue={value.curso.costoPagoUC} className="form-control" />
                                        </label>
                                        </div>
                                    </li>
                                  </ul>
                                      
                                  </div>

                            </React.Fragment> 
                            : null
                          }
                        </div>
                        
                      </div>
                      <div className="col-md-6">
                        {tipoPago === 'mensual' ? 
                        <React.Fragment>
                            <h5>Mensualidad</h5>
                            {clasepago === "general" ? (
                              <div className="container pl-md-4">
                                {(value.curso.GENERAL.MENSUAL).map(item => (
                                  <Mensualidad key={item.id} datos={item} />
                                ))}
                              </div>
                            ) : clasepago === "corporativo" ? (
                              <div className="container pl-md-4">
                                {(value.curso.COORPORATIVO.MENSUAL).map(item => (
                                  <Mensualidad key={item.id} datos={item} />
                                ))}
                              </div>
                            ) : (
                                  "Seleccione un tipo de mensualidad"
                                )}
                        </React.Fragment>
                          : null
                        }
                        
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-danger">Aceptar</button>
                <button className="btn btn-dark ml-2">Cancelar</button>
              </form>
            ) : (
              <h5 className="text-danger">
                Seleccione un curso para mostrar información...
              </h5>
            )}
          </React.Fragment>
        );
      }}
    </EstudianteConsumer>
  );
};

const mapStateToProps = state => ({
  curso: state.cursos.curso
})

export default connect(mapStateToProps, {})(DetallesCurso);
