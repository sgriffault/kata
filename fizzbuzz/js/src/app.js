// Impement fizzbuzz logic
function fizzbuzz(number) {
  if(number % 15 == 0){
    return "fizzbuzz";
  }else if(number % 3 == 0){
    return "fizz";
  }else if(number % 5 == 0){
    return "buzz";
  }else {
    return number;
  }  
}

// Implement the wrapper so we can count from 0 to STOP.
function main(STOP) {
   for(let i=0; i<=STOP; i++) {
    console.log(fizzbuzz(i));
   }
}

main(20);
