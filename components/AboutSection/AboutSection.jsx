import React from 'react';
import styles from 'styles/AboutSection.module.scss';

const AboutSection = () => (
  <section id="about" className={styles.about}>
    <div className={styles.about__inner}>
      <article className={styles.content}>
        <h2 className={styles.title}>
          Kim <span className={styles.extra}>jestem?</span>
        </h2>
        <p className={styles.desc}>
          Jestem aktywną
          <span className={styles.extra}> zawodniczką bikini fitness</span>,
          moja wiedza i doświadczenie pomogą Ci osiągnąć zamierzone cele. Od lat
          udoskonalam nie tylko własną sylwetkę, ale pomagam również innym
          osiągnąć szczyt sprawności fizycznej, zbudować muskularną sylwetkę czy{' '}
          <span className={styles.extra}>zgubić zbędne kilogramy.</span>
          Moi podopieczni przechodzą ze mną przemiany, które prowadzą do ich
          <span className={styles.extra}> wymarzonej figury</span> i poprawy
          jakości życia
        </p>
      </article>
      <div className={styles.footer}>
        <div className={styles.footer__inner}>
          <h3 className={styles.footer__heading}>Nagrody</h3>
          <span className={styles.footer__prize}>2 Miejsce Sopot 2018</span>
          <span className={styles.footer__prize}>
            2 Miejsce Burneika Sport Festiwal
          </span>
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles.image__inner}>
          <img
            className={styles.image__img}
            src="/images/about-img.png"
            alt="monika korzeniecka"
          />
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
