import React from 'react';
import BurgerLogo from '../../assests/burger-logo.png';
import styles from './Logo.module.css';

const Logo = props => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={BurgerLogo} alt="hamburger logo" />
  </div>
);

export default Logo;
