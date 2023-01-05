// function copy(mainObj) { // функция клонированяи массива - поверхностное копирование
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {

//   a: 2,
//   b: 5,
//   c: {
//     X: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);


// newNumbers.a = 5

// console.log(numbers)
// console.log(newNumbers)

// const add = {
//   d: 17,
//   e:15
// }

// console.log(Object.assign(numbers, add)) // объединение массивов

// const clone = Object.assign({}, add); // one more copy methhod

// clone.d = 700;

// console.log(add)
// console.log(clone)

// // copy of arrays

// const oldArray = ['a', 'b', 'c'];

// const newArray = oldArray.slice();

// console.log(oldArray);
// console.log(newArray);

// // Spread operators

const video = ['youtube', 'vimeo'],
  blogs = ['fb', 'lj'],
  internet = [...video, ...blogs, 'safary'];

console.log(internet)

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [7, 8, 9];

log(...num);

const arr = ['a', 'b', 'b']; // one more copy method
const nwArr = [...arr];

const q = {
  a: 6,
  b:7
}

const newq = { ...q };

console.log(newq);