/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import styles from 'styles/Calculator.module.scss';
import useForm from 'hooks/useForm';

const initialState = {
  height: '',
  weight: '',
  sex: '',
};

// do 16: wygłodzenie
// od 16 do 17: wychudzenie
// od 17 do 18.5: niedowaga
// od 18.5 do 25: wartość prawidłowa
// od 25 do 30: nadwaga
// od 30 do 35: I stopień otyłości
// od 35 do 40: II stopień otyłości
// powyżej 40: III stopień otyłości

const Calculator = () => {
  const { values, setValues, handleChange } = useForm(initialState);
  const [result, setResult] = useState('');

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

  const bmiMessage = (bmi) => {
    if (bmi < 16.5) {
      return 'Wygłodzenie';
    }
    if (bmi < 17) {
      return 'Wychudzenie';
    }
    if (bmi < 18.5) {
      return 'Niedowaga';
    }
    if (bmi < 25) {
      return 'Norma';
    }
    if (bmi < 30) {
      return 'Nadwaga';
    }
    if (bmi < 35) {
      return 'Otyłość I stopnia';
    }
    if (bmi < 40) {
      return 'Otyłość II stopnia';
    }

    return 'Otyłość III stopnia';
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
                  min="0"
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
                  min="0"
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
              <div className={styles.calc__result}>
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
