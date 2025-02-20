const newsData = [
    {
        title: "New Project Launch",
        date: "2024-02-20",
        image: "WhatsApp Image 2025-01-29 at 11.43.07 PM.jpeg",
    
        link: "#"
    },
    {
        title: "من زياره مستشفي ٥٧٣٥٧",
        date: "2024-02-15",
        image: "WhatsApp Image 2025-01-29 at 11.44.26 PM.jpeg",

        link: "#"
    },
];

function createNewsCard(news) {
    return `
        <div class="news-card">
            <img src="${news.image}" alt="${news.title}" class="news-image">
            <div class="news-content">
                <div class="news-date">${formatDate(news.date)}</div>
                <h3 class="news-title">${news.title}</h3>

                <a href="${news.link}" class="read-more">Read More →</a>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function renderNews() {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = newsData.map(news => createNewsCard(news)).join('');
}

document.addEventListener('DOMContentLoaded', renderNews);
