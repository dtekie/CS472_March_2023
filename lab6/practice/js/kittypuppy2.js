const puppy = document.querySelector("#puppy");
const kitty = document.querySelector("#kitty");
const kittyImg = document.querySelector("#k");
const puppyImg = document.querySelector("#p");

puppy.addEventListener("click", function(){
    puppyImg.style.display = "block";
    kittyImg.style.display = "none";
});

kitty.addEventListener("click", function(){
    kittyImg.style.display = "block";
    puppyImg.style.display = "none";
});