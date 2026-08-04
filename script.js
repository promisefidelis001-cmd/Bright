

console.log("King Bright Portfolio Loaded Successfully!");

// ==========================================
// Welcome Message
// ==========================================

window.addEventListener("load", function () {

    alert("Welcome to King Bright's Portfolio!");

});

// ==========================================
// Hero Button
// ==========================================

const heroButton = document.querySelector(".btn");

if (heroButton) {

    heroButton.addEventListener("click", function () {

        console.log("View Projects button clicked.");

    });

}

// ==========================================
// Navigation Active Link
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// Reveal Sections on Scroll
// ==========================================

const revealElements = document.querySelectorAll("section");

function revealSection() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealSection);

revealSection();

// ==========================================
// Typing Effect
// ==========================================

const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {

    const text = "Front-End Web Developer";

    let index = 0;

    heroTitle.textContent = "";

    function typeText() {

        if (index < text.length) {

            heroTitle.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 100);

        }

    }

    typeText();

}

// ==========================================
// Back To Top Button
// ==========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 18px";
topButton.style.fontSize = "20px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.background = "#38bdf8";
topButton.style.color = "#fff";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// Automatic Footer Year
// ==========================================

const footerText = document.querySelector("footer p:last-child");

if (footerText) {

    footerText.innerHTML =
        "© " + new Date().getFullYear() + " King Bright. All Rights Reserved.";

}

// ==========================================
// Scroll Progress Bar
// ==========================================

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#38bdf8";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", function () {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/.clock-box{

    margin-top:25px;
    text-align:center;
}

.clock-box h3{

    color:#38bdf8;
    font-size:18px;
    margin-bottom:8px;
}

#clock{

    font-size:28px;
    font-weight:500;
    letter-spacing:1px;
    color:#ffffff;

}
