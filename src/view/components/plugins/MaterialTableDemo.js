// import React, { useEffect, useState, Component, Fragment  } from "react";
// import MaterialTable from "material-table";
// import { render } from 'react-dom';
// import ReactDatatable from '@ashvin27/react-datatable';


// function MaterialTableDemo({ colums, cursos, tabla, dataProfe, dataEstudiante, dataCursoProfe}) {
//   const [state, setState] = useState({
//     columns: [
//       { title: "id_curso", field: "id_curso" },
//       { title: "Nombre", field: "Nombre" },
//       { title: "Apellido", field: "Apellido" },
//       { title: "Usuario", field: "Usuario" },
//       {
//         title: "Estado",
//         field: "Estado",
//         lookup: { 1: "Activo", 2: "Inactivo" }
//       },
//       {
//         title: <i className="fas fa-trash-alt"></i>,
//         field: "birthCity",
//         lookup: {
//           34: (
//             <button
//               className=" btn btn-danger"
//               value="1x"
//               onClick={e => console.log(e.target.value)}
//             >
//               <i className="fas fa-trash-alt" defaultValue="1"></i>
//             </button>
//           ),
//           63: "Şanlıurfa"
//         }
//       }
//     ],
//     data: [
//       // {ID:21537555, Nombre: "Eduardo José", Apellido: "Quispe Huancahari", Usuario: 1987, birthCity: 63 },
//       // {
//       //   name: "Zerya Betül",
//       //   surname: "Baran",
//       //   birthYear: 2017,
//       //   birthCity: 34
//       // },
//       // {
//       //   name: "Zerya Betül",
//       //   surname: "Baran",
//       //   birthYear: 2017,
//       //   birthCity: 34
//       // }
//     ]
//   });

//   useEffect(() => {
//     if (colums !== undefined && cursos !== undefined) {
      
//       // guardarData(cursos);
//       setState({
//         columns: colums,
//         data: tabla
//       });
//     }
    
    
//   }, []);

//   useEffect(() => {
//     if (colums !== undefined && dataProfe !== undefined) {
//       // guardarData(cursos);
//       setState({
//         columns: colums,
//         data: dataProfe
//       });
//     }

//   }, [dataProfe])

//   useEffect(() => {
//     if (colums !== undefined && dataEstudiante !== undefined) {
//       setState({
//         columns: colums,
//         data: dataEstudiante
//       });
//     }
//   }, [dataEstudiante])

//   useEffect(() => {
//     console.log(dataCursoProfe)

//     if (colums !== undefined && dataCursoProfe !== undefined) {
//       setState({
//         columns: colums,
//         data: dataCursoProfe
//       });
//     }
//   }, [dataCursoProfe])

//   return (
//     <React.Fragment>
//       <MaterialTable
//         title=" "
//         columns={state.columns}
//         data={state.data}
//       />
//     </React.Fragment>
//   );
// }

// export default (MaterialTableDemo);

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import ReactDatatable from "@ashvin27/react-datatable";
// import { seleccionarFila} from "../../../helpers/functions";
import $ from "jquery";
import shortid from 'shortid'


class MaterialTableDemo extends Component {
  constructor(props) {
    super(props);
    this.columns = this.props.colums;
    // this.columns = [
    //   ...this.columns,
    //   {
    //     key: "action",
    //     text: "Action",
    //     className: "action",
    //     width: 100,
    //     align: "left",
    //     sortable: false,
    //     cell: record => {
    //       return (
    //         <Fragment>
    //           <button
    //             className="btn btn-primary btn-sm"
    //             onClick={() => this.editRecord(record)}
    //           >
    //             <i className="fa fa-edit"></i>
    //           </button>
    //           <button
    //             className="btn btn-danger btn-sm"
    //             onClick={() => this.deleteRecord(record)}
    //           >
    //             <i className="fa fa-trash"></i>
    //           </button>
    //           <button
    //             className="btn btn-success btn-sm"
    //             onClick={() => this.deleteRecord(record)}
    //           >
    //             <i className="fa fa-eye"></i>
    //           </button>
    //         </Fragment>
    //       );
    //     }
    //   }
    // ];
    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      button: {
        excel: true,
        print: true,
        extra: true
      }
    };

    this.state = {
      records: this.props.tabla,
      id: null
    };
    this.extraButtons = [];
  }

  editRecord(record) {
    this.props.redireccionarEditar(record.id);
  }

  deleteRecord(record) {
    console.log("Delete Record", record);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps.tabla)
    if (this.state.records !== prevProps.tabla) {
      this.setState({
        records: this.props.tabla
      });
    }
  }
  componentDidMount(){

  }



  render() {
      

    return (
      <div>
        <ReactDatatable
          key={shortid.generate()}
          onClick={e => console.log(e)}
          config={this.config}
          records={this.state.records}
          columns={this.columns}
          extraButtons={this.extraButtons}
        />
      </div>
    );
  }
}

export default MaterialTableDemo;