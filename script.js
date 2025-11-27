document.addEventListener("DOMContentLoaded", () => {
  // Simple, client-side tool "database"
  const tools = [
    {
      id: 1,
      name: "ChatGPT",
      category: "chat",
      description:
        "Advanced conversational AI for writing, brainstorming, and coding help.",
      tags: ["Chat", "Writing", "Assistant"],
      rating: 4.9,
      pricing: "Free + Paid",
      link: "https://chat.openai.com",
      featured: true
    },
    {
      id: 2,
      name: "Claude",
      category: "chat",
      description:
        "Helpful AI assistant focused on safety, reasoning, and long-form content.",
      tags: ["Chat", "Writing"],
      rating: 4.8,
      pricing: "Free + Paid",
      link: "https://claude.ai",
      featured: true
    },
    {
      id: 3,
      name: "Midjourney",
      category: "image",
      description:
        "AI image generation for stunning artwork, concept design, and creative visuals.",
      tags: ["Image", "Art"],
      rating: 4.7,
      pricing: "Paid",
      link: "https://www.midjourney.com",
      featured: true
    },
    {
      id: 4,
      name: "GitHub Copilot",
      category: "code",
      description:
        "Code completion and AI pair-programmer that speeds up development.",
      tags: ["Coding", "IDE"],
      rating: 4.6,
      pricing: "Paid",
      link: "https://github.com/features/copilot"
    },
    {
      id: 5,
      name: "Descript",
      category: "video",
      description:
        "Edit video and audio like a doc, with AI-powered cleanup and overdub.",
      tags: ["Video", "Audio"],
      rating: 4.5,
      pricing: "Paid",
      link: "https://www.descript.com"
    },
    {
      id: 6,
      name: "Notion AI",
      category: "business",
      description:
        "AI inside Notion for summarizing, drafting, and organizing knowledge.",
      tags: ["Productivity", "Docs"],
      rating: 4.4,
      pricing: "Paid",
      link: "https://www.notion.so/product/ai"
    }
  ];

  const categoryLabels = {
    chat: "Chat & Writing",
    image: "Image Generation",
    code: "Code & Dev",
    video: "Video & Audio",
    business: "Business & Productivity"
  };

  const toolsGrid = document.getElementById("tools-grid");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("tool-search");
  const navToggle = document.getElementById("nav-toggle");
  const primaryNav = document.getElementById("primary-nav");
  const submitForm = document.getElementById("submit-form");

  let activeCategory = "all";
  let searchTerm = "";

  function matchesFilters(tool) {
    const categoryMatches =
      activeCategory === "all" || tool.category === activeCategory;

    if (!categoryMatches) return false;

    if (!searchTerm) return true;

    const value = searchTerm.toLowerCase();
    const inName = tool.name.toLowerCase().includes(value);
    const inDescription = tool.description.toLowerCase().includes(value);
    const inTags = tool.tags.some((tag) =>
      tag.toLowerCase().includes(value)
    );

    return inName || inDescription || inTags;
  }

  function clearGrid() {
    while (toolsGrid.firstChild) {
      toolsGrid.removeChild(toolsGrid.firstChild);
    }
  }

  function renderTools() {
    const filtered = tools.filter(matchesFilters);
    clearGrid();

    if (filtered.length === 0) {
      const empty = document.createElement("p");
      empty.className = "tools-grid__empty";
      empty.textContent =
        "No tools match your filters yet. Try changing category or clearing your search.";
      toolsGrid.appendChild(empty);
      return;
    }

    filtered.forEach((tool) => {
      const card = document.createElement("article");
      card.className = "tool-card";

      if (tool.featured) {
        const badge = document.createElement("span");
        badge.className = "tool-card__badge";
        badge.textContent = "Featured";
        card.appendChild(badge);
      }

      const title = document.createElement("h3");
      title.className = "tool-card__title";
      title.textContent = tool.name;
      card.appendChild(title);

      const category = document.createElement("p");
      category.className = "tool-card__category";
      category.textContent = categoryLabels[tool.category] || "";
      card.appendChild(category);

      const description = document.createElement("p");
      description.className = "tool-card__description";
      description.textContent = tool.description;
      card.appendChild(description);

      const meta = document.createElement("div");
      meta.className = "tool-card__meta";

      const rating = document.createElement("span");
      rating.className = "tool-card__rating";
      rating.textContent = `⭐ ${tool.rating.toFixed(1)} / 5`;

      const pricing = document.createElement("span");
      pricing.className = "tool-card__pricing";
      pricing.textContent = tool.pricing;

      meta.appendChild(rating);
      meta.appendChild(pricing);
      card.appendChild(meta);

      const tagsWrapper = document.createElement("div");
      tagsWrapper.className = "tool-card__tags";

      tool.tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.className = "tool-card__tag";
        tagEl.textContent = tag;
        tagsWrapper.appendChild(tagEl);
      });

      card.appendChild(tagsWrapper);

      const actions = document.createElement("div");
      actions.className = "tool-card__actions";

      const visitLink = document.createElement("a");
      visitLink.className = "btn btn--primary";
      visitLink.href = tool.link;
      visitLink.target = "_blank";
      visitLink.rel = "noopener noreferrer";
      visitLink.textContent = "Visit Website";

      const reviewBtn = document.createElement("button");
      reviewBtn.type = "button";
      reviewBtn.className = "btn btn--ghost";
      reviewBtn.textContent = "Read Review";
      reviewBtn.addEventListener("click", () => {
        alert(
          "Reviews are not implemented yet. You can replace this with your own review pages."
        );
      });

      actions.appendChild(visitLink);
      actions.appendChild(reviewBtn);

      card.appendChild(actions);

      toolsGrid.appendChild(card);
    });
  }

  // Category filters
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.getAttribute("data-category");
      if (!category) return;

      activeCategory = category;

      filterTabs.forEach((t) => {
        t.classList.toggle("filter-tab--active", t === tab);
      });

      renderTools();
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchTerm = event.target.value.trim();
      renderTools();
    });
  }

  // Mobile nav toggle
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("site-nav--open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Simple submit-form UX (no real backend)
  if (submitForm) {
    submitForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(
        "Thanks for your interest! This demo form is not wired to a backend yet. Connect it to your backend or a form service to start collecting submissions."
      );
      submitForm.reset();
    });
  }

  // Initial render
  renderTools();
});
