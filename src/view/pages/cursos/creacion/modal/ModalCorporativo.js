import React from "react";
import shortid from 'shortid'

const ModalCorporativo = props => {
  const {
    agregarmensualidadCorporativa,
    setcostoMensualidadCorporativa,
    setFechaVC,
    datosNuevoCurso
  } = props;

  return (
      <div
          className="modal fade bd-example-modal-sm"
          id="modal-corporativo"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
      >
    <div className="modal-dialog modal-md" role="document">
      <div className="modal-content">
        <div className="container p-4">
          <h4 className="text-center">Mensualidad Precio Corporativo</h4>
          <div className="form-group">
              <label className="pt-2" htmlFor="">
                Mensualidad {datosNuevoCurso.tipo_inversion.coorporativo.mensualidad.length + 1}
              </label>
              <input type="hidden" defaultValue={shortid.generate()}/>
              <input
                onChange={e => {
                  setcostoMensualidadCorporativa(e.target.value);
                }}
                className="form-control mt-1"
                type="number"
                name=""
                id="costo-mensualidad-corporativo"
              />
          </div>
          <div className="form-group">
              <label className="pt-1" htmlFor="">
                Fecha de Vencimiento
              </label>
              <input
                onChange={e => {
                  setFechaVC(e.target.value);
                }}
                className="form-control mt-1 fecha-v"
                type="date"
              />
          </div>
          <button
            className="btn btn-success my-3"
            onClick={agregarmensualidadCorporativa}
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

export default ModalCorporativo;
