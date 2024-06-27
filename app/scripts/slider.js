const testimonialContainer = document.querySelector(".reviews__wrapper");
const testimonialItems = document.querySelectorAll(".reviews__item");
const prevBtn = document.querySelector(".reviews__prev");
const nextBtn = document.querySelector(".reviews__next");

const testimonials = [
    {
        pic: "/assets/template/images/reviews_01.jpg",
        name: "Василий",
        text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet",
    },
    {
        pic: "/assets/template/images/reviews_02.jpg",
        name: "Александр",
        text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor ",
    },
    {
        pic: "/assets/template/images/reviews_03.jpg",
        name: "Анатолий",
        text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor ",
    },
    {
        pic: "/assets/template/images/reviews_04.jpg",
        name: "Игорь",
        text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor ",
    },
    {
        pic: "/assets/template/images/reviews_05.jpg",
        name: "Петр",
        text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor ",
    },
    {
        pic: "/assets/template/images/reviews_06.jpg",
        name: "Евгений",
        text: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ametlorem ipsum dolor",
    },
];

let currentIndex = 0;

function updateTestimonials() {
    testimonialItems.forEach((item, index) => {
        const testimonial = testimonials[(currentIndex + index) % testimonials.length];
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
