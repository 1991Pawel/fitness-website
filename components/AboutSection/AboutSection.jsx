import React, { useState, useEffect } from 'react';
import styles from 'styles/AboutSection.module.scss';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [shouldShow, setShouldShow] = useState(false);

  const options = {
    rootMargin: '-150px',
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldShow(entry.isIntersecting);
        }
      });
    }, options);

    const handleScroll = () => {
      const footer = document.getElementById('about');
      observer.observe(footer);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__inner}>
        <article className={styles.content}>
          <motion.h2
            animate={shouldShow ? { opacity: 1, y: '0%' } : null}
            initial={{ opacity: 0, y: '10%' }}
            transition={{ duration: 1 }}
            className={styles.title}
          >
            Kim <span className={styles.extra}>jestem?</span>
          </motion.h2>
          <motion.p
            animate={shouldShow ? { opacity: 1, y: '0%' } : null}
            initial={{ opacity: 0, y: '10%' }}
            transition={{ duration: 1, delay: 0.3 }}
            className={styles.desc}
          >
            Nazywam się <span className={styles.extra}>Monika Korzeniecka</span>{' '}
            jestem trenerem kobiet oraz nauczycielką wychowania fizycznego. Mama
            dwójki dziewczynek. W 2018 roku miałam przygodę jako{' '}
            <span className={styles.extra}>zawodniczka bikini fitness</span>.
            Moja wiedza i doświadczenie pomogą Ci osiągnąć zamierzone cele. Od
            lat udoskonalam nie tylko własną sylwetkę, ale pomagam również innym
            osiągnąć szczyt sprawności fizycznej, zbudować muskularną sylwetkę
            czy zgubić zbędne kilogramy. Moi podopieczni przechodzą ze mną
            przemiany, które prowadzą do ich{' '}
            <span className={styles.extra}>wymarzonej figury</span> i poprawy
            jakości życia.
          </motion.p>
        </article>
        <motion.div
          animate={shouldShow ? { opacity: 1, y: '0%' } : null}
          initial={{ opacity: 0, y: '10%' }}
          transition={{ duration: 1, delay: 0.6 }}
          className={styles.footer}
        >
          <div className={styles.footer__inner}>
            <h3 className={styles.footer__heading}>Nagrody</h3>
            <span className={styles.footer__prize}>2 Miejsce Sopot 2018</span>
            <span className={styles.footer__prize}>
              2 Miejsce Burneika Sport Festiwal
            </span>
          </div>
        </motion.div>
        <motion.div
          animate={shouldShow ? { opacity: 1, y: '0%', scale: 1 } : null}
          initial={{ opacity: 0, y: '-10%', scale: 0.9 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.image}
        >
          <div className={styles.image__inner}>
            <img
              className={styles.image__img}
              src="/images/about-img.png"
              alt="monika korzeniecka"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
