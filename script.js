const words = ["ML Models", "Data Pipelines", "Visual Dashboards", "AI Solutions"];
let i = 0, j = 0, isDeleting = false;

function type() {
    const target = document.getElementById("typewriter");
    let currentWord = words[i];
    if (isDeleting) {
        target.textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0) { isDeleting = false; i = (i + 1) % words.length; }
    } else {
        target.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) { isDeleting = true; setTimeout(type, 2000); return; }
    }
    setTimeout(type, isDeleting ? 40 : 80);
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
                <p>${repo.description || 'Full-stack data solution architected for business scale.'}</p>
                <a href="${repo.html_url}" target="_blank" class="project-link">Source Code —</a>
            `;
            container.appendChild(card);
        });
    } catch (e) { console.error(e); }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
    fetchRepos();
});
