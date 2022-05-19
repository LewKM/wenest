setInterval(() => {
  if (
    document.getElementById("username").value == "" ||
    document.getElementById("password").value == "" ||
    document.getElementById("email").value == ""
  ) {
    document.getElementById("submit").setAttribute("disabled", "");
  } else {
    document.getElementById("submit").removeAttribute("disabled");
  }
});
