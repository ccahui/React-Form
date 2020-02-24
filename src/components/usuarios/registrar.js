import React, { Component } from "react";
import moment from "moment";
import { Formulario } from "../shared";

export default class Registrar extends Component {
  constructor(props) {
    super(props);

    const fecha = moment().format("YYYY-MM-DD");
    const hora = moment().format("HH:mm");

    this.state = {
      cita: {
        dni: "Kristian",
        apellidos: "Ccahui",
        nombres: "Kristian",
        fecha,
        hora,
      },
      errors: {},
      cargando: false
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setStateCita(name, value);
  };

  setStateCita(name, value){
    const cita = this.state.cita;
    this.setState({ cita: { ...cita, [name]: value}});
  }

  formValue() {
    return this.state.cita;
  }

  validateFormulario() {
    const { dni, nombres, apellidos, fecha, hora } = this.formValue();

    let errors = {};
    

    if (!dni) {
      errors["dni"] = "DNI es requerido";
    }

    if (!nombres) {
      errors["nombres"] = "nombres es requerido";
    }

    if (!apellidos) {
      errors["apellidos"] = "apellidos es requerido";
    }

    if (!fecha) {
      errors["fecha"] = "fecha es requerido";
    }

    if (!hora) {
      errors["hora"] = "hora es requerido";
    }

    this.setState({ errors });
    return dni && nombres && fecha && apellidos && hora;
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.setState({ cargando: true });
    this.setState({ errors: {} });
    setTimeout(() => {
      if (this.validateFormulario()) {
        const data = this.formValue();
        this.props.registrarCita(data);
        this.resetForm();
      }
      this.setState({ cargando: false });
    }, 1000);
  };

  resetForm() {
    const formValue= this.formValue();
    const keys = Object.keys(formValue);
    keys.forEach(key => {
      this.setStateCita(key, "");
    });
  }

  render() {

    const values = this.formValue();
    const {errors, cargando } = this.state;
    const props = {
      fields: FIELDS_CITA,
       onSubmit: this.onSubmit,
       onChange: this.onChange,
       values,
       errors,
      cargando
    }
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Registrar Usuario</h5>
        </div>
        <div className="card-body">
          <Formulario {...props}/>
        </div>
      </div>
    );
  }
}

const FIELDS_CITA = [
  {
    name: "dni",
    type: "text"
  },
  {
    name: "nombres",
    type: "text"
  },
  {
    name: "apellidos",
    type: "text"
  },
  {
    name: "fecha",
    type: "date"
  },
  {
    name: "hora",
    type: "time"
  }
];
