var elm = document.getElementsByTagName("html")[0];
elm.style.display = "none";
document.addEventListener("DOMContentLoaded", function (event) {
  elm.style.display = "block";
});

//menu-nav
$(document).ready(function () {
  $(".cancel-icon").hide();
  // $(".mobile-nav").css("display","none");
  $(".mobile-nav").css("display", "none");

  $(".menu-icon").click(function () {
    $(".menu-icon").hide(100);
    $(".cancel-icon").show(100);
    $(".mobile-nav").css("display", "block");
  });
  $(".cancel-icon").click(function () {
    $(".cancel-icon").hide(100);
    $(".menu-icon").show(100);
    $(".mobile-nav").css("display", "none");
  });

  $(".hero-anchor").click(function () {
    $(".mobile-nav").css("display", "none");
    $(".cancel-icon").hide(100);
    $(".menu-icon").show(100);
  });
  $(".portfolio-anchor").click(function () {
    $(".mobile-nav").css("display", "none");
    $(".cancel-icon").hide(100);
    $(".menu-icon").show(100);
  });
  $(".services-anchor").click(function () {
    $(".mobile-nav").css("display", "none");
    $(".cancel-icon").hide(100);
    $(".menu-icon").show(100);
  });
  $(".contact-anchor").click(function () {
    $(".mobile-nav").css("display", "none");
    $(".cancel-icon").hide(100);
    $(".menu-icon").show(100);
  });
  $(".project-anchor").click(function () {
    $(".mobile-nav").css("display", "none");
    $(".cancel-icon").hide(100);
    $(".menu-icon").show(100);
  });
});

// sroll top btn
document.getElementById("scrollBtn").addEventListener("click", scrollTop);
function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//mute-btn
var silence = false;
var muteIcon = document.querySelector(".mute-icon");
var unmuteIcon = document.querySelector(".unmute-icon");
function muteAudio() {
  if (silence === false) {
    silence = true;
    unmuteIcon.style.display = "none";
    muteIcon.style.display = "block";
  } else {
    silence = false;
    unmuteIcon.style.display = "block";
    muteIcon.style.display = "none";
  }
}

// audio btn
var audio = document.getElementById("audioMusic");
function audioPlay() {
  if (silence === false) {
    audio.play();
  } else {
  }
}

// scroll percentage btn
function scrollPercentage() {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.background = `conic-gradient(#8750f7 ${scrollValue}%, #050709 ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue}%`;
}

window.addEventListener("scroll", scrollPercentage);
window.onload = scrollPercentage;

// loader
setTimeout(function () {
  document.querySelector(".loading").style.display = "none";
}, 3000);

//scroll navbar
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    document.getElementById("nav-bar2").style.top = "0";
  } else {
    document.getElementById("nav-bar2").style.top = "-120px";
  }
}
window.addEventListener("scroll", scrollFunction);

// cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#8750f7",
  "#9560f8",
  "#a170fa",
  "#ae80fb",
  "#b98ffc",
  "#c49ffd",
  "#cfaffd",
  "#d9bffe",
  "#e3cfff",
  "#eddfff",
  "#f6efff",
  "#ffffff",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.pageX;
  coords.y = e.pageY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}
animateCircles();

//resume section button
document.querySelector(".education-btn1").style.backgroundColor = "#050709";
function showEducation() {
  audioPlay();
  var showeducation = document.querySelector(".education-div");
  var hideexperience = document.querySelector(".experience-div");
  var hideskills = document.querySelector(".programming-skills");
  var educationBtn = document.querySelector(".education-btn1");
  var skillsBtn = document.querySelector(".skills-btn1");
  var experienceBtn = document.querySelector(".experience-btn1");
  showeducation.style.display = "block";
  hideexperience.style.display = "none";
  hideskills.style.display = "none";
  educationBtn.style.backgroundColor = "#050709";
  skillsBtn.style.backgroundColor = "#8750f7";
  experienceBtn.style.backgroundColor = "#8750f7";
}

function showSkills() {
  audioPlay();
  var hideeducation = document.querySelector(".education-div");
  var hideexperience = document.querySelector(".experience-div");
  var showskills = document.querySelector(".programming-skills");
  var educationBtn = document.querySelector(".education-btn1");
  var skillsBtn = document.querySelector(".skills-btn1");
  var experienceBtn = document.querySelector(".experience-btn1");
  showskills.style.display = "block";
  hideexperience.style.display = "none";
  hideeducation.style.display = "none";
  educationBtn.style.backgroundColor = "#8750f7";
  skillsBtn.style.backgroundColor = "#050709";
  experienceBtn.style.backgroundColor = "#8750f7";
}

function showExperience() {
  audioPlay();
  var hideeducation = document.querySelector(".education-div");
  var showexperience = document.querySelector(".experience-div");
  var hideskills = document.querySelector(".programming-skills");
  var educationBtn = document.querySelector(".education-btn1");
  var skillsBtn = document.querySelector(".skills-btn1");
  var experienceBtn = document.querySelector(".experience-btn1");
  showexperience.style.display = "block";
  hideskills.style.display = "none";
  hideeducation.style.display = "none";
  educationBtn.style.backgroundColor = "#8750f7";
  skillsBtn.style.backgroundColor = "#8750f7";
  experienceBtn.style.backgroundColor = "#050709";
}

$(document).ready(function () {
  $(".image-slider").owlCarousel({
    items: 1,
    dots: true,
    autoplay: true,
    loop: true,
  });

  $(".project-slider").owlCarousel({
    items: 1,
    dots: true,
    autoplay: true,
    loop: true,
    margin:20,
    responsive: {
      768: { items: 2 }, 
      1200: { items: 3 }, 
    },
  });

  $(".more-projects").hide();
  
  $(".all-projects").click(function(){
    $(".more-projects").slideToggle("slow");
  });
});
