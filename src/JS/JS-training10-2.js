'use strict'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

  let result = 'Семья состоит из:'

  if (Object.keys(arr) == 0) {
    
    return ('Семья пуста');

  } else {

    ;

    for (let i in arr) {

      result += ` ${arr[i]}`;
 
    }

  }
  return result
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {

  for (let i in arr) {
    
    console.log(arr[i].toLowerCase())
    
  }

}

standardizeStrings(favoriteCities)