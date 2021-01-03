import React from 'react';
import styles from 'styles/Navigation.module.scss';
import PropTypes from 'prop-types';

const links = [
  {
    title: 'Strona główna',
    className: styles.link,
    href: '#intro',
  },
  {
    title: 'O mnie',
    className: styles.link,
    href: '#about',
  },
  {
    title: 'Oferta',
    className: styles.link,
    href: '#offer',
  },
  {
    title: 'Kontakt',
    className: styles.link,
    href: '#contact',
  },
];

const Navigation = ({ open, setOpen }) => (
  <nav className={styles.nav}>
    <ul className={`${open ? styles.menu__active : styles.menu}`}>
      {links.map(({ className, title, href }) => (
        <li key={title} className={styles.item}>
          <a onClick={() => setOpen(false)} href={href} className={className}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Navigation;
