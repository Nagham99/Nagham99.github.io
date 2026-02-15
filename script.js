const words = ["Predictive ML Models.", "Data Pipelines.", "Interactive Dashboards.", "AI-Driven Insights."];
let i = 0, j = 0, isDeleting = false;

function type() {
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
        if (j === currentWord.length) { isDeleting = true; setTimeout(type, 2000); return; }
    }
    setTimeout(type, isDeleting ? 50 : 100);
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

    // Show a loading message
    container.innerHTML = "<p style='color: #64ffda;'>Loading my latest work...</p>";

    try {
        const response = await fetch(`https://api.github.com/users/Nagham99/repos`);
        const allRepos = await response.json();
        
        // Filter only the ones you want to show
        const displayRepos = allRepos.filter(repo => featuredRepos.includes(repo.name));

        container.innerHTML = ""; // Clear loading message

        displayRepos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="repo-badge">GitHub Project</div>
                <h4>${repo.name.replace(/-/g, ' ')}</h4>
                <p>${repo.description || 'End-to-end data solution and analysis.'}</p>
                <div class="repo-footer">
                    <span>${repo.language || 'Data Science'}</span>
                    <a href="${repo.html_url}" target="_blank" class="project-link">View Code →</a>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        container.innerHTML = "<p>Please visit my GitHub directly to see my projects.</p>";
        console.error("GitHub Fetch Error:", e);
    }
}

window.onload = () => {
    type();
    fetchRepos();
};
