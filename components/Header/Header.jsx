import React, { useState } from 'react';
import styles from 'styles/Header.module.scss';
import Navigation from 'components/Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <a href="/">
          <img className={styles.logo} src="/logo.svg" alt="logo" />
        </a>
        <BurgerButton open={open} setOpen={setOpen} />
        <Navigation open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};
export default Header;
