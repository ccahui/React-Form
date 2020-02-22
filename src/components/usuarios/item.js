import React, { Component } from 'react'
import { citaProptype } from '../../models/proptypes';

export default class Item extends Component {
    eliminar=(id) => {
      this.props.eliminar(id);
    }
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
                <button className="btn btn-danger" onClick={()=>this.eliminar(cita.id)}>Eliminar</button>
              </td>
            </tr>
        )
    }
}

Item.propType = {
  cita:citaProptype
}
