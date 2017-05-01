$(document).ready(function () {
  var deleteButtons = document.getElementsByName('delete');
  $(deleteButtons).on("click", function () {
    var parents = $(this).parents();
    var deleteObject = $(parents)[3];
    $(deleteObject).addClass('todo--delete');
  });
});
