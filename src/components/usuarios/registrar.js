import React, { Component } from "react";
import moment from "moment";
export default class Registrar extends Component {
  constructor(props) {
    super(props);

    const fecha = moment().format("YYYY-MM-DD");
    const hora = moment().format("HH:mm");

    this.state = {
      dni: "62295428",
      nombre: "Test",
      apellido: "Example",
      fecha,
      hora
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const cita = { ...this.state };
    this.props.registrarCita(cita);
    this.resetForm();
  };

  resetForm() {
    const keys = Object.keys(this.state);
    keys.map(key => {
      this.setState({ [key]: "" });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Registrar Usuario</h5>
        </div>

        <div className="card-body">
          <form className="" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="dni">DNI</label>
              <input
                type="text"
                className="form-control"
                id="dni"
                name="dni"
                onChange={this.onChange}
                required
                value={this.state.dni}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="nombre">Nombre</label>
                <input
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="apellido">Apellido</label>
                <input
                  className="form-control"
                  id="apellido"
                  name="apellido"
                  value={this.state.apellido}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>{" "}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="fecha">Fecha</label>
                <input
                  className="form-control"
                  id="fecha"
                  type="date"
                  name="fecha"
                  value={this.state.fecha}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="dia">Hora</label>
                <input
                  className="form-control"
                  id="dia"
                  type="time"
                  name="hora"
                  value={this.state.hora}
                  onChange={this.onChange}
                  required
                />
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
