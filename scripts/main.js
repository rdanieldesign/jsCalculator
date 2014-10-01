//Variables

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var answer = document.getElementById('answer');
var calcButton = document.getElementById('calculate');
var operator = document.getElementById('operator');

var addButton = document.getElementById('addition');
var subButton = document.getElementById('subtract');
var mulButton = document.getElementById('multiply');
var divButton = document.getElementById('divide');
var modButton = document.getElementById('modulo');


//Operator functions

addButton.onclick = function(){
    operator.innerHTML = this.innerHTML;
}

subButton.onclick = function(){
    operator.innerHTML = this.innerHTML;
}

mulButton.onclick = function(){
    operator.innerHTML = this.innerHTML;
}

divButton.onclick = function(){
    operator.innerHTML = this.innerHTML;
}

modButton.onclick = function(){
    operator.innerHTML = this.innerHTML;
}

var addition = function(x, y) {
    var sum = x + y;
    answer.innerHTML = sum.toString();
}

var subtract = function(x, y) {
    var difference = x - y;
    answer.innerHTML = difference.toString();
}

var multiply = function(x, y) {
    var product = x * y;
    answer.innerHTML = product.toString();
}

var divide = function(x, y) {
    var quotient = x / y;
    answer.innerHTML = quotient.toString();
}

var modulo = function(x, y) {
    var remainder = x % y;
    answer.innerHTML = remainder.toString();
}


// Calculate script

calcButton.onclick = function(){
    var box1 = Number(num1.value);
    var box2 = Number(num2.value);
    switch(operator.innerHTML) {
        case "+":
            addition(box1, box2);
            break;
        case "-":
            subtract(box1, box2);
            break;
        case "*":
            multiply(box1, box2);
            break;
        case "/":
            divide(box1, box2);
            break;
        case "%":
            modulo(box1, box2);
            break;
        default:
            addition(box1, box2);
    }
};





// var num1 = document.getElementById('num1');
// var num2 = document.getElementById('num2');
// var answer = document.getElementById('answer');
// var button = document.getElementById('calculate');
//
// var calculate = function(x, y) {
//     var sum = x + y;
//     answer.innerHTML = sum.toString();
// }
//
// button.onclick = function(){
//     var box1 = Number(num1.value);
//     var box2 = Number(num2.value);
//     calculate(box1, box2);
// };