//Create a piece with x,y coordinate.. these might need to flip if we do
//a column by row matrix to allow for easier model manipulation.

//Create empty Board
var Board = function(){
  this.matrix = new Array(7);
  for (var i = 0; i < 7; i++) {
    this.matrix[i] = new Array(6);
  }
};

var board = new Board();

for (var i = 0; i < 7; i++) {
  for (var j = 0; j < 6; j++) {
    board.matrix[i][j] = 0;
  }
}

Board.prototype.checkColFull = function(x_coor){
  if (this.matrix[x_coor].indexOf(0) === -1)
    return true;
  return false;
};

// Board.prototype.checkFull = function(){
//   for(var i=0; i<7; i++){
//     if (!this.checkColFull(i))
//       return false;
//     return true;
//   }
// };
Board.prototype.add_piece = function(x_coor,player){
  if (this.checkColFull(x_coor)){
    return -1;
  }
  for(var i=0; i<6; i++){
    if (this.matrix[x_coor][i] === 0){
      this.matrix[x_coor][i] = player;
      return i;
    }
  }
};


Board.prototype.checkCount = function(count){
  if(count>=4){
    return true;
  }else{
    return false;
  }
};

//Might have to pass this player so that you can display the correct player to win
//will hopefully get x,y from the controller.
Board.prototype.checkWin = function (x,y){
  var win = false;
  win = win || this.checkRow(x,y);
  win = win || this.checkCol(x,y);
  win = win || this.checkPDiag(x,y);
  win = win || this.checkNDiag(x,y);
  // if(win){
    // return (player);  This is the thing when we are passed in win.
    return (win);
  // }
};

Board.prototype.checkRow = function (x,y){
  var player = this.matrix[x][y];
  var count = 1;
  var i = 1;

  if (player === 0){
    console.log("YOU SCREWED UP!!!");
    return false;
  }

  while(this.matrix[x-i] !== undefined && this.matrix[x-i][y] === player){
   count++;
   i++;
 }
 i=1;
 while(this.matrix[x+i] !== undefined &&this.matrix[x+i][y] === player){
  count++;
  i++;
}
return this.checkCount(count);
};

Board.prototype.checkCol = function (x,y){
  var player = this.matrix[x][y];
  console.log(player);
  if (player === 0){
    console.log("YOU SCREWED UP!!!");
    return false;
  }
  var count = 1;

  //check left
  var i = 1;
  while(this.matrix[x][y-i] !== undefined && this.matrix[x][y-i] === player){
   count++;
   i++;
 }

  //check right
  i=1;
  while(this.matrix[x][y+i] !== undefined && this.matrix[x][y+i] === player){
    count++;
    i++;
  }
  return this.checkCount(count);
};

Board.prototype.checkPDiag = function (x,y){
var player = this.matrix[x][y];
  console.log(player);
  if (player === 0){
    console.log("YOU SCREWED UP!!!");
    return false;
  }
  var count = 1;

  //check left
  var i = 1;
  while(this.matrix[x-i] && this.matrix[x-i][y-i] && this.matrix[x-i][y-i] === player){
   count++;
   i++;
 }

  //check right
  i=1;
  while(this.matrix[x+i] && this.matrix[x+i][y+i] && this.matrix[x+i][y+i] === player){
    count++;
    i++;
  }
  return this.checkCount(count);
};
Board.prototype.checkNDiag = function (x,y){
var player = this.matrix[x][y];
  console.log(player);
  if (player === 0){
    console.log("YOU SCREWED UP!!!");
    return false;
  }
  var count = 1;
  var i = 1;
  while(this.matrix[x+i] && this.matrix[x+i][y-i] && this.matrix[x+i][y-i] === player){
   count++;
   i++;
 }
  i=1;
  while(this.matrix[x-i] && this.matrix[x-i][y+i] && this.matrix[x-i][y+i] === player){
    count++;
    i++;
  }
  return this.checkCount(count);
};

// Board.prototype.checkArray = function(player,arrayToCheck){
//   if(arrayToCheck.length<4)
//     return false;
//   for(var i=0; i<arrayToCheck.length-4; i++){
//     var sliced = arrayToCheck.slice(i,i+4);
//     for(var j=1; j<4; j++){
//       if (sliced[0] != sliced[j])
//         break;
//       return true;
//     }
//   }
//   return false;
// };



console.log(board.add_piece(0,1));
console.log(board.add_piece(0,1));
console.log(board.add_piece(0,1));
console.log(board.add_piece(0,1));
console.log(board.add_piece(0,1));
console.log(board.add_piece(1,1));
console.log(board.add_piece(1,1));
console.log(board.add_piece(2,1));
console.log(board.add_piece(2,1));
console.log(board.add_piece(2,1));
console.log(board.add_piece(2,1));
console.log(board.add_piece(3,1));
console.log(board.add_piece(3,1));
console.log(board.add_piece(3,1));
console.log(board.add_piece(3,1));
console.log(board.add_piece(4,1));
console.log(board.add_piece(4,1));
console.log(board.add_piece(4,1));
console.log(board.add_piece(4,1));
console.log(board.add_piece(4,1));
console.log(board.add_piece(5,1));
console.log(board.add_piece(6,1));

console.log(board.matrix);
// console.log(board.checkFull());
// console.log(board.matrix[-1,8] === undefined);
console.log("-----------------------------------------");
board.add_piece(4,1);
board.add_piece(4,1);
board.add_piece(4,1);
board.add_piece(4,1);
board.add_piece(4,1);
board.add_piece(4,1);
board.add_piece(4,1);
console.log(board.matrix);

// console.log(board.checkRow(1,0));
// console.log(board.checkRow(1,1));

// console.log(board.checkCol(4,1));
// console.log(board.checkCol(5,1));
// console.log(board.checkNDiag(5,0));
// console.log(board.checkPDiag(0,0));

console.log(board.checkWin(5,0));
console.log(board.checkWin(0,0));

