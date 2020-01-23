//TO DO
// figure out function to not repead the same code :)

//paris
let buttonParis = document.getElementById("buttonParis");

buttonParis.addEventListener("click", () => {
  readMoreParis.style.display = "block";
});

//berlin
let buttonBerlin = document.getElementById("buttonBerlin");

buttonBerlin.addEventListener("click", () => {
  readMoreBerlin.style.display = "block";
});

//london
let buttonLondon = document.getElementById("buttonLondon");

buttonLondon.addEventListener("click", () => {
  readMoreLondon.style.display = "block";
});

/*
// TO DO
// figure out how second click can hide the message :)

let timesClicked = 0;

buttonLondon.click(function() {
  timesClicked++;

  if (timesClicked > 1) {
    // hide the message
    //readMoreLondon.style.display = "none";
    
  } else {
    return
    
  }
});
*/
