
document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    const scrollCallback = () => {
        scrollElements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
                el.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", scrollCallback);
    scrollCallback(); 
});


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email");

    if (!email.value.includes("@")) {
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
        alert("Form submitted successfully!");
    }
});
