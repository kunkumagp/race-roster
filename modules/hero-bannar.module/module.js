$(document).ready(function(){
  var titleHeight = ($(".title-area").innerHeight());
  if (titleHeight > 226) {
    $(".top-image").height(577 + titleHeight);
  }
});