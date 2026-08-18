/**
 * Main Application Logic for Muhammad Yusuf's Portfolio
 * Optimized for Desktop, Tablet & Mobile Devices
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
   NAVIGATION & ACTIVE LINK SPY (Mobile & Desktop)
   ========================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile menu toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      
      // Toggle Hamburger vs Close X icon
      if (isOpen) {
        mobileMenuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
      } else {
        mobileMenuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      }
    });

    // Close on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      }
    });
  }

  // Scroll spy
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
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
  }, { passive: true });
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
        <div class="project-meta-info">
          <span>${project.company || 'Featured Project'}</span>
          <span>${project.period || ''}</span>
        </div>
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
      
      // Scroll the selected filter button into view on mobile
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
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
    <div style="margin-bottom: 1.25rem;">
      <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap;">
        <span class="project-badge" style="position: static;">${project.categoryLabel}</span>
        ${project.company ? `<span style="font-size: 0.82rem; color: var(--accent-teal); font-weight: 600;">• ${project.company}</span>` : ''}
        ${project.period ? `<span class="font-mono" style="font-size: 0.78rem; color: var(--text-muted);">(${project.period})</span>` : ''}
      </div>
      <h2 style="font-size: clamp(1.4rem, 3vw, 1.85rem); margin-bottom: 0.4rem; line-height: 1.3;">${project.title}</h2>
      <p style="color: var(--accent-cyan); font-weight: 500; font-size: 0.95rem;">${project.subtitle}</p>
    </div>

    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem; aspect-ratio: 16/9;">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 1.05rem;">Overview & Architecture</h4>
      <p style="font-size: 0.95rem; line-height: 1.65; color: var(--text-secondary);">${project.description}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 1.05rem;">Key Highlights & Implemented Features</h4>
      <ul style="list-style: none;">
        ${project.features.map(f => `
          <li style="position: relative; padding-left: 1.35rem; margin-bottom: 0.45rem; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.5;">
            <span style="position: absolute; left: 0; color: var(--accent-teal); font-weight: bold;">✔</span>
            ${f}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 1.05rem;">Tech Stack & Frameworks</h4>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag" style="font-size: 0.8rem; padding: 0.25rem 0.65rem;">${tag}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="flex: 1; min-width: 180px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          Repository
        </a>
      ` : ''}
      ${project.liveUrl && project.liveUrl !== '#' ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; min-width: 180px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Open App / Portal
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
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
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

      showToast(`Thank you, ${name}! Your email client is opening.`);
      
      const mailtoLink = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nContact Email: " + email)}`;
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

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone).then(() => {
        showToast('Phone / WhatsApp number copied to clipboard!');
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
    <span style="color: ${type === 'error' ? '#ef4444' : 'var(--accent-teal)'}; font-weight: bold;">
      ${type === 'error' ? '⚠' : '✓'}
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   SCROLL ANIMATIONS & BACK TO TOP
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
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
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
