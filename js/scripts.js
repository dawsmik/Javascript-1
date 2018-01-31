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

// var userAge = confirm('Are you over 18?');
//
// if(userAge == true) {
//   underEighty = confirm('are you under 80 years old');
//   if(underEighty)
//     var likeStarWars confirm('Do you like star wars?');
//     if(likeStarWars) {
//       alert('you rock');
//     }
//   } else {
//     confirm('Do you like prunes?')
//   }

// var arr = ['thingOne', 22, true, {}, []];
// console.log(arr[0], arr[3]);

// var myInfo = ["Game of Thrones",7,false,1993,];
// // console.log(myInfo);
// // console.log(myInfo.length);
// // console.log(typeof(myInfo));
// // console.log(Array.isArray(myInfo));
// var bestTeacher = prompt('who is the best teacher?', 'Damon');
// myInfo.unshift(bestTeacher);
//
//
// console.log(myInfo);



//Homework:

// var yourName = prompt("What's yo name?","Your name here.");
// var lastName = prompt("What's yo last name?","Your name here.");
// var userName = prompt("What's yo user name?","Your username here.");
//
// var colorPick = prompt("What yo favorite color?", "red, orange, yellow, green, blue, pink, purple, black, white, grey");
//
// colorPick = colorPick.toLowerCase();

// switch(colorPick){
//   case "red":
//   case "orange":
//       alert(yourName + ", You picked orange or red, your're probably dead.");
//   //ES6 string interpolation
//       alert(`Hey there, ${yourName} it looks like you love ${colorPick}.`);
//       break;
//   case "yellow":
//       alert(yourName + ", You picked yellow, your're probably mellow.");
//        break;
//   case "green":
//         alert(yourName + ", You picked green, your're probably mean.");
//         break;
//   case "blue":
//         alert(yourName + ", You picked blue, who knew?");
//         break;
//   case "pink":
//         alert(yourName + ", You picked pink, gosh you stink.");
//         break;
//   case "grey":
//         alert(yourName + ", You picked grey, get out of my way.");
//         break;
//   case "purple":
//         alert(yourName + ", You picked purple, your're probably durple.");
//         break;
//   case "black":
//         alert(yourName + ", You picked black, gosh you're wack.");
//         break;
//   case "white":
//         alert(yourName + ", You picked white, your're probably tight.");
//         break;
//   default:
//         alert(yourName + ", You picked wrong, go fire up the bong.");
//         }
//
//
// var arr = [1,2,3,4,5];
//
// if(arr.index)

favMovie1 = ["Pulp Fiction", "Samuel"];
favMovie2 = ["Die Hard", "Bruce"];
favMovie3 = ["Seven", "Bradd"];
favMovie4 = ["Tombstone", "Val"];
favMovie5 = ["Gladiator", "Joaquin"];

myFavoriteMovies = [];

myFavoriteMovies.push(favMovie1, favMovie2, favMovie3, favMovie4, favMovie5);

//console.log(myFavoriteMovies);

//movieTitles = myFavoriteMovies[]

var favAndLeastfav = [];
favAndLeastfav.push(favMovie1[0], favMovie5[0]);


// let i = 0;
//
// while (i < myFavoriteMovies.length) {
//   console.log(myFavoriteMovies[i]);
//   i++;

//
// }



for(var i = 0; i < myFavoriteMovies.length; i++) {

  if(myFavoriteMovies[i][0] === "Tombstone") {
    alert(`${myFavoriteMovies[i][0]} is my favorite with ${myFavoriteMovies[i][1]}.`);
  }

  console.log("Tombstone");

}
