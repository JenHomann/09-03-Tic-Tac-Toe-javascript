window.onload = function(){
  
  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');
  var count = 0;
  
  function add_mark(){
	  if(count % 2 === 0){
		  this.innerHTML = "X";
		  this.setAttribute("data-marked", "true")
	  }
	  else {
		  this.innerHTML = "O";
		  this.setAttribute("data-marked", "true")
	  }
  }
  
  function increment_count() {
	  count++;
  }
  
  for(var i = 0; i < squares.length; i++) {
    // When you click a square, runs the `add_mark` method.
    squares[i].addEventListener("click", add_mark);
	squares[i].addEventListener("click", increment_count);
	squares[i].addEventListener("click", isWinningGame);
	squares[i].addEventListener("click", isCatsGame);
  }
  
  function isCatsGame(){
	  if( count === 9 && isWinningGame() === false){
		  alert("Cat's Game");
		  location.reload();
	  }
  }
  
  function isWinningGame(){
	  if( (squares[0].innerHTML != "-" && squares[1].innerHTML != "-" && squares[2].innerHTML != "-") && (squares[0].innerHTML === squares[1].innerHTML && squares[0].innerHTML === squares[2].innerHTML) ){
		  alert(squares[0].innerHTML + " is the winner!");
		  location.reload();
	  }
	  else if( (squares[3].innerHTML != "-" && squares[4].innerHTML != "-" && squares[5].innerHTML != "-") && (squares[3].innerHTML === squares[4].innerHTML && squares[3].innerHTML === squares[5].innerHTML) ){
		  alert(squares[3].innerHTML + " is the winner!");
		  location.reload();
	  }
	  else if( (squares[6].innerHTML != "-" && squares[7].innerHTML != "-" && squares[8].innerHTML != "-") && (squares[6].innerHTML === squares[7].innerHTML && squares[6].innerHTML === squares[8].innerHTML) ){
		  alert(squares[6].innerHTML + " is the winner!");
		  location.reload();
	  }
	  else if( (squares[0].innerHTML != "-" && squares[3].innerHTML != "-" && squares[6].innerHTML != "-") && (squares[0].innerHTML === squares[3].innerHTML && squares[0].innerHTML === squares[6].innerHTML) ){
		  alert(squares[0].innerHTML + " is the winner!");
		  location.reload();
	  }
	  else if( (squares[1].innerHTML != "-" && squares[4].innerHTML != "-" && squares[7].innerHTML != "-") && (squares[1].innerHTML === squares[4].innerHTML && squares[1].innerHTML === squares[7].innerHTML) ){
		  alert(squares[1].innerHTML + " is the winner!");
		  location.reload();
	  }
	  else if( (squares[2].innerHTML != "-" && squares[5].innerHTML != "-" && squares[8].innerHTML != "-") && (squares[2].innerHTML === squares[5].innerHTML && squares[2].innerHTML === squares[8].innerHTML) ){
		  alert(squares[2].innerHTML + " is the winner!");
		  location.reload();
	  }
	  else if( (squares[0].innerHTML != "-" && squares[4].innerHTML != "-" && squares[8].innerHTML != "-") && (squares[0].innerHTML === squares[4].innerHTML && squares[0].innerHTML === squares[8].innerHTML) ){
		  alert(squares[0].innerHTML + " is the winner!");
		  location.reload();
	  }
	  else if( (squares[2].innerHTML != "-" && squares[4].innerHTML != "-" && squares[6].innerHTML != "-") && (squares[2].innerHTML === squares[4].innerHTML && squares[2].innerHTML === squares[6].innerHTML) ){
		  alert(squares[2].innerHTML + " is the winner!");
	  }
	  else{
		  return false;
	  }
  }

}