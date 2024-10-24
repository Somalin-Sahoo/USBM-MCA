//For Loop:  
        //syntax: For(initialization; condition;increment/Drecrement){
        //Code to be executed
    // }


    //Ex1:
      //print the number b/w 1 to 5
//         for (let i= 0; i<5; i++){
//           console.log(i);  //0,1,2,3,4
//         }

// //Ex2:
// //print 5 to 1
//  for(let i =5; i>=1;i--){
//     console.log(i);  //5,4,3,2,1,0

//  }

 //Task-1
 //Generate random numbers and add them upto 5 times
//   let totalSum = 0;

// for (let i = 0; i < 5; i++) {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     console.log(`Random Number: ${randomNumber}`);
//     totalSum += randomNumber;

//   }
   
  // let sum = 0;
  // for (let i = 0; i <= 5; i++) {
  //   let random = Math.floor(Math.random() * 10);
  //    let result = sum + random ;
  //    console.log(`the random sum result is ${result}`)
  // }


  //Nested Loop
      //  for(let i= 0; i <= 5 ; i++){
      //   for(let j =1; j <= 2; j++){
      //     console.log(j);
      //   }
      //   console.log(i);  
      //  }
       
      //example
      //pattern  printing
      for(let i =1; i <= 5; i++){
        let pattern ="";
        for(let j = 1; j <= i; j++){
          pattern += "*";
        }
        console.log(pattern);
      }

