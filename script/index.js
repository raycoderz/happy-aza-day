// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "Na Jaemin" && password === "Na Jaemin") {
    Swal.fire({
      icon: "success",
      title: "Login Succesfull",
      text: "Welcome, My Beautiful Fairy!",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "happyaza-day.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login Failed!",
      text: "Have you given up?",
      confirmButtonText: "Try Again!",
      confirmButtonColor: "#ff7675",
    });
  }
}