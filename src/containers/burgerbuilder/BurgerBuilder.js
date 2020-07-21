import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler';
import axios from '../../axios-order';

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
    purchasable: false,
    purchasing: false,
    loading: false,
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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: sum > 0, // true or false, if there is one element to purchase it is true
    });
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      // ın realworl app, price is calculated on the sever side
      price: this.state.totalPrice,
      customer: {
        name: 'Zoe De Zummer',
        address: {
          street: 'test street',
          zipCode: 12345,
          country: 'Belgium',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };

    // .json end point is specific to firebase
    axios
      .post('/orders.json', order)
      .then(response => {
        // purchasing: false because if it's true, it shows modal. but we want spinner instead of modal
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        // even if there is a error, I don't want to spin. If it spins, it is a wrong alarm!! as it is not still loading
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; // gives true or false {salad : true, meat:false ...}
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancel={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    } else {
    }
    return (
      <>
        <Modal show={this.state.purchasing} modalclosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} /> {/* Burger's image */}
        <BuildControls
          price={this.state.totalPrice}
          ingredientsDeducted={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          purchased={this.purchaseHandler}
        />{' '}
        {/* Burger's ingredients control */}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
