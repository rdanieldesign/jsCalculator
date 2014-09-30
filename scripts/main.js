var num1 = document.getElementById('num_one');
var num2 = document.getElementById('num_two');
var answer = document.getElementById('answer');
var button = document.getElementById('calculateBtn');

var calculate = function(x, y) {
    var sum = x + y;
    answer.innerHTML = sum.toString();
}

button.onclick = function(){
    var box1 = Number(num1.value);
    var box2 = Number(num2.value);
    calculate(box1, box2);
};