import React, { Component } from "react";

class Output extends Component {
  toFeet(n) {
    let realFeet = (n * 0.3937) / 12;
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches;
  }
  render() {
    let height = this.toFeet(this.props.data.height);
    let weight = this.props.data.weight;
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
        <h3>Feet: {height}</h3>
        <h3>Kilogram: {weight}</h3>
        <h3>Body Mass Index: {bmi}</h3>
        <h3 className={bmiClass === "Obese" ? "danger" : ""}>
          {bmiClass}{" "}
          {bmiClass === "Obese" ? (
            <a href="someproduct.com">What can I do?</a>
          ) : (
            ""
          )}
        </h3>
      </div>
    );
  }
}

export default Output;
