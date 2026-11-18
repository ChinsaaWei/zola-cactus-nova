(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  button.addEventListener("click", function () {
    var dark = root.dataset.theme !== "dark";
    root.dataset.theme = dark ? "dark" : "light";
    document.getElementById("theme-light").disabled = dark;
    document.getElementById("theme-dark").disabled = !dark;
    localStorage.setItem("theme", dark ? "dark" : "light");
    button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  });
})();
