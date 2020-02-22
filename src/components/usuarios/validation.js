import React, { Component } from "react";

export default class ErrorValidation extends Component {
  render() {
    const errors = this.props.errors;
    return (
      <div className="text-danger">
        {Object.entries(errors).map(([name, value], index) => {
          return  <ErrorItem key={index} name={name} value = {value}/>;
        })}
      </div>
    );
  }
}
function ErrorItem(props) {
  return (
    <div>
      <b className="text-capitalize">{props.name}</b>: {props.value}
    </div>
  );
}
