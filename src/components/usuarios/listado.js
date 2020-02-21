import React, { Component } from "react";
import Item from "./item";
export default class Listado extends Component {
  render() {
    const citas = this.props.citas;

    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Apellidos</th>
              <th>Nombres</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {citas.map(cita => (
              <Item key={cita.id} cita={cita} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
