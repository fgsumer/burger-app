import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.8,
  cheese: 1,
  meat: 1.4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    // to update without mutating
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    // const priceAddition = INGREDIENT_PRICES[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice + priceAddition;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    // to return nothing if number of ıngredient is 0
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    // to update without mutating
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    // const priceAddition = INGREDIENT_PRICES[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice + priceAddition;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; // gives true or false {salad : true, meat:false ...}
    }
    return (
      <>
        <Burger ingredients={this.state.ingredients} /> {/* Burger's image */}
        <BuildControls
          price={this.state.totalPrice}
          ingredientsDeducted={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabledInfo={disabledInfo}
        />{' '}
        {/* Burger's ingredients control */}
      </>
    );
  }
}

export default BurgerBuilder;
