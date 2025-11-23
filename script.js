// AI Tools Data
const aiTools = [
  {
    name: "ChatGPT",
    category: "writing",
    rating: 4.8,
    pricing: "freemium",
    description: "Advanced AI chatbot for conversation, content creation, and problem-solving with natural language processing.",
    url: "https://chat.openai.com"
  },
  {
    name: "Claude 3.5",
    category: "writing",
    rating: 4.7,
    pricing: "freemium",
    description: "AI assistant focused on helpful, harmless, and honest conversations with strong reasoning capabilities.",
    url: "https://claude.ai"
  },
  {
    name: "Gemini",
    category: "writing",
    rating: 4.6,
    pricing: "free",
    description: "Google's AI assistant integrated with search for comprehensive information and creative tasks.",
    url: "https://gemini.google.com"
  },
  {
    name: "Midjourney",
    category: "image",
    rating: 4.9,
    pricing: "paid",
    description: "AI image generator creating stunning, artistic visuals from text descriptions via Discord.",
    url: "https://midjourney.com"
  },
  {
    name: "Leonardo AI",
    category: "image",
    rating: 4.5,
    pricing: "freemium",
    description: "Powerful image generation platform with fine-tuned models and extensive customization options.",
    url: "https://leonardo.ai"
  },
  {
    name: "DALL-E 3",
    category: "image",
    rating: 4.7,
    pricing: "paid",
    description: "OpenAI's advanced image generation model with improved understanding of nuance and detail.",
    url: "https://openai.com/dall-e-3"
  },
  {
    name: "Runway ML",
    category: "video",
    rating: 4.6,
    pricing: "freemium",
    description: "Creative suite with AI tools for video editing, generation, and visual effects.",
    url: "https://runwayml.com"
  },
  {
    name: "Pika Labs",
    category: "video",
    rating: 4.4,
    pricing: "freemium",
    description: "AI video generation platform turning text and images into short video clips.",
    url: "https://pika.art"
  },
  {
    name: "GitHub Copilot",
    category: "coding",
    rating: 4.8,
    pricing: "paid",
    description: "AI pair programmer that suggests code and entire functions in real-time.",
    url: "https://github.com/features/copilot"
  },
  {
    name: "Replit",
    category: "coding",
    rating: 4.3,
    pricing: "freemium",
    description: "Cloud-based IDE with AI assistance for coding, debugging, and deployment.",
    url: "https://replit.com"
  },
  {
    name: "Notion AI",
    category: "productivity",
    rating: 4.5,
    pricing: "paid",
    description: "AI writing assistant integrated into Notion for content creation and organization.",
    url: "https://notion.so"
  },
  {
    name: "Grammarly",
    category: "writing",
    rating: 4.6,
    pricing: "freemium",
    description: "AI-powered writing assistant for grammar checking, tone adjustment, and clarity improvements.",
    url: "https://grammarly.com"
  },
  {
    name: "Jasper",
    category: "writing",
    rating: 4.4,
    pricing: "paid",
    description: "AI content creation platform for marketers and businesses with brand voice customization.",
    url: "https://jasper.ai"
  },
  {
    name: "Stable Diffusion",
    category: "image",
    rating: 4.5,
    pricing: "free",
    description: "Open-source image generation model with extensive community models and customization.",
    url: "https://stability.ai"
  },
  {
    name: "Tabnine",
    category: "coding",
    rating: 4.4,
    pricing: "freemium",
    description: "AI code completion tool supporting multiple languages and integrated development environments.",
    url: "https://tabnine.com"
  },
  {
    name: "Copy.ai",
    category: "writing",
    rating: 4.3,
    pricing: "freemium",
    description: "AI writing tool for marketing copy, social media content, and business communications.",
    url: "https://copy.ai"
  },
  {
    name: "Descript",
    category: "video",
    rating: 4.5,
    pricing: "freemium",
    description: "All-in-one video and podcast editing with AI-powered transcription and editing features.",
    url: "https://descript.com"
  },
  {
    name: "Fireflies.ai",
    category: "productivity",
    rating: 4.4,
    pricing: "freemium",
    description: "AI notetaker for meetings that transcribes, summarizes, and analyzes conversations.",
    url: "https://fireflies.ai"
  },
  {
    name: "Otter.ai",
    category: "productivity",
    rating: 4.3,
    pricing: "freemium",
    description: "AI-powered transcription service for meetings, interviews, and voice notes.",
    url: "https://otter.ai"
  },
  {
    name: "Canva AI",
    category: "image",
    rating: 4.4,
    pricing: "freemium",
    description: "Design platform with AI tools for image generation, editing, and content creation.",
    url: "https://canva.com"
  }
];

// DOM Elements
const toolsBody = document.getElementById('tools-body');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filters button');
let currentCategory = 'all';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  renderTools(aiTools);
  setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener('input', function(e) {
    currentSearch = e.target.value.toLowerCase();
    filterTools();
  });

  // Filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Update current category and filter
      currentCategory = this.dataset.category;
      filterTools();
    });
  });
}

// Filter tools based on category and search
function filterTools() {
  let filteredTools = aiTools;
  
  // Filter by category
  if (currentCategory !== 'all') {
    filteredTools = filteredTools.filter(tool => tool.category === currentCategory);
  }
  
  // Filter by search term
  if (currentSearch) {
    filteredTools = filteredTools.filter(tool => 
      tool.name.toLowerCase().includes(currentSearch) ||
      tool.description.toLowerCase().includes(currentSearch) ||
      tool.category.toLowerCase().includes(currentSearch)
    );
  }
  
  renderTools(filteredTools);
}

// Render tools to the table
function renderTools(tools) {
  toolsBody.innerHTML = '';
  
  if (tools.length === 0) {
    toolsBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2rem;">
          No tools found matching your criteria. Try adjusting your search or filters.
        </td>
      </tr>
    `;
    return;
  }
  
  tools.forEach(tool => {
    const row = document.createElement('tr');
    
    // Format rating with stars
    const stars = '★'.repeat(Math.floor(tool.rating)) + 
                 (tool.rating % 1 >= 0.5 ? '½' : '') +
                 '☆'.repeat(5 - Math.ceil(tool.rating));
    
    row.innerHTML = `
      <td class="tool-name">${tool.name}</td>
      <td>
        <span class="category-badge category-${tool.category}">
          ${tool.category}
        </span>
      </td>
      <td class="rating" title="${tool.rating}/5">${stars}</td>
      <td class="pricing ${tool.pricing}">
        ${tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
      </td>
      <td>${tool.description}</td>
      <td>
        <a href="${tool.url}" target="_blank" rel="noopener" class="visit-btn">
          Visit
        </a>
      </td>
    `;
    
    toolsBody.appendChild(row);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize AdSense after page load
window.addEventListener('load', function() {
  // AdSense initialization
  if (window.adsbygoogle) {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
  
  // Add some interactive features
  enhanceUserExperience();
});

// Additional UX enhancements
function enhanceUserExperience() {
  // Add loading animation for table
  const table = document.getElementById('tools-table');
  if (table) {
    table.style.opacity = '0';
    table.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
      table.style.opacity = '1';
    }, 300);
  }
  
  // Add tool count display
  const toolsSection = document.querySelector('.tools-section h2');
  if (toolsSection) {
    const countElement = document.createElement('span');
    countElement.className = 'tool-count';
    countElement.style.fontSize = '1rem';
    countElement.style.marginLeft = '1rem';
    countElement.style.color = '#6b7280';
    countElement.textContent = `(${aiTools.length} tools)`;
    toolsSection.appendChild(countElement);
  }
}
