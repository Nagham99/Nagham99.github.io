document.addEventListener("DOMContentLoaded", function () {

    // ---------------- TYPEWRITER ----------------
    const words = [
        "Data Engineering",
        "Machine Learning",
        "Business Intelligence",
        "Data Analytics"
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
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 40 : 80);
    }

    if (typewriter) {
        typeEffect();
    }

    // ---------------- PROJECTS ----------------
    const projects = [
        {
            title: "Cookies Sales Dashboard – Power BI",
            description: "Interactive dashboard analyzing KPIs, trends, and regional performance insights.",
            image: "images/cookies.jpg",
            tech: ["Power BI", "Data Visualization"],
            link: "https://github.com/Nagham99/Cookies-Sales-Dashboard-PowerBI"
        },
        {
            title: "Sales Dashboard – Excel",
            description: "Professional Excel analytics dashboard using pivot tables and formulas.",
            image: "images/excel_dashbord.png",
            tech: ["Excel", "Business Analytics"],
            link: "https://github.com/Nagham99/Sales-Dashboard-Excel"
        },
        {
            title: "Airbnb Price Prediction",
            description: "Machine learning model predicting Airbnb price categories.",
            image: "images/airbnb.jpg",
            tech: ["Python", "ML", "Scikit-learn"],
            link: "https://github.com/Nagham99/Airbnb-price-category-prediction"
        },
        {
            title: "Reddit Fake Post Detection",
            description: "NLP classifier detecting fake Reddit posts from titles only.",
            image: "images/reddit.jpg",
            tech: ["NLP", "Python", "Classification"],
            link: "https://github.com/Nagham99/Reddit-Fake-Post-Detection-by-Looking-Only-at-the-Title-"
        },
        {
            title: "Speed Dating Match Prediction",
            description: "Predictive analytics model forecasting dating match outcomes.",
            image: "images/speeddating.jpg",
            tech: ["Regression", "Feature Engineering"],
            link: "https://github.com/Nagham99/Speed-Dating-Match-Prediction"
        }
    ];

    const projectGrid = document.getElementById("project-grid");

    if (projectGrid) {
        projects.forEach(project => {
            const card = document.createElement("a");
            card.href = project.link;
            card.target = "_blank";
            card.classList.add("project-card");

            const techTags = project.tech.map(t => `<span>${t}</span>`).join("");

            card.innerHTML = `
                <div class="project-image-wrapper">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-image-overlay"></div>
                </div>

                <div class="project-content">
                    <div class="tech-stack">${techTags}</div>
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                </div>
            `;

            projectGrid.appendChild(card);
        });

        // Scroll reveal
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
    }

});
