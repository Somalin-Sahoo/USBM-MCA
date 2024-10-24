//1.Math. floor()

console.log(Math.floor(4.9));      //4
console.log(Math.floor(-2.5));       //-3


//2.How would you generate a random number between 1 and 100?

const randomNumber = Math.floor (Math.random()*99)+ 1;
console.log(randomNumber); 

const random_number  = Math.round(Math.random()*99) + 1;
console.log(random_number);

//3.What is the purpose of Math.ceil()? Give an example.

console.log(Math.ceil(3.2));     //4
console.log(Math.ceil(-5.097));   //-5
console.log(Math.ceil(6.2345));    //7

//4.Explain how Math.pow(2, 3) works and what the output will be.

console.log(Math.pow(2,3));        //8

//or


console.log(2**3);                 //8


//5.What is the value of Math.PI?

console.log (Math.PI) ;              //3.141592653589793

// TASK-2
//1.Task: Generate a random number between 1 and 100.

let final = 100;
let start = 1; 
let total_number = (final - start + 1);
console.log(random_number);

let random_number2 = Math.floor (Math.random() * total_number + start); 
console.log(random_number2);


//2.Task: Round the number 6.75 down to the nearest integer.

console.log(Math.round(7.98));          //8
console.log(Math.round(-8.766));        //-9

//3.Task: Round the number 9.12 up to the nearest integer.

console.log(Math.ceil(9.12));         //10

//4.Task: Generate a random number between 5 and 27 (inclusive).

let final1 = 27;
let start1 = 5;
let totalNumber=(final1 - start1 + 1);
let random_number1 = Math.floor(Math.random() * total_number + start);
console.log (random_number1);                    //33


//5.Task: Add 5 days to the current date.

let date = new Date();
console.log(date.getDate() + 5);


//6.Task: Get the number of milliseconds between January 1, 2023, and today.
    
   let startdate = new Date(`2023-01-01`);
   let enddate = new Date(`2023-01-`);
   


