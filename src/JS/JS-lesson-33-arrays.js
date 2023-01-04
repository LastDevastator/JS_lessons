const arr = [1, 2, 34, 5, 6, 78, 88];

console.log(arr);

arr.push(4); // пушит значение в конец
arr.pop(); // удаляет последнее значение

console.log(arr);
console.log(arr.length);

// for (let i = 0; i < arr.length; i ++){

//   console.log(`Номер элемента ${i}, значение  ${arr[i]}`)

// }

arr.forEach(function (item, i) {
  console.log(`no ${i}, value ${item} `);
})
  
