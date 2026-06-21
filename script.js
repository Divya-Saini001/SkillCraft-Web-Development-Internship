// Navbar
const navbar = document.getElementById("navbar");

// Progress Bar
const progressBar = document.getElementById("progressBar");

// Scroll Event
window.addEventListener("scroll", () => {

    // Navbar color change on scroll
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Progress Bar
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollPercent =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
});

// Smooth Button Animation
const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) scale(1)";

    });

});

// Feature Cards Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-15px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});

// Dashboard Card Floating Effect
const dashboard =
    document.querySelector(".dashboard-card");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    dashboard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});