import React, { useState } from 'react';
import styles from 'styles/Form.module.scss';
import FormInput from 'components/FormInput/FormInput';
import { useMutation } from 'react-query';
import encode from 'helpers/encode';
import useForm from 'hooks/useForm';

const initialState = {
  name: '',
  email: '',
  message: '',
};
const Form = () => {
  const { values, setValues, handleChange } = useForm(initialState);

  const sendMessage = () => {
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    });
  };

  const { mutate, isSuccess, isLoading, isError, reset } = useMutation(
    sendMessage,
    {
      enabled: false,
      onSettled: () => {
        setTimeout(() => {
          reset();
        }, 3000);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ values });
    setValues(initialState);
  };

  return (
    <form
      className={styles.form}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <div className={styles.form__message}>
        {isError && <p className={styles.form__error}>Błąd wysyłania</p>}
        {isSuccess && <p>Wiadomość wysłana</p>}
      </div>
      <FormInput
        handleChange={(e) => handleChange(e)}
        label="Imię"
        type="text"
        name="name"
        required
        value={values.name}
        aria-label="name"
      />
      <FormInput
        handleChange={(e) => handleChange(e)}
        label="Email"
        type="email"
        name="email"
        required
        value={values.email}
        aria-label="email"
      />
      <FormInput
        handleChange={(e) => handleChange(e)}
        label="Wiadomość"
        type="text"
        name="message"
        required
        value={values.message}
        textarea
        aria-label="message"
      />
      <button disabled={isLoading} className={styles.form__btn} type="submit">
        {`${isLoading ? 'Wysyłanie' : 'Wyślij'}`}
      </button>
    </form>
  );
};
export default Form;
