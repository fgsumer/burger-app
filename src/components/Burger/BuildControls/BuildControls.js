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
    <p>
      Current Price € : <strong>{props.price.toFixed(2)}</strong>{' '}
    </p>
    {controls.map(ctrl => (
      <BuildControl
        toAddIngredient={() => props.ingredientAdded(ctrl.type)}
        toDecudeIngredient={() => props.ingredientsDeducted(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disabledInfo={props.disabledInfo[ctrl.type]}
      />
    ))}
    <button className={styles.OrderButton} disabled={!props.purchasable} onClick={props.purchased}>
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
