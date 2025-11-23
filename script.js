let currentPage = 1;
const itemsPerPage = 10;
let currentData = [...tools];

// Render Table with Pagination
function render(data) {
    tbody.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = data.slice(start, start + itemsPerPage);

    tbody.innerHTML = paginated.map(t => `
        <tr>
        <td>${highlight(t.name)}</td>
        <td>${highlight(t.cat)}</td>
        <td>⭐ ${t.rate}</td>
        <td>${t.price}</td>
        <td>${highlight(t.desc)}</td>
        <td><a href="${t.url}" target="_blank" class="action">Visit →</a></td>
        </tr>
    `).join("");

    document.getElementById("pageInfo").textContent =
        `Page ${currentPage} / ${Math.ceil(data.length / itemsPerPage)}`;
}

// Highlight search term
function highlight(text) {
    if (!search.value) return text;
    return text.replace(new RegExp(search.value, "gi"), match => `<mark>${match}</mark>`);
}

// Filters
filterButtons.forEach(btn =>
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentPage = 1;
        const cat = btn.dataset.category;
        currentData = (cat === "all") ? tools : tools.filter(t => t.cat === cat);
        render(currentData);
    })
);

// Search
search.addEventListener("input", () => {
    currentPage = 1;
    currentData = tools.filter(t =>
        t.name.toLowerCase().includes(search.value.toLowerCase()) ||
        t.desc.toLowerCase().includes(search.value.toLowerCase()) ||
        t.cat.toLowerCase().includes(search.value.toLowerCase())
    );
    render(currentData);
});

// Sort
document.getElementById("sort").addEventListener("change", e => {
    const val = e.target.value;
    if (val === "alpha") currentData.sort((a,b) => a.name.localeCompare(b.name));
    if (val === "rating") currentData.sort((a,b) => b.rate - a.rate);
    if (val === "price") currentData.sort((a,b) => 
       parseFloat(a.price) - parseFloat(b.price)
    );
    render(currentData);
});

// Pagination
document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) currentPage--;
    render(currentData);
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(currentData.length/itemsPerPage)) currentPage++;
    render(currentData);
});

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", () =>
    document.body.classList.toggle("dark")
);

// First Load
render(tools);
