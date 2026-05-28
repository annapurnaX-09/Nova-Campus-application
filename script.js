const AUTH_KEY = "nova_campus_auth_v1";
const LOGIN_REDIRECT = "smart-campus.html";
const adminLoginForm = document.getElementById("adminLoginForm");
const message = document.getElementById("message");
const logoutBtn = document.getElementById("logoutBtn");

// If already logged in, go directly to main app.
if (localStorage.getItem(AUTH_KEY) === "1") {
  window.location.href = LOGIN_REDIRECT;
}

if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("adminEmail").value.trim();
    const password = document.getElementById("adminPassword").value;

    if (email === "admin@gmail.com" && password === "12345") {
      message.style.color = "green";
      message.textContent = "Login successful. Redirecting...";
      localStorage.setItem(AUTH_KEY, "1");
      setTimeout(function () {
        window.location.href = LOGIN_REDIRECT;
      }, 450);
    } else {
      message.style.color = "red";
      message.textContent = "Invalid email or password";
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = "index.html";
  });
}
