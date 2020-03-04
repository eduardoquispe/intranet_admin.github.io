import React, { useState } from 'react';
import Swal from 'sweetalert2'
import Axios from 'axios'
//REDUX
import {connect} from 'react-redux'

const FormularioProfesor = ({ idProfesor}) => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [grado, setgrado] = useState('')
    const [fechaNac, setFechaNac] = useState('')
    const [email, setEmail] = useState('')
    const [dni, setDni] = useState('')
    const [direccion, setDireccion] = useState('')
    const [distrito, setDistrito] = useState('')
    const [provincia, setProvincia] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [celular, setCelular] = useState({
      propio: '',
      referencia: ''
    })
    const [userName, setuserName] = useState('')
    const [clave, setClave] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const nuevoProfesor = e => {

      e.preventDefault()

      const dataNuevoProfe = {
        nombre_usuario: nombre,
        apellido_usuario: apellido,
        fecha_nac: fechaNac,
        dni: dni,
        direccion: direccion,
        distrito: distrito,
        provincia: provincia,
        departamento: departamento,
        celular: celular.propio,
        celular_ref: celular.referencia,
        email: email,
        usuario: userName,
        password: clave,
        id_estado: 1,
        cargo: grado,
        descripcion: descripcion
      }

      agregarNuevoProfesor(dataNuevoProfe)
    }
    const agregarNuevoProfesor = async dataProfe => {
      let respuesta = await Axios.post(`https://www.buykistudio.com/inedi/admin/insertarDocente`, dataProfe)
      
      console.log(respuesta.data)
      if (respuesta.status === 200) {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
    }

    return (
      <React.Fragment>
        <h3>{idProfesor !== undefined  ? '' : 'Nuevo Profesor'}</h3>
      <div className="row my-2 mt-5">
        <div className="col-lg-8 order-lg-2">
          <form onSubmit={e => nuevoProfesor(e)}>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Nombre
                  </label>
              <div className="col-lg-9">
                <input
                  onChange={e => setNombre(e.target.value)}
                  className="form-control"
                  type="text"
                  defaultValue={nombre}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Apellido
                  </label>
              <div className="col-lg-9">
                <input
                  onChange={e => setApellido(e.target.value)}
                  className="form-control"
                  type="text"
                  defaultValue={apellido}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Grado
                  </label>
              <div className="col-lg-9">
                <input
                    onChange={e => setgrado(e.target.value)}
                  className="form-control"
                  type="text"
                  defaultValue=''
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Fecha Nacimiento
                  </label>
              <div className="col-lg-9">
                <input
                    onChange={e => setFechaNac(e.target.value)}
                  className="form-control"
                  type="date"
                  defaultValue=''
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                E-mail
                  </label>
              <div className="col-lg-9">
                <input
                onChange={e => setEmail(e.target.value)}
                  className="form-control"
                  type="email"
                  defaultValue={email}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                DNI
                  </label>
              <div className="col-lg-9">
                <input
                onChange={e => setDni(e.target.value)}
                  className="form-control"
                  defaultValue={dni}
                  type="text"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Dirección
                  </label>
              <div className="col-lg-9">
                <input
                  onChange={e => setDireccion(e.target.value)}
                  className="form-control"
                  type="text"
                  defaultValue={direccion}
                  placeholder="Street"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label"></label>
              <div className="col-lg-3">
                <input
                  onChange={e => setDistrito(e.target.value)}
                  className="form-control"
                  type="text"
                  defaultValue={distrito}
                  placeholder="Distrito"
                />
              </div>
              <div className="col-lg-3">
                <input
                  onChange={e => setProvincia(e.target.value)}
                  className="form-control"
                  type="text"
                  defaultValue={provincia}
                  placeholder="Provincia"
                />
              </div>
              <div className="col-lg-3">
                <input
                  onChange={e => setDepartamento(e.target.value)}
                  className="form-control"
                  type="text"
                  defaultValue={departamento}
                  placeholder="Región"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Time Zone
                  </label>
              <div className="col-lg-9">
                <select
                  id="user_time_zone"
                  className="form-control"
                  size="0"
                >
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">
                    (GMT-08:00) Pacific Time (US &amp; Canada)
                      </option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">
                    (GMT-07:00) Mountain Time (US &amp; Canada)
                      </option>
                  <option
                    value="Central Time (US &amp; Canada)"
                    selected="selected"
                  >
                    (GMT-06:00) Central Time (US &amp; Canada)
                      </option>
                  <option value="Eastern Time (US &amp; Canada)">
                    (GMT-05:00) Eastern Time (US &amp; Canada)
                      </option>
                  <option value="Indiana (East)">
                    (GMT-05:00) Indiana (East)
                      </option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Tel/Celular
                  </label>
              <div className="col-lg-9">
                <input
                  onChange={e => setCelular({...celular, propio: e.target.value})}
                  className="form-control"
                  defaultValue={celular.propio}
                  type="number"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Celular Ref.
                  </label>
              <div className="col-lg-9">
                <input
                    onChange={e => setCelular({ ...celular, referencia: e.target.value })}
                  className="form-control"
                  defaultValue={celular.referencia}
                  type="number"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Username
                  </label>
              <div className="col-lg-9">
                <input
                  onChange={e => setuserName(e.target.value)}
                  className="form-control"
                  type="text"
                  defaultValue={userName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Password
                  </label>
              <div className="col-lg-9">
                <input
                  onChange={e => setClave(e.target.value)}
                  className="form-control"
                  type="password"
                  defaultValue={clave}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Confirm password
                  </label>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  type="password"
                  defaultValue={clave}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Descripción
                  </label>
              <div className="col-lg-9">
                <textarea onChange={e => setDescripcion(e.target.value)}  className="form-control" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label"></label>
              <div className="col-lg-9">
                <input
                  type="reset"
                  className="btn btn-secondary"
                  value="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 order-lg-1 text-center">
          <img
            src="data:image/png;base64,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"
            className="mx-auto img-fluid img-circle d-block"
            alt="avatar"
          />
          <h6 className="mt-2">Upload a different photo</h6>
          <label className="custom-file">
            <input type="file" id="file" className="custom-file-input" />
            <span className="custom-file-control btn btn-success">Subir Imagen</span>
          </label>
        </div>

      </div>
      </React.Fragment>
    );
}
 
const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, {}) (FormularioProfesor);