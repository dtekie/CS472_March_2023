$(document).ready(function () {
    $("#view_button").click(getPicture);
  });
  
  async function getPicture() {
    try {
      const api = "https://api.nasa.gov/planetary/apod?api_key=rOvFOp5fii5nqDlhE7ZZreG6hKeFhvSg87NzU7Ke&date="
      const response = await fetch( api + $("#date").val());
      const data = await response.json();
      showPicture(data);
    } catch (error) {
      noPicture(error);
    }
  }
  
  function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").text(data.title);
  }
  
  function noPicture(error) {
    alert(error);
  }
  