// Get the current URL path
const currentPath = window.location.pathname.split("/").pop();

// Select all navigation links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  // Check if the link's href matches the current path
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});
