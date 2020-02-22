import React, { Component } from "react";
import Item from "./item";
import { citaArrayProptype } from "../../models/proptypes";
export default class Listado extends Component {
  render() {
    const citas = this.props.citas;
    if (citas.length > 0)
      return <Citas citas={citas} eliminar={this.props.eliminar} />;
    else return <ListaVacia />;
  }
}

function ListaVacia(props) {
  return <h5 className="text-danger text-center">No hay citas</h5>;
}

function Citas(props) {
  const citas = props.citas;

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
            <Item key={cita.id} cita={cita} eliminar={props.eliminar} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Listado.propTypes = {
  citas: citaArrayProptype
}

Citas.propTypes = {
  citas: citaArrayProptype
}
