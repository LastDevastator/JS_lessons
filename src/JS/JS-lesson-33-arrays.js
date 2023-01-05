const arr = [1, 2, 34, 50, 6, 78, 88];

arr.sort // сортирует как строки

console.log(arr)

arr.sort(compareNum) // скармиливаем мутную колбэк функцию - работает ...
console.log(arr)

function compareNum(a, b) {
  
  return a - b;

}


// console.log(arr);

// arr.push(4); // пушит значение в конец
// arr.pop(); // удаляет последнее значение

// console.log(arr);
// console.log(arr.length);

// // for (let i = 0; i < arr.length; i ++){

// //   console.log(`Номер элемента ${i}, значение  ${arr[i]}`)

// // }

// arr.forEach(function (item, i) {
//   console.log(`no ${i}, value ${item} `);
// })
  
// const str = "asd,sdfw,swdfs,sdf,ss"
// const products = str.split(',')

// console.log(products)

// console.log(products.join(' ; '))

// console.log(products.sort())