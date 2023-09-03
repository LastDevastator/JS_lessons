function factorial(num) {

  if (num == 1) {
    return 1
  }
    
  result = num * factorial(num-1) 
  return result

}


console.log(factorial(5))