import React, { Component } from "react";
import Registrar from './registrar';
import Listado from './listado';

export default class Citas extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
            <Registrar />
          </div>
          <div className="col-md-6">
              <Listado />
            </div>
        </div>
      </div>
    );
  }
}
