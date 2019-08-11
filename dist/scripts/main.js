'use strict';

const scrollTopBtn = document.querySelector('.scroll_top');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
