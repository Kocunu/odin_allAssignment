function start(){
  let input = parseInt(prompt("Enter a Number"));
   
  let check1 = input / 3;
  let check2 = input / 5;
  if (Number.isInteger(check1)&&Number.isInteger(check2)){
    console.log("FizzBuzz");
  }
  else if (Number.isInteger(check1)){
    console.log("Fizz");
  }
  else if (Number.isInteger(check2)){
    console.log("Buzz");
  }
  else
    console.log(input);
}
