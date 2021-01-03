import React from 'react';
import styles from 'components/FormInput/FormInput.module.scss';
import PropTypes from 'prop-types';

const FormInput = ({ handleChange, label, textarea, ...otherProps }) => (
  <div className={styles.group}>
    {textarea ? (
      <textarea
        className={styles.textarea}
        onChange={handleChange}
        {...otherProps}
      />
    ) : (
      <input className={styles.input} onChange={handleChange} {...otherProps} />
    )}
    {label && (
      <label
        className={`${
          otherProps.value.length ? styles.label__shrink : styles.label
        }`}
        htmlFor={label}
      >
        {label}
      </label>
    )}
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
};

FormInput.defaultProps = {
  textarea: false,
};

export default FormInput;
