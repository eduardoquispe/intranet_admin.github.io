import React from "react";
import MaterialTableDemo from "../../components/plugins/MaterialTableDemo";

const Asistencia = () => {

 
  return (
    <React.Fragment>
      <div className="constainer_asistencia">
        <h4>Registro de Asistencia</h4>
        <div className="row">
          <div className="col-md-9">
            <form className="needs-validation" noValidate>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <div className="form-group">
                    <label htmlFor="exampleSelect1">Curso / Programa</label>
                    <select className="form-control" id="exampleSelect1">
                      <option value="">
                        --Seleccione--
                      </option>
                      <option>Taller</option>
                      <option>PAE</option>
                      <option>Diplomado</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-group">
                    <label htmlFor="exampleSelect1">Descripción</label>
                    <select className="form-control" id="exampleSelect1">
                      <option value="s">
                        --Seleccione--
                      </option>
                      <option>Entada</option>
                      <option>Salida</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 mb-3"></div>
              </div>
              <div className="form-row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Código</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="DNI"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-3">
            <div style={{ textAlign: "center", padding: "0" }}>
              <iframe
                src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=large&timezone=America%2FLima"
                width="100%"
                height="140"
                frameBorder="0"
                seamless
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive text-nowrap">
        <MaterialTableDemo/>
      </div>
    </React.Fragment>
  );
};

export default Asistencia;
