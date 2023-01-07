'use strict'

const shoppingMallData = {
    shogps: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}



function isBudgetEnough(data) {


  // calculation of general shops square

  let totalSquare = 0

  for (let j in data) {

    if (typeof(data[j]) === 'object') {

      for (let i in data[j]) {

        totalSquare += parseInt(data[j][i].width) * parseInt(data[j][i].length)

      }
    }
  }


  console.log(totalSquare)

  let totalVolume = totalSquare*data.height
  let totalHeatingCost = totalVolume*data.moneyPer1m3

  if (totalHeatingCost > data.budget) {
    return ('Бюджета недостаточно')
  } else {
    return ('Бюджета достаточно')
  }

}

console.log(isBudgetEnough(shoppingMallData))
