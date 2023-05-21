let field = document.getElementById("numberField");
let a,b,sum;

function append(value) {
  field.value += value;
  a = field.value;
}






function add(a,a) {
  sum = a + a;
  field.value = sum;
}
function sub(a,b) {
  return a - b;
}
function mult(a,b) {
  return a * b;
}
function divide(a,b) {
  return a / b;
}


function reset() {
  field.value = "";
}
