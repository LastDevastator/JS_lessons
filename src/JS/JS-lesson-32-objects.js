const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
    },
  makeTest: function () {
  console.log('test');
  }

}

console.log(options)

// delete options.colors;

// console.log(options)

for (let key in options) {

  
    if (typeof (options[key]) === 'object') {
    
      for (let i in options[key]) { 

       console.log(`Словарь ${[key]} Свойство ${i}, значение ${options[key][i]}`);   
      }

    } else if (typeof (options[key]) === 'function'){

      console.log(`it's function , значение : ${options[key]}`);   

    } else {
      
    console.log(`Свойство ${key}, значение ${options[key]}`);
 
   } 

  


}

// // console.log(options['colors']['border']);

// console.log(Object.keys(options));
// console.log(Object.keys(options).length);
// options.makeTest();

// // деструктуризация

// const { border, bg } = options.colors;
// console.log(border, bg)