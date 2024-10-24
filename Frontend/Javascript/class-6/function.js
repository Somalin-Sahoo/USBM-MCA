//Function
//Function is a reusable block of code to perform some certain task.

//Declaration
//function sayName(){
      //code Name
//}

//Write a function to print your name.

      //    function printName(){
      //       console.log(`My name is Payal`);
      //    }  
      //    printName();         //invokation or function call


//Arguments and parameters
//   function printName(name){                      //name= parameter
//     console.log(`My name is ${name}`);
// }
// printName("payal");                              //payal=argument


// function printName(name,age,city){                      
//     console.log(`My name is ${name,age,city}`);
// }
// printName("payal,21,bbsr");   


//Return keyword
//stop the execution Process.
//return the value to the caller.


// console.log(printName("payal",21,"bbsr"));       //declaration
// function printName(name,age,city){
//     return`my name ${name},${age},${city}`;      //stop

// }
// console.log(printName("payal",21,"bbsr"));       //Invocation or function call
// console.log()
// let output = printName("payal",21,"bbsr");
// console.log(output);                                //output=traditional way to declare function.


//Arrow function
//syntax
//     console.log(printName("payal"));  //Before
//    const printName = (name) => {                               // => fat arrow
//   return `My name is ${name}`;
//    }
//    console.log(printName("payal"));    //After

   //Example : 
// const greeting = (name,hour)=>{
//         if (hour < 12){
//             return `Good Morning ${name}`;
//       }else if (hour < 18){
//             return `Good Afternoon ${name}`;    
//       }else  {
//             return `Good Evening ${name}`;      
//       }
// }
//     const output = greeting("payal",14);
//     console.log(output);


    //Example :Simple calculator using function and switch statement.


//         const calculator = (a,b,operator) =>{
//             switch (operator){
//             case "+":
//             return a + b;
//             break ;
//             case "-":
//             return a - b;
//             break ;
//             case "*":
//             return a * b;
//             break ;
//             case "/":
//             return a / b;
//             break ;
              
//             default:
//             return "Invalid Operator";
//             break;
//       }
      
//        const output = calculator (10,5,"+");
//        console.log(output);

// }

// //Example -3 :

// const add = (a,b) => console.log(add (5, 7));
// add()

// const add = (a,b) =>{
//   return
// } 
// console.log(add(5,7));

//T0 do BMI calculator
  
// const BMI = (weight,height) =>{
//       return weight
// }
// //rest parameter
//  const printNumber = (...numer) =>{
//       return Number;
//  }
//  let output = printNumber(1,2,3,4,5,6,7,8);
//  console.log(output);


//CallBack Function:
   //when a function is called as an argument is an another function.

   //Syntax
         
//    function say(num,callback){
//       console.log`(My name is $ (name))`;
//       return callback;
//    }
//      function hello(){
//       return "Hello";
//      }


//todo : Make a user authentication system 





















