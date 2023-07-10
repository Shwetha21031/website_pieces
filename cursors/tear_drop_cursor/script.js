const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
  "#0f0e5c",
  "#361e73",
  "#572f8a",
  "#7742a1",
  "#9855b8",
  "#b969cf",
  "#dc7ee6",
  "#ff94fd",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.transform = `scale(${
      (circles.length - index) / circles.length
    })`;
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// hero
let stars = document.getElementById("stars");
let mountains_behind = document.getElementById("mountains_behind");
let moon = document.getElementById("moon");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");

const heroCoords = { x: 0, y: 0 };
window.addEventListener("mousemove", function (e) {
  heroCoords.x = e.clientX;
  heroCoords.y = e.clientY;
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_behind.style.marginLeft = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1 + "px";
  btn.style.marginTop = value * 1 + "px";

  // Use heroCoords.x and heroCoords.y as needed
});
