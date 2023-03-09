(function () {
  function DeleteItem() {
    $("this").parent().remove();
  }
  $(document).ready(function () {
    $("button").click(DeleteItem);
  });
})();
