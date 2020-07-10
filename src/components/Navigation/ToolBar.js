import React from 'react';
import styles from './ToolBar.module.css';
import Logo from '../Layout/Logo';
import NavItems from './NavItems';
import DrawerToggle from './DrawerToggle';

const ToolBar = props => (
  <header className={styles.ToolBar}>
    <DrawerToggle clicked={props.clicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default ToolBar;
