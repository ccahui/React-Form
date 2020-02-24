import React, { Component } from "react";

export class ButtonLoading extends Component {
  cargando() {
    const { cargando } = this.props;
    if (cargando) return <i className="fa fa-spinner fa-spin"></i>;
    else return null;
  }
  render() {
    return (
      <button type="submit" className="btn btn-primary btn-block">
        {this.cargando()} Registrar
      </button>
    );
  }
}

ButtonLoading.defaultProps = {
  cargando: false
};
