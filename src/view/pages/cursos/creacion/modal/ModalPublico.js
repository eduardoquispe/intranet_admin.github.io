import React from "react";

const ModalPublico = ({ mensualidadGeneral, datosNuevoCurso, setCostoMensualidadGeneral, setFechaVG ,agregarmensualidadGeneral}) => {
  return (
    <div
      className="modal fade bd-example-modal-sm"
      id="modal-publico"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="container p-4">
            <h4 className="text-center">Mensualidad Precio General</h4>
            <div className="form-group pt-2">
              <label htmlFor="">
                Mensualidad {datosNuevoCurso.tipo_inversion.general.mensualidad.length + 1}
              </label>
              <input
                onChange={e => {
                  setCostoMensualidadGeneral(e.target.value);
                }}
                className="form-control mt-3"
                type="number"
                name=""
                id="costo-mensualidad-publico"
              />
            </div>
            <div className="form-group">
              <label className="pt-1" htmlFor="">
                Fecha de Vencimiento
              </label>
              <input
                onChange={e => {
                  setFechaVG(e.target.value);
                }}
                className="form-control mt-1 fecha-v"
                type="date"
              />
            </div>
            <button
              className="btn btn-success my-3"
              onClick={agregarmensualidadGeneral}
              type="button"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPublico;
