function switchLanguage() {
  const currentPage = window.location.pathname;
  
  // Récupère le chemin relatif (fonctionne avec GitHub Pages et localhost)
  const isEnglish = currentPage.includes('index-en.html');
  
  if (isEnglish) {
    // On est en anglais, go to français
    const newPath = currentPage.replace('index-en.html', 'index-fr.html');
    window.location.href = newPath;
  } else {
    // On est en français (ou root), go to anglais
    if (currentPage.endsWith('index-fr.html')) {
      const newPath = currentPage.replace('index-fr.html', 'index-en.html');
      window.location.href = newPath;
    } else if (currentPage.endsWith('/') || currentPage.endsWith('/portfolio/')) {
      // Si on est à la racine, redirige vers la version anglaise
      const newPath = currentPage + (currentPage.endsWith('/') ? '' : '/') + 'index-en.html';
      window.location.href = newPath;
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
