const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});
document.querySelectorAll("#navbar a").forEach(link => link.addEventListener("click", () => navbar.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const senderEmail = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");
    if (!name || !senderEmail || !subject || !message) {
        status.textContent = "Please fill in all fields.";
        return;
    }
    const body = `Hi Lohitha,\n\n${message}\n\nFrom: ${name}\nReply email: ${senderEmail}`;
    window.location.href = `mailto:tatalohitha3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your email app should open with a draft. Review it and press Send there.";
});