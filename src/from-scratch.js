const makeIdFunc = () => {
  let id = 0
  return () => {
    id++
    return id
  }
};

const makePasswordChecker = (correctPassword) => {
  let attempts = 0
  return (guess) => {
    if (attempts >= 3) {
      return "Account locked"
    } if (guess === correctPassword) {
      attempts = 0
      return true
    } if (attempts >= 3) {
      return "Account locked"
    } else {
      attempts++;
      return false
    }
  }
}

const makeMultiplier = (multiplier) => {
  return (numbers) => {
    return numbers.map((number) => number * multiplier)
  }
};

const makeFilterByLength = (maxLength) => {
  return (strings) => {
    return strings.filter(string => string.length <= maxLength)
  }
};

const makeGradeTracker = () => {
  let grades = 
};

const makeShoppingList = () => {

};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
