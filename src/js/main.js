//smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]',{
    // Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	offset: 100 // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
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