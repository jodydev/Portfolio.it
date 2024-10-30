let currentLanguage = 'it';

function loadTranslations(language) {
  fetch(`http://127.0.0.1:5501/assets/js/i18n/${language}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
          element.textContent = translations[key];
        }
      });
    })
    .catch(error => console.error('Errore nel caricamento delle traduzioni:', error));
}

// Evento di cambio lingua con l'interruttore
document.getElementById('languageToggle').addEventListener('change', (event) => {
  currentLanguage = event.target.checked ? 'en' : 'it';
  loadTranslations(currentLanguage);
});

// Carica la lingua iniziale
loadTranslations(currentLanguage);