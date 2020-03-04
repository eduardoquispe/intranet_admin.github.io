import React from "react";
import {Link} from 'react-router-dom'

const colorPrimary = {
    color: "#fff"
}

const Sidebar = () => {

  

  return (
    <aside
      className="main-sidebar elevation-4"
      style={{ background: "#394B59", color: "#fff" }}
    >
      <Link to="/" className="brand-link">
        <img
          src="data:image/png;base64,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"
          alt="AdminLTE Logo"
          className="brand-image"
        />
        <span style={colorPrimary} className="brand-text font-weight-light">
          Intranet
        </span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <picture className="image">
            <img
              src="https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </picture>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>

        <nav className="mt-2 ">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="ml-2 nav-header">INICIO</li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link text-white">
                <i className="nav-icon text-white far fa-clock"></i>
                <p className="text-white">Gestión de asistencia</p>
                <i className="fas fa-angle-left right text-white"></i>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/registro-asistencia" className="nav-link text-white ">
                    <i className="far fa-circle nav-icon"></i>
                    <p className="text-white">Registrar asistencia</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reporte-asistencia" className="nav-link text-white">
                    <i className="far fa-circle nav-icon"></i>
                    <p className="text-white">Reportes de asistencia</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/s" className="nav-link">
                <i className="nav-icon text-white  fas fa-th"></i>
                <p className="text-white">Administrar profesores</p>
                <i className="fas fa-angle-left right text-white"></i>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/profesores" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p className="text-white">Todos los profesores</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profesores/nuevo" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p className="text-white">Añadir profesor</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon text-white  fas fa-th"></i>
                <p className="text-white">Gestionar estudiantes</p>
                <i className="fas fa-angle-left right text-white"></i>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/estudiantes" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p className="text-white">Todos los estudiantes</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/estudiantes/asignar" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p className="text-white">Asignar estudiantes</p>
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className="nav-header">USUARIOS</li>
            <li className="nav-item">
              <a href="pages/calendar.html" className="nav-link">
                <i className="nav-icon text-white  far fa-calendar-alt"></i>
                <p className="text-white">
                  Gestión de usuarios
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>

            <li className="nav-header">PROGRAMAS</li>

            <li className="nav-item">
              <Link to="/cursos" className="nav-link">
                <i className="fas fa-circle nav-icon"></i>
                <p className="text-white">Cursos</p>
                <i className="fas fa-angle-left right text-white"></i>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/cursos" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p className="text-white">Todos los cursos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cursos/nuevo" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p className="text-white">Crear curso</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
