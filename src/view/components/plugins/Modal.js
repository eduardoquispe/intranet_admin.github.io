import React, { useState } from "react";
import { ocultarModal} from '../../../helpers/functions'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Modal = ({ actionModal, setDataNuevoPrograma}) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setdDescripcion] = useState("");

  //MENSAJE
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  /** */

  const guardarData = e => {
    e.preventDefault()
    if (nombre !== "" && descripcion !== "") {
      if (actionModal === "programa") {
        setDataNuevoPrograma({
          area: actionModal,
          nombre,
          descripcion
        });
        setNombre('')
        setdDescripcion('')
        ocultarModal()
        return
      }

      if (actionModal === 'Curso-Taller') {
        setDataNuevoPrograma({
          area: actionModal,
          nombre,
          descripcion
        });
        setNombre('')
        setdDescripcion('')
        ocultarModal()
        return
      }
    }

    handleClick()
  };



  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Nuevo {actionModal ? actionModal : ""}
              </h5>
              <button
                id="button-close-modal"
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="form-agregar" onSubmit={guardarData}>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    id="recipient-name"
                    onChange={e => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Descripcion
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    defaultValue={""}
                    onChange={e => setdDescripcion(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-danger">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Todos los campos deben estar llenos
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Modal;
