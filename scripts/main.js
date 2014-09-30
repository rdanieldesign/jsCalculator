var num1 = document.getElementById('num_one');
var num2 = document.getElementById('num_two');


var calculate = function(num1, num2) {
    var answer = num1 + num2;
    document.getElementById('answer').innerHTML = answer.toString();
}

document.getElementById('calculateBtn').onclick = function(){
    var box1 = Number(num1.value);
    var box2 = Number(num2.value);
    calculate(box1, box2);
};