// $(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// });


var move = function(columnNumber) {
  console.log("is move working?");
  var column1 = $('tr').find(columnNumber)


    for (var i=column1.length-1; i >= 0; i--) {
      if (!$(column1[i]).hasClass("active1") && !$(column1[i]).hasClass("active2")) {

        if (counter % 2 === 0  )  {
          $(column1[i-5]).addClass("active1" ).animate({opacity: 1},100, function(){
            $(column1[i-5]).removeClass("active1" )
          });
          $(column1[i-4]).animate({opacity: .95},100, function(){
            $(column1[i-4]).addClass("active1" ).animate({opacity: 1},100, function(){
            $(column1[i-4]).removeClass("active1" )
          });
          });
          $(column1[i-3]).animate({opacity: .95},200, function(){
            $(column1[i-3]).addClass("active1" ).animate({opacity: 1},100, function(){
            $(column1[i-3]).removeClass("active1" )
          });
          });
          $(column1[i-2]).animate({opacity: .95},300, function(){
            $(column1[i-2]).addClass("active1" ).animate({opacity: 1},100, function(){
            $(column1[i-2]).removeClass("active1" )
          });
          });
          $(column1[i-1]).animate({opacity: .95},400, function(){
            $(column1[i-1]).addClass("active1" ).animate({opacity: 1},100, function(){
            $(column1[i-1]).removeClass("active1" )
          });
          });
          $(column1[i]).animate( {opacity: 1},500, "easeOutBounce", function(){
            $(column1[i]).addClass("active1" )
          })
            break;
        }
        else {
          $(column1[i]).addClass("active2" )
            break;
        }

      }
    }
}

var movePlayer = function(event) {
  counter += 1
  // check even and odd number of key presses.

  var keyCode = event.keyCode;
  switch(keyCode) {
    case 65:
    move(".column1");
    break;
    case 83:
    move(".column2");
    break;
    case 68:
    move(".column3");
    break;
    case 70:
    move(".column4");
    break;
    case 71:
    move(".column5");
    break;
    case 72:
    move(".column6");
    break;
    case 74:
    move(".column7");
    break;
    default:
      console.log("fail");
    break;
  }
}

var counter = 0
var listenForKeys = function(){

  document.addEventListener("keyup", movePlayer);
  console.log("is this here?")

}
listenForKeys();
