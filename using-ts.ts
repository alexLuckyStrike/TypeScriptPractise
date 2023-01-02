const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;



function add(num1:number, num2:number,showResult:boolean) {
if(typeof num1 !== 'number' || typeof num2 !== 'number'){
 throw new Error('Incorrect input!!!');
}

if(showResult){
console.log('getSum:',num1 + num2)
}
else{
  return num1 + num2;
}
}


const firstArg = 10;
const secondArg = 20; 
const printResult = true;

const result = add(firstArg,secondArg,printResult);
console.log('result:',result);

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
