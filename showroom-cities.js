//TO DO
// figure out function to not repead the same code :)

//paris
let buttonParis = document.getElementById("buttonParis");

buttonParis.addEventListener("click", () => {
  readMoreParis.style.display = "";
  readMoreParis.textContent =
    "Our wish is to offer you an intimate design experience attached to an authentic scenario. Conceived with different collections of furniture, lighting and accessories, the apartment and its professional staff are ready to inspire all our visitors with a private tour over amazing stories behind the pieces.";
});

//berlin
let buttonBerlin = document.getElementById("buttonBerlin");

buttonBerlin.addEventListener("click", () => {
  readMoreBerlin.style.display = "";
  readMoreBerlin.textContent =
    "A private show flat in the heart of the world’s design capital: Paris. Our wish is to offer you an intimate design experience attached to an authentic scenario. Most of all, we want to spend some quality time with you! A highly trained team is waiting to explain every detail of each brand, to tell the amazing stories behind the pieces and to answer all questions, in order to help to finish projects on time by showing the best choices.";
});

//london
let buttonLondon = document.getElementById("buttonLondon");

buttonLondon.addEventListener("click", () => {
  readMoreLondon.style.display = "";
  readMoreLondon.textContent =
    "London's showroom is a concept store that reconfigures the way we shop for home goods. The shop itself functions as the apartment of the person who curates it, allowing visitors to get a true feel for the way the various pieces come together to make a home.";
});

/*
// TO DO
// figure out how second click can hide the message :)

var timesClicked = 0;

buttonLondon.click(function() {
  timesClicked++;

  if (timesClicked > 1) {
    // hide the message
    //readMoreLondon.style.display = "display: none"
    console.log(hidden);
  } else {
    // show the message
    console.log(showing);
  }
});
*/
