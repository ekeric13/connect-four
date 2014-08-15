// $(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// });

var board = new Board();
console.log(board);
var move = function(columnNumber) {
  console.log("is move working?");
  var column1 = $('tr').find(columnNumber);


    for (var i=column1.length-1; i >= 0; i--) {
      if (!$(column1[i]).hasClass("active1") && !$(column1[i]).hasClass("active2")) {

        if (counter % 2 === 0  )  {
          $(column1[i]).addClass("active1" );
            break;
        }
        else {
          $(column1[i]).addClass("active2" );
            break;
        }

      }
    }
};

var movePlayer = function(event) {
  player = counter%2 + 1;
  // check even and odd number of key presses.
  var keyCode = event.keyCode;
  switch(keyCode) {
    case 65:
    move(".column1");
    board.add_piece(0, player);
    console.log(board.toString());
    break;
    case 83:
    move(".column2");
    board.add_piece(1, player);
    console.log(board.toString());
    break;
    case 68:
    move(".column3");
    board.add_piece(2, player);
    console.log(board.toString());
    break;
    case 70:
    move(".column4");
    board.add_piece(3, player);
    console.log(board.toString());
    break;
    case 71:
    move(".column5");
    board.add_piece(4, player);
    console.log(board.toString());
    break;
    case 72:
    move(".column6");
    board.add_piece(5, player);
    console.log(board.toString());
    break;
    case 74:
    move(".column7");
    board.add_piece(6, player);
    console.log(board.toString());
    break;
    default:
      console.log("fail");
    break;
  }
  counter += 1;
}

var counter = 0
var listenForKeys = function(){

  document.addEventListener("keyup", movePlayer);
  console.log("is this here?")

}
listenForKeys();
