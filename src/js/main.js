//smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]',{
	speed: 500, 
    offset: 100
});

//typing animation
var options = {
  strings: ["Early^1500", "Securely^8000"],
  typeSpeed: 80,
  startDelay: 1200,
  backSpeed: 40,
  loop: true
}

var typed = new Typed(".typing", options);