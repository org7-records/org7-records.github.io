document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '×' : '☰';
    });
  }

  const links = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  const yearTarget = document.querySelector('[data-current-year]');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  const releaseForm = document.querySelector('#release-form');
  const formStatus = releaseForm?.querySelector('.form-status');

  if (releaseForm && formStatus) {
    releaseForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formStatus.textContent = 'Release received. We will review your submission and get back to you.';
      releaseForm.reset();
    });
  }
});
