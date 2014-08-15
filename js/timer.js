// Game/turn timer would look like:
function timer() {
    count--;
    if (count <= 0) {
      clearInterval(counter);
        // this is just pseudo code
        // something about player turns
        return;
    }
    document.getElementById("timer").innerHTML=count + " seconds left!";// would need to do minutes for game presumably
}

// HTML that should make it render is simply (or I think it is) the following that you'd attach to like a <p> tag
<span id="timer"></span>


// Start of game would need something like:
  count = 30;
  counter = setInterval(timer, 1000); //1000 is 1 second

