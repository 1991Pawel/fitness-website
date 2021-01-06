import { useState } from 'react';

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, setValues, handleChange };
};

export default useForm;
