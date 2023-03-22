$(document).ready(function () {
  $("#view_button").click(getPicture);
  console.log("apod");
});
function getPicture() {
  $.ajax(
    "https://api.nasa.gov/planetary/apod",
    {type: "GET",
    data: {
      api_key: "rOvFOp5fii5nqDlhE7ZZreG6hKeFhvSg87NzU7Ke",
      date: $("#date").val(),
    },
    dataType: "json",
    success: showPicture,
    error: noPicture,
  });
  console.log("getpic");
}
function showPicture(data) {
  $("#pic").attr("src", data.url);
  $("#title").text(data.title);
}
function noPicture(error) {
  alert(error.responseText);
}

