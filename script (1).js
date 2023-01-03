/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';


// function showFirstMessage(text) {
  
//   console.log(text);
// };


// showFirstMessage('hi asshole');

// // Код возьмите из предыдущего домашнего задания

////////////////////////////////

// function sayHello(name) {

//   return ("Привет, " + name);

// }

////////////////////////////////

// function returnNeighboringNumbers(number) {

//   return [number - 1, number, number + 1];
   
// }

// console.log(returnNeighboringNumbers(6));





// function getMathResult(number, step) {
  
//   let result = '';

//   if (typeof step === 'string' || step <1 ) {
//     step = 1;
//   }

//   for (let i = 0; i <= step; i++){

    
//     if (i == 1 ) {
//       result += number.toString();
//     }
//     if (i > 1 && i < step+1){
//       result += "---" + number * i;
//     }
    
//   }

//   return result;
// }

// console.log(getMathResult(12,'3'))


// const text = 'Hello motherfuckers!'

// let cuted = text.substring(18,0)

// console.log(cuted)

