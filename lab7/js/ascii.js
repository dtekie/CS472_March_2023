"use strict";
var delay = 250;
var timerID = "";
var originalText = "";

$(document).ready(function() {
  $("#btnstart").on("click", animationTypeIdentifier);
  $("#btnstop").on("click", stopAnimation);
  $("#animtype").on("change", animationTypeIdentifier);
  $("#size").on("change", setSize);
  $("#turbo").on("click", turboCharger);
});

function setSize(){
  var selectedSizeIndex = $("#size").prop("selectedIndex");

  if(selectedSizeIndex == "0"){ $("#textarea").css("font-size", "7pt"); }
  else if(selectedSizeIndex == "1"){ $("#textarea").css("font-size", "10pt"); }
  else if(selectedSizeIndex == "2"){ $("#textarea").css("font-size", "12pt"); }
  else if(selectedSizeIndex == "3"){ $("#textarea").css("font-size", "16pt"); }
  else if(selectedSizeIndex == "4"){ $("#textarea").css("font-size", "24pt"); }
  else { $("#textarea").css("font-size", "32pt"); }
}

function stopAnimation(){
  clearInterval(timerID);
  $("#btnstart").prop("disabled", false);
  $("#animtype").prop("disabled", false);
  originalText = $("#textarea").val(originalText).val();
}

function turboCharger(){
  if($("#turbo").prop("checked")){ delay = 100; }
  else{ delay = 250; }
  animationTypeIdentifier();
}

function animationTypeIdentifier(){
  setSize();
  $("#btnstop").prop("disabled", false);
  $("#btnstart").prop("disabled", true);
  $("#animtype").prop("disabled", true);
  clearInterval(timerID);
  originalText = $("#textarea").val();
  var animType = $("#animtype").val();
  
  if(animType == "blank"){ $("#textarea").val(""); }
  else if(animType == "juggler"){ displayAnimation("juggler"); }
  else if(animType == "exercise"){ displayAnimation("exercise"); } 
  else if(animType == "dive"){ displayAnimation("dive"); } 
  else if(animType == "bike"){ displayAnimation("bike"); } 
  else{ return; }        
}

function displayAnimation(animationType){
  if(animationType == "blank"){ return; }
  else if(animationType == "juggler"){ var splitted = ANIMATIONS["juggler"].split("=====\n"); }
  else if(animationType == "exercise"){ var splitted = ANIMATIONS["exercise"].split("=====\n"); }
  else if(animationType == "dive"){ var splitted = ANIMATIONS["dive"].split("=====\n"); }
  else if(animationType == "bike"){ var splitted = ANIMATIONS["bike"].split("=====\n"); }
  else{return; }
  var index = 0;
  timerID = setInterval(function(){
    $("#textarea").val(splitted[index++]);
    if(index >= splitted.length){ index = 0; }
  }, delay);
}
