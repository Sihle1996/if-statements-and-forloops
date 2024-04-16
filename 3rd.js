const prompt = require('prompt-sync')();

for(index = 0; index < 3; index++){

let name = prompt('enter your name ');

let firstMark = parseInt(prompt('first mark: '));
let secondMark = parseInt(prompt('second mark: '));
let thirdMark = parseInt(prompt('third mark: '));



let sum = firstMark + secondMark + thirdMark;
 average = parseInt(sum/3);

 let status = '';

if(average < 50){
    status = 'You failed';
}else if(average > 50 && average < 75){
    status = 'You passed'
}else if(average > 75 && average < 100){
    status = 'you passed distiction';
}else if(average > 100){
     status = 'invalid average';
}else{
    status = 'invalid input';
}

console.log(status);
}

