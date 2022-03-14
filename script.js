//  Задание 1

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

//  Задание 2

function selectFromInterval(array, firstValue, secondValue) {
  const isValid = Array.isArray(array) && array.every( (item) => typeof item === 'number' );
  const result = array.filter( (el) => el <= firstValue && el >= secondValue );

  if (!isValid) {
      throw new Error('Ошибка!');
  };  
  return result;
}

//  Задание 3

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

