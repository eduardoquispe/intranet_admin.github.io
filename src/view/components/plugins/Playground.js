import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';

export default function Playground({label,data,setDatosNuevoCurso,datosNuevoCurso}) {
    const defaultProps = {
        options: data,
        getOptionLabel: option => option.title,
    };

    // const flatProps = {
    //     options: top100Films.map(option => option.title),
    // };

    const changeFunction = e => {
         setDatosNuevoCurso({
           ...datosNuevoCurso,
           nombreCursoTaller: e.target.textContent
         });
    }

    // const [value, setValue] = React.useState(null);
    return (
      <div style={{ width: 250 }}>
        <Autocomplete
          {...defaultProps}
          id="include-input-in-list"
          includeInputInList
          onChange={changeFunction}
          renderInput={params => (
            <TextField {...params} label={label} margin="normal" fullWidth />
          )}
        />
      </div>
    );
}

const top100Films = [
];