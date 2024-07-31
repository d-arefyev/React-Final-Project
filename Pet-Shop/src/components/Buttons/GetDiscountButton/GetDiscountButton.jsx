import React, { useState } from 'react';
import styles from './GetDiscountButton.module.css';

function GetDiscountButton({ onClick }) {
  const [state, setState] = useState('normal');

  const handleClick = (e) => {
    setState('added');
    if (onClick) {
      onClick(e);
    }
    setTimeout(() => setState('normal'), 1000);
  };

  return (
    <button
      className={`${styles.getDiscountButton} ${state === 'added' ? styles.addedState : ''}`}
      onClick={handleClick}
    >
      {state === 'added' ? 'Request Submitted' : 'Get a discount'}
    </button>
  );
}

export default GetDiscountButton;
