import React from 'react';
import styles from 'styles/IntroSection.module.scss';

const IntroSection = () => (
  <section id="intro" className={styles.intro}>
    <div className={styles.intro__inner}>
      <h1 className={styles.title}>
        Trener<span className={styles.title__special}>Monika Korzeniecka</span>
      </h1>
      <p className={styles.desc}>
        Wyznacz swoje cele, a ja pomogę Ci je zrealizować.
      </p>
      <a href="#about" className={styles.btn}>
        Poznaj mnie
      </a>
      <div className={styles.footer}>
        <span className={styles.footer__text}>Trening</span>
        <span className={styles.footer__text}>Dieta</span>
        <span className={styles.footer__text}>Motywacja</span>
      </div>
    </div>
  </section>
);
export default IntroSection;
