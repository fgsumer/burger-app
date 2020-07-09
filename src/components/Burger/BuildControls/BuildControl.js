import React from 'react';
import styles from './BuildControl.module.css';

const BuildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button
      disabled={props.disabledInfo}
      onClick={props.toDecudeIngredient}
      className={styles.Less}
    >
      Less
    </button>
    <button onClick={props.toAddIngredient} className={styles.More}>
      More
    </button>
  </div>
);

export default BuildControl;
