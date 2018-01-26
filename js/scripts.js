// // // var sentence = 2;
// // // console.log(sentence);
// // // {
// // //   {
// // //     {
// // //
// // //     }
// // //   }
// // // }
// // // //Child inherits from parents, does not know kids.
// // // //purpose of variable is to point to something else.
// // //
// // // let firstNumber = 22; ///declaration and defenition
// // // var first; //declaration
// // // firstNumber = 22; //defenition
// // // var secondNumber = 11;
// // //
// // // //let doesnt hoist and only works locally (between brackets)
// // //
// // // {
// // // const truth = "Ep8 was.....TERRIBLE....";
// // // console.log(truth);
// // // }
// // // const truth = "ep8 was ok";
// // //
// // //
// // //
// // // console.log(truth);
// // //
// // // let rightNow = new Date();
// // // console.log(rightNow)
// // //
// // // var string = "lala";
// // //
// // // var newString = new String ("lala");
// // //
// // // console.log(string);
// // // console.log(newString.toUpperCase());
// // //
// // // var myArray = ["Hello World",22, true, {},null];
// // //
// // //
// // // var myObject = {
// // //
// // //   myString: "Hello World"
// // //   magicNumber: 42
// // //
// // // };
// // //
// // // let helloMessage = alert("Hey, there! My book is only $1....");
// // //
// // //
// // // let promptMessage = prompt("Put in Password....", "Password")
// // // console.log (promptMessage);
// //
// // var firstName = prompt("first name:");
// // var lastName= prompt("last name:");
// // console.log(firstName);
// // alert(lastName);
// //
// // let birthday = prompt("what's your Birthday?","Answer in folowing format: 01/01/1900");
// // confirm(new Date(birthday));
// //
// // //This is my gh-pages branch
// //
// //
// // const bestNumber = 42
// //
// // console.log(!bestNumber)
// //
// // console.log(!firstName && !lastName);
// //
// // var string = "1";
// // var number = 1;
// // console.log(string == number);
// // //true
// //
// //  let obj1 = {name:"Ryker"};
// //  let obj2 = {name:"Ryker"};
// //
// //  console.log(obj1 === obj2);
// //
// //  var Ball = "Ball";
// //  var Ball2 = new String("Ball");
// //
// // console.log(Ball === Ball2);
// // console.log(Ball == Ball2);
// //
// // var primitive = "hellow wrold";
// // var stringObject = new String("hellow wrold");
// // console.log(primitive == stringObject);
// // console.log(primitive === stringObject);
// // console.log(typeof(primitive));
// // console.log(typeof(stringObject));
// //
// // console.log(12 % 7);
// //
// // console.log(isNaN(number1)); //is number1 not a number
// //
// // var number1 = 12;
// // var number2 = 780;
// // number1 += 12; //this changes the value of number1
// //
// //
// // var step1 = prompt("Enter a number", "10");
// // var step2 = prompt("Enter a number", "10");
// // number1 = new Number(number1);
// //
// // console.log(step1+step2);
// //
// //
// //
//
//
//
//
//
//
//
//
//
//
// const bestMovie = [];
// if(typeof(bestMovie) === "string")  {
//   alert("yay, its a string");
// }
//   else if(typeof(bestMovie) === "number") {
// alert("You gave me a number");
// } else { alert("aint no string or number");
//
// }
//
// switch(typeof(bestMovie)) {
//   case "string":
//     alert('yay, its a string');
//     break;
//   case 'number':
//     alert('it a number');
//     break;
//   case 'boolean':
//     alert('it a boolean');
//     break;
//   case 'array':
//     alert('it a array');
//     break;
//   case 'object':
//     alert('it a object');
//     break;
//   default:
//     alert('its a subject');
//     break;
//
//
// }
//
//
// bestMovie != undefined ? alert('it exists') : alert('it dont exist');
//
//
//


// if (userAge<= 18)
//   alert(sorry youngster);
//   else if (userAge>18)



// switch (userAge)
// {
//   case (userAge<=17):
//     alert(sorry youngster);
//   break;
//
//   case (userAge<=79):
//     prompt('do you like star wars?');
//   case (userAge)
// }

var userAge = confirm('Are you over 18?');

if(userAge == true) {
  underEighty = confirm('are you under 80 years old');
  if(underEighty){
    var starWars confirm('Do you like star wars?');
  }
    if(starWars) {
      alert('you rock');
    }
  } else {
    confirm('Do you like prunes?')
  }
