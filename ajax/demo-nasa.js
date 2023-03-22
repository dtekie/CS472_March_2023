//const $ = require("jquery");
$(document).ready(
    function () {
    $("#view_button").click(getPicture);
    });
    function getPicture () {
    $.ajax({
        
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: { api_key: "rOvFOp5fii5nqDlhE7ZZreG6hKeFhvSg87NzU7Ke",
    date: $("#date").val() },
    //dataType: "json",
    "success": showPicture,
    "error": noPicture
    });
    };
    function showPicture(data) {
    $("#pic").attr("src", data.url);
    };
    function noPicture(error) {
    alert(error.responseText);
    };