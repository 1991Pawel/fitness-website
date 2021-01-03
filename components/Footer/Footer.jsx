import React from 'react';
import styles from 'components/Footer/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__inner}>
      <div className={styles.logo}>
        <img className={styles.logo__img} src="/logo.svg" alt="" />
      </div>
      <div className={styles.social}>
        <h3 className={styles.social__title}>Portale społecznościowe</h3>
        <div className={styles.social__inner}>
          <a
            className={styles.social__link}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/monika_korzeniecka/"
          >
            <img
              className={styles.social__img}
              src="/instagram.svg"
              alt="facebook icon"
              width="62px"
              height="62px"
            />
          </a>
          <a
            className={styles.social__link}
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Korzeniecka.Monika"
            width="62px"
            height="62px"
          >
            <img
              className={styles.social__img}
              src="/facebook.svg"
              alt="facebook icon"
              width="62px"
              height="62px"
            />
          </a>
          <a
            className={styles.social__link}
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/user/moniczkaxd1995"
          >
            <img
              className={styles.social__img}
              src="/youtube.svg"
              alt="facebook icon"
              width="62px"
              height="62px"
            />
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        <a target="_blank" rel="noreferrer" href="http://pavdev.pl">
          © 2021 P.L All Rights Reserved
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
