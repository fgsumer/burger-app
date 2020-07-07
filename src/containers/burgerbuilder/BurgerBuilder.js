import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import styles from './Burgerbuilder.module.css';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 3,
      cheese: 0,
      meat: 1,
    },
  };
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />

        <div>Burger Manager</div>
      </>
    );
  }
}

export default BurgerBuilder;
