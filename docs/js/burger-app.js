window.onload=function() {
  
  var menuIcon = document.querySelector(".hamburger-menu");	
  var navbar = document.querySelector(".navbar");	
  
  
  menuIcon.addEventListener("click", () => {	
    navbar.classList.toggle("change");	
  });

};
