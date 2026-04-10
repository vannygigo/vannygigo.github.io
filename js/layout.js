function setActiveNav() {
    const links = document.querySelectorAll("#nav-links a");

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

function loadNavbar() {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            setActiveNav();

            const hamburger = document.getElementById("hamburger");
            const navLinks = document.getElementById("nav-links");

            if (hamburger) {
                hamburger.addEventListener("click", () => {
                    navLinks.classList.toggle("active");
                    hamburger.classList.toggle("active");
                });
            }
        });
}

function loadFooter() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
    loadFooter();
});