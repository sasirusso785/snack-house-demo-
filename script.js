/**
 * SNACK HOUSE - Script principale
 * Solo JavaScript base, nessuna libreria esterna.
 * Gestisce lo scroll fluido al menu e eventuali interazioni semplici.
 */

// Aspetta che il DOM sia caricato prima di eseguire il codice
document.addEventListener('DOMContentLoaded', function () {

  // ----- Bottone "Scopri il menu" -----
  // Trova il bottone e la sezione Menu
  var btnMenu = document.getElementById('btn-menu');
  var sezioneMenu = document.getElementById('menu');

  if (btnMenu && sezioneMenu) {
    // Al clic sul bottone, scroll fluido verso la sezione Menu
    btnMenu.addEventListener('click', function (event) {
      event.preventDefault(); // Evita il salto brusco del link #
      sezioneMenu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ----- Opzionale: evidenzia il link/azione in base alla sezione visibile
  // (Per un principiante va bene anche senza; lo lasciamo come esempio commentato)
  // window.addEventListener('scroll', function() { ... });
});
