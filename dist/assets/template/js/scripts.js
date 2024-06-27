(function () {
  var links = document.querySelectorAll('a[href*="#"]');
  if (links.length <= 0) return;
  var marginTop = 100;
  if (window.innerWidth <= 768) marginTop = 80;
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      marginTop = 80;
    }
  });
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var blockID = link.getAttribute("href").substr(1);
      if (blockID && blockID !== "") {
        var elem = document.querySelector("#".concat(blockID));
        if (elem) {
          e.preventDefault();
          window.scrollBy({
            top: elem.getBoundingClientRect().top - marginTop,
            left: 0,
            behavior: "smooth"
          });
        }
      }
    });
  });
})();
var testimonialContainer = document.querySelector(".reviews__wrapper");
var testimonialItems = document.querySelectorAll(".reviews__item");
var prevBtn = document.querySelector(".reviews__prev");
var nextBtn = document.querySelector(".reviews__next");
var testimonials = [{
  pic: "/assets/template/images/reviews_01.jpg",
  name: "Василий",
  text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet"
}, {
  pic: "/assets/template/images/reviews_02.jpg",
  name: "Александр",
  text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor "
}, {
  pic: "/assets/template/images/reviews_03.jpg",
  name: "Анатолий",
  text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor "
}, {
  pic: "/assets/template/images/reviews_04.jpg",
  name: "Игорь",
  text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor "
}, {
  pic: "/assets/template/images/reviews_05.jpg",
  name: "Петр",
  text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor "
}, {
  pic: "/assets/template/images/reviews_06.jpg",
  name: "Евгений",
  text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor"
}];
var currentIndex = 0;
function updateTestimonials() {
  testimonialItems.forEach(function (item, index) {
    var testimonial = testimonials[(currentIndex + index) % testimonials.length];
    item.querySelector(".reviews__image").src = testimonial.pic;
    item.querySelector(".reviews__name").textContent = testimonial.name;
    item.querySelector(".reviews__text").textContent = testimonial.text;
  });
}
function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonials();
}
function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonials();
}
prevBtn.addEventListener("click", prevTestimonial);
nextBtn.addEventListener("click", nextTestimonial);
updateTestimonials();
// Получаем ссылки на инпуты и кнопку отправки
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var submitBtn = document.querySelector(".form__submit");
var oldPrice = document.querySelector(".form__price--old");
var newPrice = document.querySelector(".form__price--new");
function toggleHint(input) {
  var hint = input.nextElementSibling;
  if (input === document.activeElement) {
    hint.style.display = "block";
  } else {
    hint.style.display = "none";
  }
}
nameInput.addEventListener("focus", function () {
  return toggleHint(nameInput);
});
nameInput.addEventListener("blur", function () {
  return toggleHint(nameInput);
});
phoneInput.addEventListener("focus", function () {
  return toggleHint(phoneInput);
});
phoneInput.addEventListener("blur", function () {
  return toggleHint(phoneInput);
});
function limitToDigits(event) {
  if (!/^\d*$/.test(event.key)) {
    event.preventDefault();
  }
}
phoneInput.addEventListener("keypress", limitToDigits);

//Таймер
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
function updateTimer() {
  var minutes = parseInt(minutesEl.textContent, 10);
  var seconds = parseInt(secondsEl.textContent, 10);
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes >= 0 && seconds >= 0) {
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  } else {
    minutesEl.style.color = "red";
    secondsEl.style.color = "red";
    oldPrice.style.textDecoration = "none";
    oldPrice.style.paddingBottom = 0;
    newPrice.style.display = "none";
    clearInterval(timerInterval);
  }
}
var timerInterval = setInterval(updateTimer, 1000);