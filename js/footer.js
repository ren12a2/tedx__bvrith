// Show "Scroll to Top" button when scrolling down
window.addEventListener("scroll", function () {
    let scrollTopBtn = document.querySelector(".scroll-top");
    if (window.scrollY > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Scroll to top when clicking the button
document.querySelector(".scroll-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
