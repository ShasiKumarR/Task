//simple js program
let a=10;
console.log(a==='10');
let v=3;
let c=5;
let b=v+a+c;
console.log(b);

if(b>=18){
    console.log("Eligible");
}else {
    console.log("Not Eligible");
}      //Output: Not Eligible

//check vowels
let letter= 'a';
switch(letter){
    case 'a':
        console.log("Vowel");
        break;
    case 'e':
        console.log("Vowel");
        break;
    case 'i':
        console.log("Vowel");
        break;
    case 'o':
        console.log("Vowel");
        break;
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}  //Output: Vowel

//odd or even
let a=10;
if(a%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}
//positive or negative
let b=-1;
if(b>0){
    console.log("Positive");
}else{
    console.log("Negative");
}
//grade
let a=prompt('Enter the Mark: ');
if(a>=95){
    console.log("Grade: O");
}else if(a>=90){
    console.log("Grade: A+");
}else if(a>=80){
    console.log("Grade: A");
}else if(a>=70){
    console.log("Grade: B+");
}else if(a>=60){
    console.log("Grade: B");
}else if(a>=50){
    console.log("Grade: C");
}else{
    console.log("Fail");
}


//tables
let num=10;
for(let i=1;i<=num;i++){
    console.log("5 * ", i ," = ", (5*i));
}

//one to fifty
let i,x=0;
for(i=1;i<=50;i++){
 x=x+i
}
console.log(x);

//reverse number

for(i=20;i>=0;i--){
    console.log(i);
}


//pattern printing

for(i=0;i<=5;i++){
  
    console.log("*".repeat(i));
  }

//even from 0 to 100

let z=100;
for(i=0;i<=z;i++){
  if(i%2==0){
    console.log(i);
  }
}


//odd from 0 to 100

for(i=0;i<=z;i++){
  if(i%2 != 0){
    console.log(i);
  }
}

//Function
let a=prompt();
console.log("Let's begin");

for(i=0;i<a;i++){
    let b=prompt();
    let c=prompt();
    func(b,c);
}

function func(name,place){
  console.log("My name is",name,"and I'm from",place);
}
