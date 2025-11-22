// script.js – FULLY AUTO-UPDATING VERSION
const AIRTABLE_BASE = "YOUR_BASE_ID";        // e.g. appXXXXXXXXXXXXXX
const AIRTABLE_TABLE = "Tools";              // change if you renamed
const AIRTABLE_API_KEY = "YOUR_API_KEY";     // keep this secret!

const API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`;

let tools = [];

async function loadTools() {
    try {
        const response = await fetch(`${API_URL}?api_key=${AIRTABLE_API_KEY}`);
        const data = await response.json();
        tools = data.records.map(record => record.fields);
        renderTools(tools);
    } catch (err) {
        document.querySelector('#tools-table tbody').innerHTML = 
            `<tr><td colspan="6">Error loading tools – check console</td></tr>`;
        console.error(err);
    }
}

function renderTools(data) {
    const tableBody = document.querySelector('#tools-table tbody');
    tableBody.innerHTML = '';
    data.forEach(tool => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${tool.Name || ''}</td>
            <td>${tool.Category || ''}</td>
            <td>${tool.Rating || 'N/A'}</td>
            <td>${tool.Pricing || ''}</td>
            <td>${tool.Description || ''}</td>
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
