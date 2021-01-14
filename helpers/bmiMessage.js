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
export default bmiMessage;
