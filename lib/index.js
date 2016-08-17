var $ = require('jquery');
var title, idea, ideaList;

$( document ).ready(function() {
    console.log( "ready!" );
});

$('.submit').on("click", function(){
  title = $('[name=title]').value;
  idea = $('[name=idea]').value;
  ideaList = $('.ideaList');
  // ideaList.append("<li>" + title + "</li>");

  $.ajax({type: 'GET',
  dataType: "json",
  url: 'https://immense-falls-50057.herokuapp.com/api/v1/merchants.json',
  success: function(data){
    debugger;
    }
  });
});

// function parseMerchants(data){
//   debugger;
// }
