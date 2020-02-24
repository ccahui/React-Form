import React, { Component } from "react";

export class SelectForm extends Component {
  render() {
    const { error } = this.props;
    if (error) {
      return <SelectFormInvalidate {...this.props} />;
    } else return <SelectFormValido {...this.props} />;
  }
}

export class SelectFormValido extends Component {
  render() {
    const { field, value, onChange } = this.props;

    return (
      <div className="form-group col">
        <label htmlFor={field.name} className="text-capitalize">
          {field.name}
        </label>
        <select
          value={value}
          className="form-control"
          name={field.name}
          onChange={onChange}
        >
          <Options values={field.values}/>
        </select>
      </div>
    );
  }
}

export class SelectFormInvalidate extends Component {
  render() {
    const { field, value, onChange, error } = this.props;

    return (
      <div className="form-group col">
        <label htmlFor={field.name} className="text-capitalize">
          {field.name}
        </label>
        <select
          value={value}
          className="custom-select is-invalid"
          name={field.name}
          onChange={onChange}
        >
          <Options values={field.values}/>
        </select>
        <div className="invalid-feedback text-capitalize">{error}</div>
      </div>
    );
  }
}
function Options(props) {
  
  const values = props.values;
  return (
    <>
      <option value="">-- Seleccionar---</option>
      {values.map((option, index) => {
        return (
          <option key={index} value={option} className="text-capitalize">
            {option}
          </option>
        );
      })}
    </>
  );
}
