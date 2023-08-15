const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: false
};

function isOpen(prop) {
    let answer = '';
    !prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {

    if (((parseInt(fDish.price)) + parseInt((sDish.price))) < parseInt(average)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1],
 parseInt(restorantData.averageLunchPrice)));

function transferWaitors(data) {
  const copy= {}
  copy.waitors = []

  for (let key in data.waitors){
  
    copy.waitors[key] = data.waitors[key]

  }

copy.waitors[0] = {name: 'Mike', age: 32};
  
  return (copy)

}

transferWaitors(restorantData)