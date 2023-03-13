
// $(document).ready(function(){
    
// $("#puppy").on("click", function(){
//     $("#k").hide();
//     $("#p").show();

// });
// $("#kitty").on("click", function(){
//     $("#p").hide();
//     $("#k").show();
// });
//     });

// document.onload(function(){
    
//.om is not valid for javascript
//instead we use addEventListner
// const puppy = document.getElementById("puppy");
// const kitty = document.getElementById("kitty");

// const puppyImg = document.getElementById("p");
// const kittyImg = document.getElementById("k");

// puppy.addEventListener("click", function() {
//   puppyImg.style.display = "block";
//   kittyImg.style.display = "none";
// });

// kitty.addEventListener("click", function() {
//   puppyImg.style.display = "none";
//   kittyImg.style.display = "block";
// });

// JavaScript code
window.onload=func;
function func(){
  const puppy = document.getElementById("puppy");
const kitty = document.getElementById("kitty");

const puppyImg = document.getElementById("puppy-img");
const kittyImg = document.getElementById("kitty-img");

puppy.onclick = function() {
  puppyImg.style.display = "block";
  kittyImg.style.display = "none";
};

kitty.onclick = function() {
  puppyImg.style.display = "none";
  kittyImg.style.display = "block";
};

}








