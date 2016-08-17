var $ = require('jquery');

console.log("cmon!!!");

$( document ).ready(function() {
    console.log( "ready!" );
});

$('.hi').on("click", function(){
  console.log("clicked");
});
