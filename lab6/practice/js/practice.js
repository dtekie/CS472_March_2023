// function getMax() {
//     let max = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//       if (arguments[i] > max) {
//         max = arguments[i];
//       }
//     }
//     return max;
//   }
// const max = getMax(23,76,34,890,123,9,-2,0);
// console.log(max);

// const multiply = (num1, num2) => num1 * num2;
// console.log(multiply(2,19));

// //note: if an instance variable is private it has to be declared with prefix # and
// //that will be part of the name.
// //when we are using a constructor, we have to declare it as instance variable first
// //the we initialize it
// //however, when it is not a private instance variable, we just construct it without
// //declaration

// (function () {
//     console.log('This function is immediately invoked!');
//   })();
// /*

// In this code above, we define an anonymous function expression that takes
// no parameters and logs a message to the console. We wrap this function expression
// in parentheses, which is necessary because otherwise, JavaScript will interpret it
// as a function declaration rather than an expression.

// Then, we immediately invoke the function expression by adding another pair of
// parentheses after it. This causes the function to execute as soon as the code is run,
// without the need for a separate function call.

// The primary benefit of using an immediately invoked function expression is
// that it allows you to create a self-contained block of code that can't be accessed
// or modified by other code in the same scope. This can be useful for defining
// variables, functions, or other code that you only want to use within a
// specific context or to prevent naming collisions with other variables or functions.
// */
// const invoice ={
//   invoice_number:10,
//   item:{
//     itemNumer: 1001,
//     itemName: "item1",
//   },
//   printItem(){
//     console.log(this.invoice_number);
//   }
// };
// invoice.invoice_number=11;
// invoice.invoiceQuantity = 29;
//   invoice.printItem();

//   invoice.printAll= function() {

//     console.log(invoice.invoice_number + " " + invoice.itemName);
//   }
//   // invoice.sayGoodbye = function() {
//   //   console.log(`Goodbye, my name is ${this.name}`);
//   // };
//   console.log(invoice);
// const invoice = {
//   terms: {
//   dueDays: 30,
//   description:{ desct1: "Net due 30 days",
//   desc2: "Daniel"

// //   }
// //   }
// // create an object
// const invoice = {};
// // add a property
// invoice.taxRate = 0.0875;
// // add a method
// invoice.getSalesTax = function(subtotal) {
// return (subtotal * this.taxRate);
// }

// class ClassWithPrivateMethod {
//   #privateMethod() {
//   return 'hello world';
//   }
//   getPrivateMessage() {
//   return this.#privateMethod();
//   }
//   }
//   const obj = new ClassWithPrivateMethod();

//   console.log(obj.getPrivateMessage());

// count = 7;
// console.log((function incr(n)  {
//   var count = 0;

// count += n;
// return count;
// // function reset(){
// // count = 0;
// } )(4))

// // console.log(incr(4));
// // console.log(incr(2));

// const x = function (n)  {
//   return n;
// }
// console.log(x(10));
// window.d

// $(document).ready(function () {
//   $("button").click(function () {
//     $("h1").hide("slow");
//     $("h2").show("fast");
//     $("img").slideUp();
//     $("#p").html("Daniel");
//     $("#p").css("text-align", "right");
//     $("#p").hide();
//     $("button").css(
//       {"background-color":"blue",
//         "color":"white"});
//         $("span.English").toggle();

//   });
  
// });

let x = 5;
console.log(x++);
console.log(++x);


$("p:first").remove();
$("div>p")