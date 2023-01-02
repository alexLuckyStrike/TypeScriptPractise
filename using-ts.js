var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Incorrect input!!!");
  }
  return num1 + num2;
}
var firstArg = "10";
var secondArg = 20;
var result = add(firstArg, secondArg);
console.log("result:", result);
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
