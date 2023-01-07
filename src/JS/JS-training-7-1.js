'use strict'

function calculateVolumeAndArea(sideLenght) {

  if (Number.isInteger(sideLenght) && sideLenght >0) {
    
    let result = '';
    result = `Объем куба: ${sideLenght * sideLenght * sideLenght}, площадь всей поверхности: ${(sideLenght*sideLenght)*6}`
    return result;

  } else {
   
    return ("При вычислении произошла ошибка");
  }

}


console.log(calculateVolumeAndArea(15));