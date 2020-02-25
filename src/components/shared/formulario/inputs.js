import React, { Component } from "react";
import { inputProptype, inputInvalidateProptype } from "../../models/formulario";

export class InputForm extends Component {
  render() {
    const { error } = this.props;
    if(error){
      return <InputFormInvalidate {...this.props}/> 
    }
    else return<InputFormValidate {...this.props}/>;
  }
}

export class InputFormValidate extends Component {
  render() {
    const { field, value, onChange } = this.props;

    return (
      <div className="form-group col">
        <label htmlFor={field.name} className="text-capitalize">
          {field.name}
        </label>
        <input
          type={field.type}
          className="form-control"
          id={field.name}
          name={field.name}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

export class InputFormInvalidate extends Component {
  render() {
    const { field, value, onChange, error } = this.props;

    return (
      <div className="form-group col">
        <label htmlFor={field.name} className="text-capitalize">
          {field.name}
        </label>
        <input
          type={field.type}
          className="form-control is-invalid"
          id={field.name}
          name={field.name}
          onChange={onChange}
          value={value}
        />
        <div className="invalid-feedback text-capitalize">{error}</div>
      </div>
    );
  }
}

InputForm.propTypes = inputProptype;
InputFormValidate.propTypes = inputProptype;
InputFormInvalidate.propTypes = inputInvalidateProptype;