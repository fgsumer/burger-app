import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import styles from './Burger.module.css';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients) // gives array of keys [salad, meat, bacon,cheese]
    .map(igKey => {
      return [...Array(props.ingredients[igKey])] // create arrays for per ingredient according to number of it
        .map((_, index) => <BurgerIngredient key={igKey + index} type={igKey} />);
    })
    // console.log(transformedIngredients);
    .reduce((arr, el) => {
      // to flatten the arrays and see whether there is no ingredients
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
