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
function check(form) {
  if (form.username.value && form.password.value) {
    var username = document.getElementById("username").value;
  } else {
    alert("Error Password or Username");
  }
}
document.getElementById("submit").onclick = function () {
  window.location.href = "./assets/home.html";

  var username = document.getElementById("username").value;

  alert("Welcome" + " " + username);
};
