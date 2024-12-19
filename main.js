function myFunction() {
  let element = document.body;
  let isDarkMode = element.classList.toggle("dark-theme");
  console.log(isDarkMode)

  // Store the theme preference in localStorage
  localStorage.setItem("darkTheme", isDarkMode ? "enabled" : "disabled");

  let img = document.getElementById('linkedin');
  let newSrc = "./resources/images/Link2.png";
  let oldSrc = "./resources/images/Skærmbillede 2024-12-18 kl. 15.17.44.png";
  
  if (isDarkMode === true) {
    img.src = oldSrc;
  } else if (isDarkMode === false) {
    img.src = newSrc;
  }

}


document.addEventListener("DOMContentLoaded", () => {
  let darkTheme = localStorage.getItem("darkTheme");

  let img = document.getElementById('linkedin');
  let newSrc = "./resources/images/Link2.png";
  let oldSrc = "./resources/images/Skærmbillede 2024-12-18 kl. 15.17.44.png";

  if (darkTheme === "enabled") {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-dark-mode").checked = true;

    if (img) {
      img.src = oldSrc; // Set the dark mode image
    }
  } else {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-dark-mode").checked = false;

    if (img) {
      img.src = newSrc; // Set the light mode image
    }
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navBar = document.getElementById("nav-bar");

  burgerMenu.addEventListener("click", () => {
    navBar.classList.toggle("show");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navBar = document.getElementById("nav-bar-white");

  burgerMenu.addEventListener("click", () => {
    navBar.classList.toggle("show");
  });
});

