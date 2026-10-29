// ===================================
// MOBILE NAVBAR
// ===================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


// Close menu after clicking a link

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// Close menu using Escape

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const header = document.getElementById("header");

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    header.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

    backToTop.classList.toggle(
        "show",
        window.scrollY > 400
    );

});


// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

const sections = document.querySelectorAll("main section[id]");

const activeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.id;

            navItems.forEach(link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${currentId}`
                );

            });

        }

    });

}, {
    rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => {
    activeObserver.observe(section);
});


// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ===================================
// TYPING ANIMATION
// ===================================

const typingElement = document.querySelector(".typing-text");

const roles = [
    "Software Developer",
    "Web Developer",
    "Java Programmer",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    let speed = deleting ? 45 : 85;

    if (!deleting && charIndex === currentRole.length) {

        deleting = true;
        speed = 1300;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        speed = 350;

    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===================================
// BACK TO TOP
// ===================================

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===================================
// CONTACT FORM
// ===================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    // Replace with your actual email

    const receiverEmail = "ts6448019@gmail.com";

    const emailSubject = encodeURIComponent(
        `Portfolio Contact: ${subject}`
    );

    const emailBody = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    const mailtoLink =
        `mailto:${receiverEmail}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;

});


// ===================================
// DYNAMIC COPYRIGHT YEAR
// ===================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===================================
// CONSOLE MESSAGE
// ===================================

console.log(
    "%cWelcome to Tushar Sharma's Portfolio!",
    "color: #EB895B; font-size: 18px; font-weight: bold;"
);
