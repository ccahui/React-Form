import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/shared/header";

import Usuarios from './components/usuarios/index';
import "./index.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Usuarios />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
