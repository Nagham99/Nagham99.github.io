// TYPEWRITER EFFECT
const words = [
    "Data Engineering",
    "AI Systems",
    "Machine Learning",
    "Scalable Analytics"
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


// PROJECT DATA
const projects = [
    {
        title: "Modern Data Pipeline",
        description: "Designed and deployed an end-to-end ETL pipeline using Airflow and Snowflake to process millions of records efficiently.",
        link: "#"
    },
    {
        title: "AI Forecasting Model",
        description: "Built a production-ready predictive model improving business demand forecasting accuracy by 27%.",
        link: "#"
    },
    {
        title: "Realtime Analytics Dashboard",
        description: "Engineered a real-time BI system integrating streaming data for executive decision-making.",
        link: "#"
    }
];

const projectGrid = document.getElementById("project-grid");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <a class="project-link" href="${project.link}">View Project</a>
    `;
    projectGrid.appendChild(card);
});

// SCROLL REVEAL
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
