import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/shared/header";

import Usuarios from './components/usuarios/index';
import Citas from './components/citas/index';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Usuarios />
        <hr className="my-5"></hr>
        <Citas />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
