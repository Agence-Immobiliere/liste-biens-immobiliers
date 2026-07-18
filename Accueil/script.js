document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('search-form');
  const locationInput = document.getElementById('search-location');
  const typeSelect = document.getElementById('search-type');
  const budgetInput = document.getElementById('search-budget');
  const resetBtn = document.getElementById('reset-filters');
  const noResults = document.getElementById('no-results');
  const cards = Array.from(document.querySelectorAll('.property-card'));
 
  function filterProperties(event) {
    if (event) event.preventDefault();
 
    const locationQuery = locationInput.value.trim().toLowerCase();
    const typeQuery = typeSelect.value;
    const budgetQuery = budgetInput.value ? parseInt(budgetInput.value, 10) : null;
 
    let visibleCount = 0;
 
    cards.forEach((card) => {
      const cardLocation = card.dataset.location || '';
      const cardType = card.dataset.type || '';
      const cardPrice = parseInt(card.dataset.price, 10) || 0;
 
      const matchesLocation = locationQuery === '' || cardLocation.includes(locationQuery);
      const matchesType = typeQuery === '' || cardType === typeQuery;
      const matchesBudget = budgetQuery === null || cardPrice <= budgetQuery;
 
      const isMatch = matchesLocation && matchesType && matchesBudget;
 
      card.classList.toggle('is-hidden', !isMatch);
      if (isMatch) visibleCount++;
    });
 
    noResults.hidden = visibleCount !== 0;
 
    // Emmène l'utilisateur vers les résultats
    const listingsSection = document.getElementById('biens');
    if (listingsSection && event) {
      listingsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
 
  function resetFilters(event) {
    if (event) event.preventDefault();
    locationInput.value = '';
    typeSelect.value = '';
    budgetInput.value = '';
    cards.forEach((card) => card.classList.remove('is-hidden'));
    noResults.hidden = true;
  }
 
  if (form) form.addEventListener('submit', filterProperties);
  if (resetBtn) resetBtn.addEventListener('click', resetFilters);
 
  // ============================================
  // Menu hamburger (mobile)
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');
 
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
 
    // Ferme le menu quand on clique sur un lien (mobile)
    mainNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
 
  // ============================================
  // Mise en surbrillance du lien de nav actif
  // au scroll (bonus interaction)
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
 
  sections.forEach((section) => observer.observe(section));
 
});