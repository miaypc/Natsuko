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

/*js sheet from the front page */
var prevScrollpos = window.pageYOffset;

function brandLogoScroll() {
  var logo = document.getElementById("brand-logo");
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    logo.style.visibility = "visible";
  } else {
    logo.style.visibility = "hidden";
  }
  prevScrollpos = currentScrollPos;
}
