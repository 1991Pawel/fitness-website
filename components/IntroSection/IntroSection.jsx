import React from 'react';
import styles from 'styles/IntroSection.module.scss';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const container = {
    hidden: { y: '100%', opacity: 1 },
    show: {
      y: '-100%',
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
  };

  const item = {
    hidden: { y: '100%' },
    show: {
      y: '0%',
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const content = {
    hidden: { opacity: 0, y: '20%' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
      },
    },
  };

  return (
    <div id="intro" className={styles.section__wrapper}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.overlay}
      />
      <motion.section
        initial="hidden"
        animate="show"
        variants={item}
        className={styles.intro}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={content}
          className={styles.intro__inner}
        >
          <h1 className={styles.title}>
            Trener
            <span className={styles.title__special}>Monika Korzeniecka</span>
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
        </motion.div>
      </motion.section>
    </div>
  );
};
export default IntroSection;
