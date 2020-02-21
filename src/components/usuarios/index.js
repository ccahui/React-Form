import React, { Component } from "react";
import Registrar from "./registrar";
import Listado from "./listado";

export default class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: CITAS
    };
  }
  generarId() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  registrarCita = (data) => {
    const citas = this.state.citas.slice();

    const id = this.generarId();
    const cita = { id, ...data };
    console.log(cita);
    citas.push(cita);
    this.setState({
      citas
    }); 
  };

  cancelarCita = id => {
    const data = this.state.citas;
    const citas = data.filter(cita => cita.id !== id);
    this.setState({
      citas
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <div className="col-md-7 col-xl-6">
            <Registrar registrarCita={this.registrarCita} />
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col">
            <Listado citas={this.state.citas} />
          </div>
        </div>
      </div>
    );
  }
}
const CITAS = [
  {
    id: '1',
    nombre: "Kristian",
    apellido: "Cahui",
    dni: "85122132",
    fecha: '25-02-20',
    hora: '9:30 am'
  },
  {
    id: '2',
    nombre: "Juan",
    apellido: "Jose",
    dni: "99122132",
    fecha: '28-02-20',
    hora: '10:30 am'
  },
  {
    id: '3',
    nombre: "Kristian",
    apellido: "Cahui",
    dni: "05122132",
    fecha: '29-02-20',
    hora: '7:30 am'
  }
];
