function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-theme");

  let img = document.getElementById('linkedin');
  if (img) {
  
    let newSrc = "./resources/images/Link2.png";
    let oldSrc = "./resources/images/Skærmbillede 2024-12-18 kl. 15.17.44.png";

    if (img.src.endsWith("Link2.png")) {
      img.src = oldSrc;
      
    } else {
      img.src = newSrc;
      
    }
  } 
}


