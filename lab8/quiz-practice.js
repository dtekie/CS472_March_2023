// // $("li").each(function(idx, e) {
// //     $(e).css("color", "green"); });
// //code fragment 2
// //    $("li").each(function() {
// //     $(this).css("color", "yellow"); });
// //code fragment 3
// $("li").each(function (idx) {
//   $(this).css("color", "yellow");
// });

// for (var x=1; x<10; x++){
//   console.log(x);
//   }
//   console.log(x);

var fobj = function(){console.log ("I am invoked.")};
fobj.bar = 9;
fobj.foo = function(){console.log ("I am a method of fobj "+ this.bar)};
fobj();
fobj.foo()