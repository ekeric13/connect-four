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
          $(column1[i]).animate( {opacity: 1},500, function(){
            $(column1[i]).addClass("active1" ).animate({opacity: 1},100, function(){
            $(column1[i]).removeClass("active1" ).animate({opacity: .95},50, function(){
            $(column1[i-1]).addClass("active1" ).animate({opacity: 1},100, function(){
            $(column1[i-1]).removeClass("active1" ).animate( {opacity: 1},50, function(){
            $(column1[i]).addClass("active1" )
            });
          });
          });
          });
          })
            break;
        }
        else {
          $(column1[i-5]).addClass("active2" ).animate({opacity: 1},100, function(){
            $(column1[i-5]).removeClass("active2" )
          });
          $(column1[i-4]).animate({opacity: .95},100, function(){
            $(column1[i-4]).addClass("active2" ).animate({opacity: 1},100, function(){
            $(column1[i-4]).removeClass("active2" )
          });
          });
          $(column1[i-3]).animate({opacity: .95},200, function(){
            $(column1[i-3]).addClass("active2" ).animate({opacity: 1},100, function(){
            $(column1[i-3]).removeClass("active2" )
          });
          });
          $(column1[i-2]).animate({opacity: .95},300, function(){
            $(column1[i-2]).addClass("active2" ).animate({opacity: 1},100, function(){
            $(column1[i-2]).removeClass("active2" )
          });
          });
          $(column1[i-1]).animate({opacity: .95},400, function(){
            $(column1[i-1]).addClass("active2" ).animate({opacity: 1},100, function(){
            $(column1[i-1]).removeClass("active2" )
          });
          });
          $(column1[i]).animate( {opacity: 1},500, function(){
            $(column1[i]).addClass("active2" ).animate({opacity: 1},100, function(){
            $(column1[i]).removeClass("active2" ).animate({opacity: .95},50, function(){
            $(column1[i-1]).addClass("active2" ).animate({opacity: 1},100, function(){
            $(column1[i-1]).removeClass("active2" ).animate( {opacity: 1},50, function(){
            $(column1[i]).addClass("active2" )
            });
          });
          });
          });
          })
            break;
        }

      }
    }
}

var movePlayer = function(event) {
  player = counter%2 + 1;
  counter += 1;
  // check even and odd number of key presses.

  var keyCode = event.keyCode;
  switch(keyCode) {
    case 49:
    move(".column1");
    board.add_piece(0, player);
    dontListenForKeys();
    resetListenForKeys();
    break;
    case 50:
    move(".column2");
    board.add_piece(1, player);
    dontListenForKeys();
    resetListenForKeys();
    break;
    case 51:
    move(".column3");
    board.add_piece(2, player);
    dontListenForKeys();
    resetListenForKeys();
    break;
    case 52:
    move(".column4");
    board.add_piece(3, player);
    dontListenForKeys();
    resetListenForKeys();
    break;
    case 53:
    move(".column5");
    board.add_piece(4, player);
    dontListenForKeys();
    resetListenForKeys();
    break;
    case 54:
    move(".column6");
    board.add_piece(5, player);
    dontListenForKeys();
    resetListenForKeys();
    break;
    case 55:
    move(".column7");
    board.add_piece(6, player);
    dontListenForKeys();
    resetListenForKeys();
    break;
    default:
      console.log("fail");
    break;
  }

}

var playMusic = function() {
  $("audio")[0].play();
}
var counter = 0
var listenForKeys = function(){

  $(document).on("keyup", movePlayer);

  console.log("is this here?")

}

var dontListenForKeys = function(){

  $(document).off("keyup", movePlayer);

  console.log("is this here?")

}

var resetListenForKeys = function(){
  setTimeout(listenForKeys,1250);
}

listenForKeys();
playMusic();
