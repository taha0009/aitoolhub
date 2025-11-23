const tools = [
    {name:"ChatGPT",cat:"writing",rate:"4.9",price:"Free / $20/mo",desc:"Best all-round AI chatbot",url:"https://chatgpt.com"},
    {name:"Claude 3.5",cat:"writing",rate:"4.9",price:"Free / $20/mo",desc:"Strongest reasoning AI",url:"https://claude.ai"},
    {name:"Gemini",cat:"writing",rate:"4.7",price:"Free",desc:"Google's fastest AI",url:"https://gemini.google.com"},
    {name:"Midjourney",cat:"image",rate:"4.8",price:"$10/mo",desc:"Best AI art generator",url:"https://midjourney.com"},
    {name:"Leonardo AI",cat:"image",rate:"4.7",price:"Free / $10/mo",desc:"Great for realistic images",url:"https://leonardo.ai"},
    {name:"Flux",cat:"image",rate:"4.9",price:"Free",desc:"New open-source king",url:"https://blackforestlabs.ai"},
    {name:"Runway Gen-3",cat:"video",rate:"4.8",price:"$12/mo",desc:"Best text-to-video",url:"https://runwayml.com"},
    {name:"Pika Labs",cat:"video",rate:"4.6",price:"Free / $8/mo",desc:"Fast & fun video AI",url:"https://pika.art"},
    {name:"GitHub Copilot",cat:"coding",rate:"4.9",price:"$10/mo",desc:"#1 AI coding assistant",url:"https://github.com/features/copilot"},
    {name:"Cursor",cat:"coding",rate:"4.8",price:"Free / $20/mo",desc:"Full AI code editor",url:"https://cursor.sh"},
    {name:"Replit Agent",cat:"coding",rate:"4.6",price:"Free tier",desc:"Build apps with AI",url:"https://replit.com"},
    {name:"Perplexity",cat:"writing",rate:"4.8",price:"Free / $20/mo",desc:"AI search engine",url:"https://perplexity.ai"}
];

const tbody = document.querySelector("#tools-table tbody");
const search = document.getElementById("search");

function render(data) {
    tbody.innerHTML = "";
    data.forEach(t => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${t.name}</td>
            <td>${t.cat}</td>
            <td>⭐ ${t.rate}</td>
            <td>${t.price}</td>
            <td>${t.desc}</td>
            <td><a href="${t.url}" target="_blank" class="action">Visit →</a></td>
        `;
        tbody.appendChild(row);
    });
}

document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filters .active").classList.remove("active");
        btn.classList.add("active");
        const cat = btn.dataset.category;
        render(cat === "all" ? tools : tools.filter(t => t.cat === cat));
    });
});

search.addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    render(tools.filter(t => 
        t.name.toLowerCase().includes(term) || 
        t.desc.toLowerCase().includes(term) || 
        t.cat.includes(term)
    ));
});

render(tools); // First load
