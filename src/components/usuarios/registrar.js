import React, { Component } from "react";
import moment from "moment";

export default class Registrar extends Component {
  constructor(props) {
    super(props);

    const fecha = moment().format("YYYY-MM-DD");
    const hora = moment().format("HH:mm");

    this.state = {
      dni: 'Kristian',
      apellidos: 'Ccahui',
      nombres: 'Kristian',
      fecha,
      hora,
      submit: false,
      inputs: {
        dni: {
          name: 'dni',
        },
        nombres: {
          name:'nombres',
        },
        apellidos: {
          name:'apellidos',
        },
        fecha: {
          name:'fecha',
          type: 'date'
        },
        hora: {
          name: 'hora',
          type:'time'
        }
      },
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  validateFormulario() {
    const { dni, nombre, apellido, fecha, hora } = this.state;
    if (dni && nombre && apellido && fecha && hora) return true;
    return false;
  }
  onSubmit = e => {
    e.preventDefault();
   
     const cita = { ...this.state };
    this.props.registrarCita(cita);
    this.resetForm();
  };

  resetForm() {
    //Obtengo los values de los Inputs en un objeto
    const {inputs, submit, ...cita} = this.state;
    const keys = Object.keys(cita);
    keys.forEach(key => {
         this.setState({ [key]: "" });
    });
  }


  render() {
  const inputs = this.state.inputs;    
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Registrar Usuario</h5>
        </div>

        <div className="card-body">
          <form className="" onSubmit={this.onSubmit}>
            <div className="form-row">
              <InputFormValidate
                input={inputs.dni}
                onChange={this.onChange}
                value={this.state.dni}
              />
            </div>
            <div className="form-row">
              <InputFormValidate
                input={inputs.nombres}
                onChange={this.onChange}
                value={this.state.nombres}
              />
              <InputFormValidate
                input={inputs.apellidos}
                onChange={this.onChange}
                value={this.state.apellidos}
              />
            </div>
            <div className="form-row">
              <InputFormValidate input={inputs.fecha} onChange={this.onChange} value={this.state.fecha}></InputFormValidate>
              <InputFormValidate input={inputs.hora} onChange={this.onChange} value={this.state.hora}></InputFormValidate>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Registrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

class InputFormValidate extends Component {
  render() {
    const input = this.props.input;
    const value = this.props.value;

    const inputError = {
      isValid: true,
      message: "Campo requerido"
    };
    
    return (
      <div className="form-group col">
        <label htmlFor={input.name} className="text-capitalize">
          {input.name}
        </label>
        <input
          type={input.type ? input.type : 'text'}
          className="form-control"
          id={input.name}
          name={input.name}
          onChange={this.props.onChange}
          value={value}
        />
        <div className="invalid-feedback">{inputError.message}</div>
      </div>
    );
  }
}
