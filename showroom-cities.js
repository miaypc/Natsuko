//TO DO
// figure out function to not repead the same code :)
let cityBlockButtons = document.querySelectorAll(".city-block .btn");
console.log(cityBlockButtons);
let readMore = document.querySelectorAll(".read-more");

for (let i = 0; i < cityBlockButtons.length; i++) {
  readMore[i].style.display = "none";
  cityBlockButtons[i].addEventListener("click", function() {
    console.log(readMore[i].style.display);
    if (readMore[i].style.display === "none") {
      readMore[i].style.display = "block";
      cityBlockButtons[i].innerHTML = "Hide";
    } else {
      readMore[i].style.display = "none";
      cityBlockButtons[i].innerHTML = "Learn more";
    }
  });
}

/* js sheet from the front page */
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
