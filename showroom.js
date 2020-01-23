let emailInput = document.getElementById("emailInput");
let button = document.getElementById("sendButton");
let message = document.getElementById("usersMessage");

button.addEventListener("click", event => {
  event.preventDefault();
  if (emailInput.value.length <= 7 || message.value.length <= 2) {
    alert("Your email or message is too short. Please check your data.");
  } else alert("Your message has been sent! Thank You");
});

/*js sheet from the front page*/

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
