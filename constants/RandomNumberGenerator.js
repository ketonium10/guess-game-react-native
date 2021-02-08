//Function to generate random number
export default generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateNumber(min, max, exclude);
  }
  return rndNum;
};
