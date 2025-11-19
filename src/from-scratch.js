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
  let list = []
  return {
    addGrade(grade) {
      if (grade <= 100 && grade >= 0) {
        list.push(grade)
        return true
      } else {
        return false
      }
    },
    getAverage() {
      if (list.length === 0) return 0
      return list.reduce((acc, curr) => (acc += curr), 0) / list.length
    },
  }
};

const makeShoppingList = () => {
  // create a list outside of the closure scope
  let list = []
  return {
    // write methods to edit a shopping list
    // method definiton -> the closure
    getItems() {
      return [...list]
    },
    addItem(item) {
      list.push(item)
      console.log(`${item} successfully added! Now you have ${list.length} item(s).`)
      return list.length
    },
    removeItem(item) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
          list.splice(i, 1)
          console.log(`${item} successfully removed. You now have ${list.length} item(s).`)
          return true
        }
      }
      console.log(`${item} not found.`)
      return false
    }
  }
};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
