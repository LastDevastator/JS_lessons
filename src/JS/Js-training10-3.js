'use strict'



const someString = 'This is some strange string';

function reverse(str) {


  if (typeof (str) != 'string') {
    console.log('Ошибка')
  } else {

    let initialValue = String(str);
    let result = [];

    for (let i = initialValue.length - 1; i >= 0; i--) {

      result += initialValue[i];

    }

    return result;

  }
}



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}









// console.log (reverse(someString))