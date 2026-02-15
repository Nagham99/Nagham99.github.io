const words = ["ML Models", "Data Pipelines", "Power BI Dashboards", "AI Solutions"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
    const target = document.getElementById("typewriter");
    if (!target) return;

    let currentWord = words[i];
    if (isDeleting) {
        target.textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0) { isDeleting = false; i = (i + 1) % words.length; }
    } else {
        target.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) { isDeleting = true; setTimeout(typeEffect, 2000); return; }
    }
    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

const featuredRepos = [
    'Airbnb-price-category-prediction',
    'Reddit-Fake-Post-Detection-by-Looking-Only-at-the-Title-',
    'Cookies-Sales-Dashboard-PowerBI',
    'Sales-Dashboard-Excel',
    'Speed-Dating-Match-Prediction'
];

async function fetchRepos() {
    const container = document.getElementById('project-grid');
    if (!container) return;

    try {
        const response = await fetch(`https://api.github.com/users/Nagham99/repos`);
        const allRepos = await response.json();
        const displayRepos = allRepos.filter(repo => featuredRepos.includes(repo.name));

        container.innerHTML = "";
        displayRepos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h4>${repo.name.replace(/-/g, ' ')}</h4>
                <p>${repo.description || 'Professional end-to-end data solution.'}</p>
                <a href="${repo.html_url}" target="_blank" class="project-link">View Project →</a>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        console.error("Fetch error", e);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    fetchRepos();
});
