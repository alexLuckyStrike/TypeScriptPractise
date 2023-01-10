const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;



function add(num1:number, num2:number,showResult:boolean,phrase:string) {
if(typeof num1 !== 'number' || typeof num2 !== 'number'){
 throw new Error('Incorrect input!!!');
}

if(phrase){
  console.log("testPhraseString:",resultPhrase)
}

if(showResult){
console.log('getSum:',num1 + num2)
}
else{
  return num1 + num2;
}
}

let firstArg : number;
firstArg = 10;

const secondArg:number = 20; 
const printResult:boolean = true;
const resultPhrase:string = "i want to be a changed man";

const result = add(firstArg,secondArg,printResult,resultPhrase);
console.log('result:',result);

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
