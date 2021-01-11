import React, { Component } from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //This could be functional component, doesn't have to be class
  UNSAFE_componentWillUpdate() {
    console.log("[OrderSummary.js] WillUpdate!");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            {" "}
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Auxx>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          {" "}
          <strong>Total Price: {this.props.price.toFixed(2)}$</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxx>
    );
  }
}

export default OrderSummary;
