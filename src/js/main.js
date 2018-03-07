//smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]',{
	speed: 500, 
    offset: 100
});

//nav brgr
(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('nav-menu')[0];
    var burgerContain = document.getElementsByClassName('nav-contain')[0];
    var burgerNav = document.getElementsByClassName('nav-list')[0];
  
    burgerMenu.addEventListener('click', function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    }, false);
})();

//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.mission-infographic-element', { 
    duration: 500,
    easing: 'linear' 
}, 40);

sr.reveal('.valueprop-offering-element', {
     duration: 1000 },
50);

sr.reveal('.process-outline-element', { 
    duration: 600 ,
    origin: 'top',
    distance: '20px',
    easing: 'linear' 
});

sr.reveal('.process-segment', { 
    duration: 600 ,
    origin: 'top',
    easing: 'linear' 
});


//typing animation
var options = {
  strings: ["Secure^1500", "Transparent^1500", "Accessible^1500"],
  typeSpeed: 80,
  startDelay: 1200,
  backSpeed: 40,
  loop: true
}

var typed = new Typed(".typing", options);