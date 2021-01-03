import React from 'react';
import styles from 'styles/OfferSection.module.scss';

const OfferSection = () => (
  <section id="offer" className={styles.offer}>
    <h2 className={styles.title}>W czym mogę ci pomóc</h2>
    <div className={styles.offer__inner}>
      <div className={styles.options}>
        <div className={styles.header}>
          <h3 className={styles.header__title}>Programy treningowe</h3>
        </div>
        <div className={styles.option}>
          <img
            className={styles.option__icon}
            src="images/woman.png"
            alt="logo"
            width="62px"
            height="62px"
          />
          <h3 className={styles.option__title}>Treningi personalne</h3>
          <p className={styles.option__desc}>
            Treningi personalne na terenie Białegostoku sesja treningowa trwa 60
            minut.
          </p>
        </div>
        <div className={styles.option}>
          <img
            className={styles.option__icon}
            src="images/diet.png"
            alt="logo"
            width="62px"
            height="62px"
          />
          <h3 className={styles.option__title}>PLANY ŻYWIENIOWE</h3>
          <p className={styles.option__desc}>
            Indywidualnie dobrana, zbilansowana dieta ułożona pod konkretne
            zapotrzebowanie podopiecznego.
          </p>
        </div>
        <div className={styles.option}>
          <img
            className={styles.option__icon}
            src="images/online.png"
            alt="logo"
            width="62px"
            height="62px"
          />
          <h3 className={styles.option__title}>Prowadzenie Online</h3>
          <p className={styles.option__desc}>
            Prowadzenie online , stały kontakt i analiza progresu.
          </p>
        </div>
        <div className={styles.option}>
          <img
            className={styles.option__icon}
            src="images/dumbbell.png"
            alt="logo"
            width="62px"
            height="62px"
          />
          <h3 className={styles.option__title}>PLANY TRENINGOWE</h3>
          <p className={styles.option__desc}>
            Indywidualny plan treningowy w zależności od twoich celów
            sylwetkowych i treningowych
          </p>
        </div>
        <div className={styles.option}>
          <img
            className={styles.option__icon}
            src="images/brain.png"
            alt="logo"
            width="62px"
            height="62px"
          />
          <h3 className={styles.option__title}>Trening Mentalny</h3>
          <p className={styles.option__desc}>
            Przygotowanie mentalne do osiągnięcia założonych celów
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OfferSection;
