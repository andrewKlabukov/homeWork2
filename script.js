// Задание 1

function makeObjectDeepCopy(obj) {
  const copyObj = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {

    if (obj.hasOwnProperty(key)) {

      if (typeof obj[key] === "object" && obj[key] !== null) {
        copyObj[key] = makeObjectDeepCopy(obj[key]);
      } else {
        copyObj[key] = obj[key];
      }
    }
  }
  return copyObj;
}

// Задание 2

function selectFromInterval(array, firstArg, secondArg) {
  const isValid = Array.isArray(array) && array.every((el) => typeof el === 'number') && typeof firstArg === 'number' && typeof secondArg === 'number';
  const newArr = [];
  const result = [];

  if (firstArg < secondArg && isValid) {
    for (let i = firstArg; i <= secondArg; i++) {
      newArr.push(i);
    }
  } 
  else if (firstArg > secondArg && isValid) {
    for (let i = secondArg; i <= firstArg; i++) {
      newArr.push(i);
    }
  } else {
    throw new Error('Ошибка!');
  }

  newArr.forEach(el => {
    if (array.includes(el)) {
      result.push(el);
    }
  })
  return result;
}

// Задание 3

const myIterable = {
  from: 1,
  to: 5
};

myIterable[Symbol.iterator] = function() { 
  const isValid = (this.from === '' || this.from > this.to || typeof this.from !== 'number' || typeof this.to !== 'number' );

  if (isValid) {
    throw new Error('Ошибка!');
  } else {
    return {
      current: this.from,
      last: this.to,

      next() {

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    }
  }
}

