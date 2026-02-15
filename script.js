// ------------------ TYPEWRITER ------------------
const words = [
    "Data Engineering",
    "Machine Learning",
    "Business Intelligence",
    "AI Systems"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typewriter.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();


// ------------------ YOUR REAL PROJECTS ------------------
const projects = [
    {
        title: "Cookies Sales Dashboard – Power BI",
        description: "Interactive Power BI dashboard analyzing cookie sales performance, KPIs, trends, and regional insights.",
        link: "https://github.com/Nagham99/Cookies-Sales-Dashboard-PowerBI"
    },
    {
        title: "Sales Dashboard – Excel",
        description: "Professional Excel-based sales analytics dashboard using pivot tables, charts, and advanced formulas.",
        link: "https://github.com/Nagham99/Sales-Dashboard-Excel"
    },
    {
        title: "Airbnb Price Category Prediction",
        description: "Machine learning model predicting Airbnb price categories using feature engineering and classification models.",
        link: "https://github.com/Nagham99/Airbnb-price-category-prediction"
    },
    {
        title: "Reddit Fake Post Detection",
        description: "NLP-based fake post detection system analyzing Reddit titles using text preprocessing and ML classifiers.",
        link: "https://github.com/Nagham99/Reddit-Fake-Post-Detection-by-Looking-Only-at-the-Title-"
    },
    {
        title: "Speed Dating Match Prediction",
        description: "Predictive modeling project analyzing behavioral and demographic features to forecast dating matches.",
        link: "https://github.com/Nagham99/Speed-Dating-Match-Prediction"
    }
];

const projectGrid = document.getElementById("project-grid");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <a class="project-link" href="${project.link}" target="_blank">View on GitHub</a>
    `;

    projectGrid.appendChild(card);
});


// ------------------ SCROLL REVEAL ------------------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".project-card").forEach(card => {
    observer.observe(card);
});
