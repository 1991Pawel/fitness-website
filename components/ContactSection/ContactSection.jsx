import React from 'react';
import styles from 'styles/ContactSection.module.scss';
import Form from 'components/Form/Form';

const ContactSection = () => (
  <section id="contact" className={styles.contact}>
    <h2 className={styles.title}>Masz jakieś pytania ?</h2>
    <div className={styles.contact__inner}>
      <Form />
    </div>
  </section>
);

export default ContactSection;
