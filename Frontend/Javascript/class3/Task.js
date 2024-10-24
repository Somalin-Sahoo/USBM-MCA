//Task-1
//Given total_bill, discount_start_price if you satisfy the condition print discount_start_price Discount
//Available Otherwise print No Discount
  

// let total_bill = 750;
// if (total_bill >  500) {
//     console.log("Discount Available");
// } else {
//     console.log("No Discount");
// }

 
//Task-2
// let age = 45;
// if (age >= 60) {
//     console.log ("Adult and Senior");
//     } else if (age >= 18)
//        console.log("Adult"); 
//     else{
//         console.log("Minor");
//     }


//Task-3
//Check if (male) and then check (22+) then he can able to marry 
 
//Check the vowel (a,e,i,o,u)

// let char = "a";

//switch (char){
//     case "a":
//         console.log("It's vowel");
//         break; //to break the flow
//     case "e":
//        console.log("It's vowel"); 
//        break;
    //    case "i":
    //      console.log("It's vowel"); 
    //      break;
    //    case "o":
    //         console.log("It's vowel"); 
    //         break;
        //   case "u":
        //       console.log("It's vowel"); 
        //       break;

             

        // default:
        //    console.log("It's not a vowel");
        //       break;

        //     }


      // r1 module :

       //console.log(readline);
       const readline = require("readline");

       const r1 = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
       });

       let item1 , item2 , item4;


       r1.question("Enter item1",(input1) => {
        item1 = praseInt(input1);
           
        if (item % 2 !== 0)console.log("This is Odd:", item1);
 });


 /// comment 