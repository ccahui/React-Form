import React, { Component } from "react";
import { ButtonLoading } from "./button";
import { InputForm, InputFormInvalidate } from "./inputs";

export class Formulario extends Component {
  
  isValid(name) {
    const errors = this.props.errors;
    if (errors[name]) {
      return false;
    }
    return true;
  }

  renderInput(field) {
    const name = field.name;
    const { onChange, values, errors } = this.props;
    const props = {
      field,
      onChange,
      value: values[name]
    };
    if (this.isValid(name)) {
      return <InputForm {...props} />;
    } else {
      const error = errors[name];
      props["error"] = error;
      return <InputFormInvalidate {...props} />;
    }
  }

  render() {
    const { fields, onSubmit, cargando } = this.props;
    return (
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => {
          return (
            <div key={index} className="form-row">
              {this.renderInput(field)}
            </div>
          );
        })}
        <ButtonLoading cargando={cargando} />
      </form>
    );
  }
}

