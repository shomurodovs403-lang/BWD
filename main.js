// ===============================
// Mobile Menu
// ===============================
const menuBtn = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
});

// ===============================
// Sticky Header
// ===============================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// ===============================
// Smooth Scroll
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });

            nav.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", false);
        }
    });
});

// ===============================
// Test Drive Form
// ===============================
const form = document.querySelector(".test-drive__form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const model = form.querySelector("select").value;

    if (!name || !email || !model) {
        alert("Please fill in all required fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(
        `Thank you, ${name}!\n\nYour test drive request has been sent.\n\nModel: ${model}\nPhone: ${phone || "Not provided"}`
    );

    form.reset();
});

// ===============================
// Scroll Animation
// ===============================
const sections = document.querySelectorAll(
    ".model-card, .technology__text, .technology__visual, .about__text, .about__visual"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});