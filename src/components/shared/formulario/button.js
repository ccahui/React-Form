import React, { Component } from "react";

export class ButtonLoading extends Component {
  cargando() {
    const { cargando, value } = this.props;
    if (cargando)
      return (
        <>
          <i className="fa fa-spinner fa-spin"></i> {value}
        </>
      );
    else return value;
  }

  render() {
    return (
      <button type="submit" className="btn btn-primary btn-block">
        {this.cargando()}
      </button>
    );
  }
}


ButtonLoading.defaultProps = {
  cargando: false,
  value: "Guardar"
};
