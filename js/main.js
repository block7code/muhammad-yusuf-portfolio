/**
 * Main Application Logic for Fharza Yusuf's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderProjects('all');
  initProjectFilters();
  initModal();
  initContactForm();
  initScrollAnimations();
  initBackToTop();
  
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ==========================================================================
   THEME TOGGLER (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  // Check persisted theme or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'light');
  } else if (!prefersDark) {
    // Default to dark as primary aesthetic, but honor light if chosen
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme === 'light');
      
      showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} mode`);
    });
  }

  function updateThemeIcon(isLight) {
    if (!themeIcon) return;
    if (isLight) {
      // Sun icon for light mode
      themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else {
      // Moon icon for dark mode
      themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  }
}

/* ==========================================================================
   NAVIGATION & ACTIVE LINK SPY
   ========================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile menu toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Scroll spy
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   PROJECTS RENDERING & FILTERING
   ========================================================================== */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsContainer');
  if (!container || !PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

  const filteredProjects = filter === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  container.innerHTML = filteredProjects.map(project => `
    <div class="project-card reveal-on-scroll" data-id="${project.id}">
      <div class="project-thumb">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <span class="project-badge">${project.categoryLabel}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-card-footer">
          <span class="view-details-link">
            Details & Architecture
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
          <span class="font-mono" style="font-size: 0.75rem; color: var(--accent-teal);">
            ${project.metrics ? project.metrics.split('|')[0] : ''}
          </span>
        </div>
      </div>
    </div>
  `).join('');

  // Re-attach click listeners to project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-id');
      openProjectModal(projectId);
    });
  });

  // Trigger reveal animation for newly inserted cards
  setTimeout(() => {
    document.querySelectorAll('.project-card.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
  }, 50);
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

/* ==========================================================================
   PROJECT DETAIL MODAL
   ========================================================================== */
function initModal() {
  const modalOverlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeProjectModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeProjectModal();
      }
    });
  }
}

function openProjectModal(projectId) {
  const modalOverlay = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  
  if (!project || !modalContent) return;

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="project-badge" style="position: static; margin-bottom: 0.75rem; display: inline-block;">
        ${project.categoryLabel}
      </span>
      <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem;">${project.title}</h2>
      <p style="color: var(--accent-cyan); font-weight: 500;">${project.subtitle}</p>
    </div>

    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.75rem; aspect-ratio: 16/9;">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h4 style="margin-bottom: 0.6rem; font-size: 1.1rem;">Overview & Architecture</h4>
      <p style="font-size: 0.98rem; line-height: 1.7; color: var(--text-secondary);">${project.description}</p>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h4 style="margin-bottom: 0.6rem; font-size: 1.1rem;">Key Highlights & Features</h4>
      <ul style="list-style: none;">
        ${project.features.map(f => `
          <li style="position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.95rem;">
            <span style="position: absolute; left: 0; color: var(--accent-teal); font-weight: bold;">✔</span>
            ${f}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="margin-bottom: 0.6rem; font-size: 1.1rem;">Tech Stack & Integrations</h4>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">${tag}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          View Source Repository
        </a>
      ` : ''}
      ${project.liveUrl && project.liveUrl !== '#' ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Open Live Demo / Package
        </a>
      ` : ''}
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('projectModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   CONTACT FORM & TOAST ALERTS
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyLinkedinBtn = document.getElementById('copyLinkedinBtn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // Simulate successful dispatch & direct mailto link trigger
      showToast(`Thank you, ${name}! Your message has been prepared.`);
      
      const mailtoLink = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
      window.location.href = mailtoLink;
      
      form.reset();
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
        showToast('Email address copied to clipboard!');
      });
    });
  }

  if (copyLinkedinBtn) {
    copyLinkedinBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.linkedin).then(() => {
        showToast('LinkedIn profile URL copied to clipboard!');
      });
    });
  }
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: ${type === 'error' ? '#ef4444' : 'var(--accent-teal)'};">
      ${type === 'error' ? '⚠' : '✓'}
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   SCROLL ANIMATIONS & BACK TO TOP
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
