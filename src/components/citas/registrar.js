import React, { Component } from "react";

export default class Registrar extends Component {
  render() {
    return (
      <div class="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Registrar Citas</h5>
        </div>

        <div className="card-body">
          <form className="">
            <div className="form-group">
              <label htmlFor="citaDni">citaDNI</label>
              <input type="text" className="form-control" id="citaDni" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="citaNombre">Nombre</label>
                <input className="form-control" id="citaNombre" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="citaApellido">Apellido</label>
                <input className="form-control" id="citaApellido" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Cita
            </button>
          </form>
        </div>
      </div>
    );
  }
}
