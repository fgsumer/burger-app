import React from 'react';
import Logo from '../Layout/Logo';
import NavItems from './NavItems';
import BackDrop from '../UI/BackDrop';
import styles from './SideDrawer.module.css';

const SideDrawer = props => {
  let attachedStyles = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }
  return (
    <>
      <BackDrop show={props.open} modalclosed={props.modalclosed} />
      <div className={attachedStyles.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <nav>
          <NavItems></NavItems>
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
