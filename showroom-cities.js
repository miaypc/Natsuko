//TO DO
// figure out function to not repead the same code :)
let cityBlockButtons = document.querySelectorAll(".city-block .btn");
console.log(cityBlockButtons);

for (let i = 0; i < cityBlockButtons.length; i++) {
  cityBlockButtons[i].addEventListener("click", function() {
    console.log(this);
    this.toggleAttribute("open");
    console.log(this.attributes.open);
    if (this.attributes.open) {
      this.innerText = "Hide";
    } else {
      this.innerText = "Read More";
    }
  });
}

//paris
function showMoreInfoParis() {
  var moreInfoParis = document.getElementById("more-info-paris");
  if (moreInfoParis.style.display === "none") {
    moreInfoParis.style.display = "block";
  } else {
    moreInfoParis.style.display = "none";
  }
}

//berlin
function showMoreInfoBerlin() {
  var moreInfoBrln = document.getElementById("more-info-berlin");
  if (moreInfoBrln.style.display === "none") {
    moreInfoBrln.style.display = "block";
  } else {
    moreInfoBrln.style.display = "none";
  }
}

//london
function showMoreInfoLondon() {
  let moreInfoLdn = document.getElementById("more-info-london");
  //let button = document.getElementById("readMoreLondonButton");
  if (moreInfoLdn.style.display === "none") {
    moreInfoLdn.style.display = "block";
  } else {
    moreInfoLdn.style.display = "none";

    // if(button.value === "Read more"){
    //   button.value = "Hide"
    // };
    // else (
    //  button.value = "Read more"
    // )
  }
}

// TO DO
// figure out how second click can hide the message :)

// let timesClicked = 0;

// buttonLondon.click( Hide() {
//   timesClicked++;

//   if (timesClicked > 1) {
//     // hide the message
//     readMoreLondon.style.display = "none";
//   } else {
//     return;
//   }
// });
// Hide();

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
