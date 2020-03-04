import React from 'react';

const style = {
    header: {
        background: "#28314A",
        color: "#fff",
        fontWeight: "500",
        fontSize: "1.1rem",
        fontFamily: `"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
    },
    body:{
        texto: {
            color: "gray"
        }
    }
}

const Curso = ({ curso}) => {

    return ( 
        <div className="col-md-4">
            <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header" style={style.header}>{curso.nombre_curso}</div>
                <div className="card-body" style={style.body.texto}>
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer bg-transparent border-success">
                    <button className="btn btn-transparent">Ver</button>
                </div>
            </div>
        </div>
       
     );
}
 
export default Curso;