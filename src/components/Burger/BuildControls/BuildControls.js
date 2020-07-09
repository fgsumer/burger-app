import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
];
const BuildControls = props => (
  <div className={styles.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        toAddIngredient={() => props.ingredientAdded(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}
  </div>
);

export default BuildControls;
