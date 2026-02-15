// TYPEWRITER EFFECT
const words = ["Predictive ML Models.", "Data Pipelines.", "Interactive Dashboards.", "AI-Driven Insights."];
let i = 0, j = 0, isDeleting = false;

function type() {
    const target = document.getElementById("typewriter");
    if (!target) return; // Guard clause

    let currentWord = words[i];
    
    if (isDeleting) {
        target.textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0) { 
            isDeleting = false; 
            i = (i + 1) % words.length; 
        }
    } else {
        target.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) { 
            isDeleting = true; 
            setTimeout(type, 2000); 
            return; 
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

// GITHUB REPO LOADER
const featuredRepos = [
    'Airbnb-price-category-prediction',
    'Reddit-Fake-Post-Detection-by-Looking-Only-at-the-Title-',
    'Cookies-Sales-Dashboard-PowerBI',
    'Sales-Dashboard-Excel',
    'Speed-Dating-Match-Prediction'
];

async function fetchRepos() {
    const container = document.getElementById('project-grid');
    if (!container) return; // Guard clause

    container.innerHTML = ""; // Clear existing content

    for (const repo of featuredRepos) {
        try {
            const res = await fetch(`https://api.github.com/repos/Nagham99/${repo}`);
            if (!res.ok) continue;
            const data = await res.json();
            
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h4>${data.name.replace(/-/g, ' ')}</h4>
                <p style="font-size: 0.9rem; color: #8892b0;">${data.description || 'Professional data solution.'}</p>
                <a href="${data.html_url}" target="_blank" class="project-link">View Repository →</a>
            `;
            container.appendChild(card);
        } catch (e) { 
            console.error("Error fetching repo:", e); 
        }
    }
}

// MAKE SURE IT RUNS
window.onload = () => {
    type();
    fetchRepos();
};
