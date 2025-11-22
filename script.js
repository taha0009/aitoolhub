// Sample data: 20+ real AI tools (add your affiliates here)
const tools = [
    { name: "ChatGPT", category: "writing", rating: "4.8", pricing: "$20/mo", desc: "AI chatbot for writing and ideas.", url: "https://chat.openai.com" },
    { name: "Midjourney", category: "image", rating: "4.7", pricing: "$10/mo", desc: "AI image generator via Discord.", url: "https://midjourney.com" },
    { name: "GitHub Copilot", category: "coding", rating: "4.9", pricing: "$10/mo", desc: "AI code completion for devs.", url: "https://github.com/features/copilot" },
    { name: "Notion AI", category: "productivity", rating: "4.6", pricing: "$10/mo", desc: "AI inside Notion for notes and tasks.", url: "https://www.notion.so/product/ai" },
    { name: "Jasper", category: "writing", rating: "4.5", pricing: "$39/mo", desc: "AI writing assistant for marketers.", url: "https://jasper.ai" },
    { name: "DALL-E", category: "image", rating: "4.7", pricing: "Free tier", desc: "OpenAI's image creator from text.", url: "https://openai.com/dall-e-2" },
    { name: "Replit Ghostwriter", category: "coding", rating: "4.4", pricing: "$10/mo", desc: "AI coding helper in Replit.", url: "https://replit.com/site/ghostwriter" },
    { name: "Grammarly", category: "writing", rating: "4.8", pricing: "Free/Premium $12/mo", desc: "AI grammar and style checker.", url: "https://www.grammarly.com" },
    // Add more: Aim for 50–100 for SEO. Replace URLs with affiliates.
    { name: "Runway ML", category: "image", rating: "4.6", pricing: "$15/mo", desc: "AI video and image editing.", url: "https://runwayml.com" },
    { name: "Tabnine", category: "coding", rating: "4.5", pricing: "Free/Pro $12/mo", desc: "AI autocomplete for code.", url: "https://www.tabnine.com" }
    // ... (expand this array)
];

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#tools-table tbody');
    const searchInput = document.getElementById('search');
    const filterBtns = document.querySelectorAll('.filters button');

    function renderTools(data) {
        tableBody.innerHTML = '';
        data.forEach(tool => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${tool.name}</td>
                <td>${tool.category}</td>
                <td>${tool.rating}</td>
                <td>${tool.pricing}</td>
                <td>${tool.desc}</td>
                <td><a href="${tool.url}" target="_blank" class="action">Visit Tool</a></td>
            `;
        });
    }

    // Initial render
    renderTools(tools);

    // Search
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = tools.filter(tool => 
            tool.name.toLowerCase().includes(query) || 
            tool.desc.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query)
        );
        renderTools(filtered);
    });

    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            const filtered = category === 'all' ? tools : tools.filter(tool => tool.category === category);
            renderTools(filtered);
        });
    });

    // Newsletter (fake submit for demo – add real backend later)
    document.querySelector('.newsletter').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks! Weekly AI tips coming your way.');
    });
});
