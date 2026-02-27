// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Navbar Active Highlight =====
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link => {
  if(link.getAttribute("href") === currentPage){
    link.style.color = "#0ea5e9";
    link.style.fontWeight = "bold";
  }
});

// ===== Hero Auto Slider (Only for index) =====
const hero = document.querySelector(".hero");

if(hero){
  const images = [
    "https://picsum.photos/1600/900?1",
    "https://picsum.photos/1600/900?2",
    "https://picsum.photos/1600/900?3"
  ];

  let i = 0;
  setInterval(() => {
    hero.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length;
  }, 4000);
}

// ===== Scroll Animation =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ===== Contact Form Validation =====
const form = document.querySelector("form");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const phone = form.querySelector("input[type='tel']").value;

    if(name === "" || email === "" || phone === ""){
      alert("Please fill all required fields!");
    } else {
      alert("Thank you! Your service request has been submitted.");
      form.reset();
    }
  });
}

// ===== Sticky Header Shadow Effect =====
window.addEventListener("scroll", function(){
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 50){
    navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
  }
});


// ===== Inquiry Popup =====

window.addEventListener("load", function(){

  const popup = document.getElementById("inquiryPopup");
  const closeBtn = document.querySelector(".close-popup");

  // Check if already closed before
  if(localStorage.getItem("popupClosed")){
    popup.style.display = "none";
  }

  closeBtn.addEventListener("click", function(){
    popup.style.display = "none";
    localStorage.setItem("popupClosed", "true");
  });

  document.getElementById("popupForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    popup.style.display = "none";
    localStorage.setItem("popupClosed", "true");
  });

});


// FAQ

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});