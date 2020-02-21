import React, { Component } from "react";

export default class Registrar extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Registrar Usuario</h5>
        </div>

        <div className="card-body">
          <form className="">
            <div className="form-group">
              <label htmlFor="dni">DNI</label>
              <input type="text" className="form-control" id="dni" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="nombre">Nombre</label>
                <input className="form-control" id="nombre" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="apellido">Apellido</label>
                <input className="form-control" id="apellido" />
              </div>
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
