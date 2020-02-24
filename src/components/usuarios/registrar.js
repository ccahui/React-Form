import React, { Component } from "react";
import moment from "moment";
import { InputForm, InputFormInvalidate, ButtonLoading } from "../shared";

export default class Registrar extends Component {
  constructor(props) {
    super(props);

    const fecha = moment().format("YYYY-MM-DD");
    const hora = moment().format("HH:mm");

    this.state = {
      dni: "Kristian",
      apellidos: "Ccahui",
      nombres: "Kristian",
      fecha,
      hora,
      errors: {},
      cargando: false
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  formValue() {
    const {errors, cargando, ...values } = this.state;
    return values;
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
      this.setState({ [key]: "" });
    });
  }

  isValid(name) {
    const errors = this.state.errors;
    if (errors[name]) {
      return false;
    }
    return true;
  }

  renderInput(field) {
    const name = field.name; 
    const props = {
      field,
      onChange: this.onChange,
      value: this.state[name]
    };
    if (this.isValid(name)) {
      return (
        <InputForm
          { ...props}
        />
      );
    } else {
      const error = this.state.errors[name];
      props['error'] = error;
      return (
        <InputFormInvalidate
          { ...props}
        />
      );
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Registrar Usuario</h5>
        </div>

        <div className="card-body">
          <form className="" onSubmit={this.onSubmit}>
              {formCitaFields.map((field, index) => {
                return (<div key={index} className="form-row">{this.renderInput(field)} </div>);
              })}
            <ButtonLoading cargando={this.state.cargando} />
          </form>
        </div>
      </div>
    );
  }
}

const formCitaFields = [
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
