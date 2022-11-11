var container = document.querySelector(".container");
var thankyouContainer = document.querySelector(".thankyou");
var submitButton = document.querySelectorAll("button")[5];
var rating = document.getElementById("rating");
var rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    thankyouContainer.classList.remove("hidden")
    container.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})