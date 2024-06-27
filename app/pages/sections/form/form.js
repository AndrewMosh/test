// Получаем ссылки на инпуты и кнопку отправки
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const submitBtn = document.querySelector(".form__submit");
const oldPrice = document.querySelector(".form__price--old");
const newPrice = document.querySelector(".form__price--new");

function toggleHint(input) {
    const hint = input.nextElementSibling;
    if (input === document.activeElement) {
        hint.style.display = "block";
    } else {
        hint.style.display = "none";
    }
}

nameInput.addEventListener("focus", () => toggleHint(nameInput));
nameInput.addEventListener("blur", () => toggleHint(nameInput));
phoneInput.addEventListener("focus", () => toggleHint(phoneInput));
phoneInput.addEventListener("blur", () => toggleHint(phoneInput));

function limitToDigits(event) {
    if (!/^\d*$/.test(event.key)) {
        event.preventDefault();
    }
}

phoneInput.addEventListener("keypress", limitToDigits);

//Таймер
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateTimer() {
    let minutes = parseInt(minutesEl.textContent, 10);
    let seconds = parseInt(secondsEl.textContent, 10);

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

let timerInterval = setInterval(updateTimer, 1000);
