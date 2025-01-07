var elm = document.getElementsByTagName("html")[0];
elm.style.display = "none";
document.addEventListener("DOMContentLoaded", function (event) {
  elm.style.display = "block";
});

$(document).ready(function () {

  //menu-nav

  $('.menu-icon').click(function () {
    $('.mobile-nav').slideToggle(1000);
  })

  $('.hero-anchor').click(function () {
    $('.mobile-nav').slideUp(1000);
  })

  $('.portfolio-anchor').click(function () {
    $('.mobile-nav').slideUp(1000);
  })

  $('.services-anchor').click(function () {
    $('.mobile-nav').slideUp(1000);
  })

  $('.project-anchor').click(function () {
    $('.mobile-nav').slideUp(1000);
  })

  $('.contact-anchor').click(function () {
    $('.mobile-nav').slideUp(1000);
  })


  $(".image-slider").owlCarousel({
    items: 1,
    dots: true,
    autoplay: true,
    loop: true,
  });

  $(".project-slider").owlCarousel({
    items: 1,
    dots: true,
    // autoplay: true,
    loop: true,
    margin: 20,
    responsive: {
      768: { items: 2 },
      1200: { items: 3 },
    },
  });

  $(".more-projects").hide();

  $(".all-projects").click(function () {
    $(".more-projects").slideToggle("slow");
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
}, 1000);




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


//contact form validations
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

  // Collect input values
  const firstname = document.getElementById('firstname').value.trim();
  const lastname = document.getElementById('lastname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  let hasError = false;

  // Validate First Name
  if (firstname === '') {
    document.getElementById('error-firstname').textContent = 'First Name is required.';
    hasError = true;
  }

  // Validate Last Name
  if (lastname === '') {
    document.getElementById('error-lastname').textContent = 'Last Name is required.';
    hasError = true;
  }

  // Validate Phone Number
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById('error-phone').textContent = 'Phone Number must be 10 digits.';
    hasError = true;
  }

  // Validate Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('error-email').textContent = 'Please enter a valid email address.';
    hasError = true;
  }

  // Validate Subject
  if (subject === '') {
    document.getElementById('error-subject').textContent = 'Subject is required.';
    hasError = true;
  }

  // Validate Message
  if (message.length < 10) {
    document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
    hasError = true;
  }

  // Submit the form if no errors
  if (!hasError) {
    // Display the toast
    const successToast = new bootstrap.Toast(document.getElementById('successToast'));
    successToast.show();

    // Optionally, reset the form
    contactForm.reset();
  }
});