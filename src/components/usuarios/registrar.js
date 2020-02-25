import React, { Component } from "react";
import { Formulario } from "../shared";

export default class Registrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cita: this.iniciarStateCita(),
      errors: {},
      cargando: false,
      fields: FIELDS_CITA
    };
    this.iniciarStateCita();
  }
  iniciarStateCita(){
    const names = FIELDS_CITA.map(field => field.name);
    const cita = {};
    names.forEach(name=>{
      cita[name] = '';
    })
    return cita;
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setStateCita(name, value);
  };

  setStateCita(name, value) {
    const cita = this.state.cita;
    this.setState({ cita: { ...cita, [name]: value } });
  }

  formValue() {
    return this.state.cita;
  }

  validateFormulario() {
    let errors = {};
    const object = this.formValue();
    let isValido = true;
    
    Object.keys(object).forEach((name) =>{
        if(object[name] ===""){
         isValido = false;
          errors[name]=`${name} es requerido`;
        }
    });

    this.setState({ errors });
    return isValido;
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
    const formValue = this.formValue();
    const keys = Object.keys(formValue);
    keys.forEach(key => {
      this.setStateCita(key, "");
    });
  }
  setStateFieldsSelect(name, values){
    const {fields } = this.state;

    const filedsNew = fields.map(field=>{
      if(field.type === 'select' && field.name === name){
          return {...field, values}
      }
      return field;
    });
    this.setState({fields: filedsNew})
  }

  render() {
    const values = this.formValue();
    const { errors, cargando, fields } = this.state;
    const props = {
      fields,
      onSubmit: this.onSubmit,
      onChange: this.onChange,
      values,
      errors,
      cargando,
    };
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Registrar</h5>
        </div>
        <div className="card-body">
          <Formulario {...props} />
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
  },
  {
    name: "Tipo",
    type: "select",
    values: ["Familiar", "General"]
  },
];
