function switchLanguage() {
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('index-en.html')) {
    // On est en anglais, go to français
    window.location.href = window.location.pathname.replace('index-en.html', 'index-fr.html');
  } else {
    // On est en français (ou root), go to anglais
    if (currentPage.endsWith('index-fr.html') || currentPage.endsWith('/')) {
      window.location.href = window.location.pathname.replace('index-fr.html', 'index-en.html').replace(/\/$/, '/index-en.html');
    }
  }
}

// Burger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('ul');
  
  if (burger && menu) {
    burger.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
  }
});
