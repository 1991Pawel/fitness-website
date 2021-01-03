import React from 'react';
import styles from 'components/BurgerButton/BurgerButton.module.scss';
import PropTypes from 'prop-types';

const BurgerButton = ({ setOpen, open }) => (
  <button
    onClick={() => setOpen((prev) => !prev)}
    type="button"
    aria-label="menu burger"
    className={`${open ? styles.hamburger__active : styles.hamburger}`}
  >
    <span className={styles.hamburger__box}>
      <span className={styles.hamburger__inner} />
    </span>
  </button>
);

BurgerButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default BurgerButton;
