import React from 'react';
import styles from './Modal.module.css';
import BackDrop from './BackDrop';

const Modal = props => (
  <>
    <BackDrop show={props.show} modalclosed={props.modalclosed} />
    {/* when the modal is shown, BackDrop is shown */}
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </>
);

export default Modal;
