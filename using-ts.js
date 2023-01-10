var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2, showResult, phrase) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Incorrect input!!!');
    }
    if (phrase) {
        console.log("testPhraseString:", resultPhrase);
    }
    if (showResult) {
        console.log('getSum:', num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var firstArg;
firstArg = 10;
var secondArg = 20;
var printResult = true;
var resultPhrase = "i want to be a changed man";
var result = add(firstArg, secondArg, printResult, resultPhrase);
console.log('result:', result);
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
