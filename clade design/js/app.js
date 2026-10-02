// Page Navigation
const navItems = document.querySelectorAll('.nav-item');
const pageContainers = document.querySelectorAll('.page-container');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const pageName = item.dataset.page;

    // Remove active class from all nav items
    navItems.forEach(nav => nav.classList.remove('active'));

    // Add active class to clicked item
    item.classList.add('active');

    // Hide all pages
    pageContainers.forEach(page => page.classList.add('hidden'));

    // Show selected page
    const selectedPage = document.getElementById(`${pageName}-page`);
    if (selectedPage) {
      selectedPage.classList.remove('hidden');
    }
  });
});

// Sidebar Toggle
const sidebarToggleBtn = document.querySelector('.sidebar-toggle-btn');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn?.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Theme Toggle
const themeToggleBtn = document.querySelector('[title="Theme toggle"]');
const htmlElement = document.documentElement;

// Initialize theme from localStorage or system preference
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    if (savedTheme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.removeAttribute('data-theme');
    }
  } else if (prefersDark) {
    htmlElement.setAttribute('data-theme', 'dark');
  }
}

themeToggleBtn?.addEventListener('click', () => {
  const isDark = htmlElement.getAttribute('data-theme') === 'dark';

  if (isDark) {
    htmlElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
});

// Close sidebar on mobile when clicking outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    const isClickInsideSidebar = sidebar?.contains(e.target);
    const isClickOnToggle = sidebarToggleBtn?.contains(e.target);

    if (!isClickInsideSidebar && !isClickOnToggle && sidebar?.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  }
});

// Responsive sidebar on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    sidebar?.classList.remove('open');
  }
});

// Task table interactions
const taskCheckboxes = document.querySelectorAll('.task-col-checkbox input[type="checkbox"]');

taskCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const taskRow = this.closest('.task-row');
    if (this.checked) {
      taskRow.style.opacity = '0.6';
    } else {
      taskRow.style.opacity = '1';
    }
  });
});

// Toast notification helper
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Export for use in other scripts
window.showToast = showToast;
