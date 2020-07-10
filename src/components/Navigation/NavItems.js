import React from 'react';
import styles from './NavItems.module.css';
import NavItem from './NavItem';

const NavItems = () => (
  <ul className={styles.NavigationItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">CheckOut</NavItem>
  </ul>
);

export default NavItems;
