import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import nextId from "react-id-generator";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    background: "#fff",
    fontSize: "verdana"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect(props) {
  
  const {data,label,setDatosNuevoCurso,datosNuevoCurso} = props

  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const inputLabel = React.useRef("");
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
    switch (label) {
      case "Tipo de especializacion":
        setDatosNuevoCurso({
          ...datosNuevoCurso,
          tipoEspecializacion: event.target.value
        });
        break;
      case "Tipo de programa":
        setDatosNuevoCurso({
          ...datosNuevoCurso,
          programa: event.target.value
        });
        break;
      case "Tiempo":
        setDatosNuevoCurso({
          ...datosNuevoCurso,
          mesesDias: event.target.value
        });
      default:
        break;
    }
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map(title => (
            <MenuItem key={nextId()} value={title.title}>
              {title.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
