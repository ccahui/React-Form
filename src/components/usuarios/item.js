import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const cita = this.props.cita;
        return (
            <tr>
              <td>
                {cita.dni}
              </td>
              <td>{cita.apellido}</td>
              <td>{cita.nombre}</td>
              <td>{cita.fecha}</td>
              <td>{cita.hora}</td>
              <td className="text-center">
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
        )
    }
}
