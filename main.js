// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 250 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

 // cube 
const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 120;

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);