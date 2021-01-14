/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import styles from 'styles/Calculator.module.scss';
import useForm from 'hooks/useForm';
import bmiMessage from 'helpers/bmiMessage';

const initialState = {
  height: '',
  weight: '',
  sex: '',
};

const Calculator = () => {
  const { values, setValues, handleChange } = useForm(initialState);
  const [result, setResult] = useState('');
  const resultEl = useRef(null);

  useEffect(() => {
    if (result) {
      resultEl.current.scrollIntoView();
    }
  }, [result]);

  const bmiCheck = () => {
    const { height, weight } = values;
    const bmi = weight / ((height / 100) * (height / 100));
    setResult(bmi.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bmiCheck(values);
    setValues(initialState);
  };

  return (
    <Layout>
      <section className={styles.calculator}>
        <h1 className={styles.calculator__title}>Kalkulatory Dietetyczne</h1>
        <div className={styles.calculator__inner}>
          {/* <div className={styles.calc}>
            <h2>Kalkulator BMR</h2>
            <p>Oblicz dzienne zapotrzebowanie na kalorie</p>
          </div> */}

          <div className={styles.calc}>
            <h2>Kalkulator BMI</h2>
            <p>Oblicz czy twoja waga jest prawidłowa.</p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <p className={styles.form__desc}>Wybież Płeć</p>
              <div className={styles.checkbox}>
                <label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="radio"
                    name="sex"
                    value="male"
                    checked={values.sex === 'male'}
                    required
                  />
                  <span>Mężczyzna</span>
                </label>
              </div>
              <div className={styles.checkbox}>
                <label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="radio"
                    name="sex"
                    value="female"
                    checked={values.sex === 'female'}
                    required
                  />
                  <span>Kobieta</span>
                </label>
              </div>
              <label htmlFor="height">
                <p className={styles.form__desc}>Wzrost w cm</p>
                <input
                  className={styles.form__input}
                  onChange={(e) => handleChange(e)}
                  id="height"
                  type="number"
                  min="100"
                  max="250"
                  name="height"
                  value={values.height}
                  required
                />
              </label>
              <label htmlFor="weight">
                <p className={styles.form__desc}>Waga w kg</p>
                <input
                  className={styles.form__input}
                  onChange={(e) => handleChange(e)}
                  id="weight"
                  type="number"
                  min="40"
                  max="250"
                  name="weight"
                  value={values.weight}
                  required
                />
              </label>

              <button className={styles.form__btn} type="submit">
                Oblicz
              </button>
            </form>
            {result && (
              <div ref={resultEl} className={styles.calc__result}>
                <p className={styles.calc__desc}>
                  <span className={styles.calc__extra}>
                    Twoje BMI wynosi {result}
                  </span>
                  <span>{bmiMessage(result)}</span>
                </p>
                <p className={styles.calc__star}>
                  *uzyskany wynik nie zawsze odzwierciedla rzeczywistość.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculator;
