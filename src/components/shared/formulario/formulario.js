import React, { Component } from "react";
import { ButtonLoading } from "./button";
import { InputForm } from "./inputs";
import { SelectForm } from "./selected";

export class Formulario extends Component {
  isFieldValido(name) {
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

    if (!this.isFieldValido(name)) {
      const error = errors[name];
      props["error"] = error;
    }
    
    switch (field.type) {
      case "select":
        return <SelectForm {...props} />;
      default:
        return <InputForm {...props} />;
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
