import React from 'react';
import Button from '../UI/Button';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}
    </li>
  ));
  return (
    <>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingredients : </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>In total € {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
