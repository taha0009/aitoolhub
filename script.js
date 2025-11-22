// script.js – CORS-FIXED VERSION with Proxy
const AIRTABLE_BASE = "YOUR_BASE_ID";        // e.g. appXXXXXXXXXXXXXX
const AIRTABLE_TABLE = "Tools";              // change if you renamed
const AIRTABLE_API_KEY = "YOUR_API_KEY";     // keep this secret!

// Add this proxy URL (free, reliable for 2025)
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';  // Or use 'https://api.allorigins.win/raw?url=' for better uptime
const API_URL = `${PROXY_URL}https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`;

let tools = [];

async function loadTools() {
    try {
        // First, "request temporary access" to the proxy (only once per session)
        await fetch(PROXY_URL + 'https://api.airtable.com', { method: 'GET' });
        
        const response = await fetch(`${API_URL}?api_key=${AIRTABLE_API_KEY}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        const data = await response.json();
        tools = data.records.map(record => record.fields);
        renderTools(tools);
    } catch (err) {
        console.error('Fetch error details:', err);  // Better logging
        const tableBody = document.querySelector('#tools-table tbody');
        tableBody.innerHTML = 
            `<tr><td colspan="6">Loading tools... (Check console for details or try refreshing)</td></tr>`;
    }
}

function renderTools(data) {
    const tableBody = document.querySelector('#tools-table tbody');
    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6">No tools found – add some in Airtable!</td></tr>`;
        return;
    }
    tableBody.innerHTML = '';
    data.forEach(tool => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${tool.Name || 'N/A'}</td>
            <td>${tool.Category || 'N/A'}</td>
            <td>${tool.Rating || 'N/A'}</td>
            <td>${tool.Pricing || 'N/A'}</td>
            <td>${tool.Description || 'N/A'}</td>
            <td><a href="${tool['URL (affiliate link)'] || '#'}" target="_blank" class="action">Visit →</a></td>
        `;
    });
}

// Search & filter (same as before)
document.getElementById('search')?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = tools.filter(t => 
        (t.Name?.toLowerCase().includes(query)) || 
        (t.Description?.toLowerCase().includes(query))
    );
    renderTools(filtered);
});

// Run on load
document.addEventListener('DOMContentLoaded', loadTools);
