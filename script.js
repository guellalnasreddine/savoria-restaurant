// =========================
// Mobile Navigation
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle menu
menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link
document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        navLinks.classList.contains("active")
    ) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";

        menuToggle.focus();
    }

});
// =========================
// Contact Form Submission (Netlify AJAX)
// =========================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // منع الإرسال التقليدي للصفحة

        const formData = new FormData(contactForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => {
            // الانتقال إلى صفحة الشكر بعد نجاح الإرسال
            window.location.href = "/thank-you.html";
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
            alert("حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى.");
        });
    });
}