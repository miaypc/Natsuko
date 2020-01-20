let emailInput = document.getElementById("emailInput");
let button = document.getElementById("sendButton");
let message = document.getElementById("usersMessage");

button.addEventListener("click", event => {
  event.preventDefault();
  if (emailInput.value.length <= 7 || message.value.length <= 2) {
    alert("Your email or message is too short. Please check your data.");
  } else alert("Your message has been sent! Thank You");
});
