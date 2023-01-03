

function fib(iter) {

  if (!Number.isInteger(iter)) { return (""); }
  if (iter === 0) { return (""); }
  if (iter === 1) { return ("0"); }

  let previousNumber = 0;
  let currentNumber = 1;
  let nextNumber;
  let result = '';
  
  result = "0 1"

  for (let i = 2; i < iter; i++){

    nextNumber = previousNumber + currentNumber;
    
    result = result + " " + nextNumber;
      
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  
  }

  return result;

}

console.log(fib(5.4));
console.log(typeof(fib(0)))