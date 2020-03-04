import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Mensualidad = ({ datos }) => {

  return (
    <React.Fragment>
      <div className="form-row">
        <div className="col-md-6 align-items-center d-flex">
          <label>{datos.nombreMensualidadGeneral ? datos.nombreMensualidadGeneral : datos.nombreMensualidadCorporativa}: </label>
        </div>
        <div className="col-md-6">
          <input className="form-control" defaultValue={datos.costoMensualidadGeneral ? datos.costoMensualidadGeneral: datos.costoMensualidadCorporativa} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mensualidad;
