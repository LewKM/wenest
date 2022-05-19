setInterval(() => {
  if (
    document.getElementById("email").value == "" ||
    document.getElementById("password").value == ""
  ) {
    document.getElementById("submit").setAttribute("disabled", "");
  } else {
    document.getElementById("submit").removeAttribute("disabled");
  }
});
document.getElementById("submit").onclick = function () {
  window.location.href = "../../menu.html";
  alert("User Logged In");
};
