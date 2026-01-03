const itemsMap = [
  {de: 'BAUM', fr: 'ARBRE', emoji: '🌳'},
  {de: 'HAUS', fr: 'MAISON', emoji: '🏠'},
  {de: 'KATZE', fr: 'CHAT', emoji: '🐱'},
  {de: 'HUND', fr: 'CHIEN', emoji: '🐶'},
  {de: 'AUTO', fr: 'VOITURE', emoji: '🚗'},
  {de: 'BALL', fr: 'BALLE', emoji: '⚽'},
  {de: 'SONNE', fr: 'SOLEIL', emoji: '☀️'},
  {de: 'MOND', fr: 'LUNE', emoji: '🌙'},
  {de: 'BLUME', fr: 'FLEUR', emoji: '🌸'},
  {de: 'VOGEL', fr: 'OISEAU', emoji: '🐦'},
  {de: 'FISCH', fr: 'POISSON', emoji: '🐟'},
  {de: 'APFEL', fr: 'POMME', emoji: '🍎'},
  {de: 'BROT', fr: 'PAIN', emoji: '🍞'},
  {de: 'WASSER', fr: 'EAU', emoji: '💧'},
  {de: 'MILCH', fr: 'LAIT', emoji: '🥛'},
  {de: 'STUHL', fr: 'CHAIR', emoji: '🪑'},
  {de: 'TISCH', fr: 'TABLE', emoji: '🛋️'},
  {de: 'TÜR', fr: 'PORTE', emoji: '🚪'},
  {de: 'FENSTER', fr: 'FENETRE', emoji: '🔲'},
  {de: 'BUCH', fr: 'LIVRE', emoji: '📚'},
  {de: 'SCHULE', fr: 'ECOLE', emoji: '🏫'},
  {de: 'MAMA', fr: 'MAMAN', emoji: '👩‍👧'},
  {de: 'PAPA', fr: 'PAPA', emoji: '👨‍👧'},
  {de: 'OMA', fr: 'GRAN-MÈRE', emoji: '👵'},
  {de: 'OPA', fr: 'GRAN-PÈRE', emoji: '👴'},
  {de: 'ZUG', fr: 'TRAIN', emoji: '🚆'},
  {de: 'BUS', fr: 'BUS', emoji: '🚌'},
  {de: 'FAHRRAD', fr: 'VELO', emoji: '🚲'},
  {de: 'SCHUH', fr: 'CHAUSSURE', emoji: '👟'},
  {de: 'SOCKE', fr: 'CHAUSSETTE', emoji: '🧦'},
  {de: 'HAND', fr: 'MAIN', emoji: '✋'},
  {de: 'FUSS', fr: 'PIED', emoji: '🦶'},
  {de: 'AUGE', fr: 'OEIL', emoji: '👁️'},
  {de: 'OHR', fr: 'OREILLE', emoji: '👂'},
  {de: 'NASE', fr: 'NEZ', emoji: '👃'},
  {de: 'MUND', fr: 'BOUCHE', emoji: '👄'},
  {de: 'HAARE', fr: 'CHEVEUX', emoji: '💇‍♀️'},
  {de: 'HUT', fr: 'CHAPEAU', emoji: '🎩'},
  {de: 'KLEID', fr: 'ROBE', emoji: '👗'},
  {de: 'HEMD', fr: 'CHEMISE', emoji: '👕'},
  {de: 'KIND', fr: 'ENFANT', emoji: '🧒'},
  {de: 'SPIEL', fr: 'JEU', emoji: '🎲'},
  {de: 'PFERD', fr: 'CHEVAL', emoji: '🐴'},
  {de: 'KUH', fr: 'VACHE', emoji: '🐮'},
  {de: 'SCHAF', fr: 'MOUTON', emoji: '🐑'},
  {de: 'ENTE', fr: 'CANARD', emoji: '🦆'},
  {de: 'HASE', fr: 'LAPIN', emoji: '🐰'},
  {de: 'EIS', fr: 'GLACE', emoji: '🍦'},
  {de: 'UHR', fr: 'MONTRE', emoji: '🕒'},
  {de: 'WOLKE', fr: 'NUAGE', emoji: '☁️'},
  {de: 'ROSE', fr: 'ROSE', emoji: '🌹'},
  {de: 'ZAHN', fr: 'DENT', emoji: '🦷'},
  {de: 'BOOT', fr: 'BATEAU', emoji: '🛥️'},
  {de: 'BÄR', fr: 'OURS', emoji: '🐻'},
  {de: 'LÖWE', fr: 'LION', emoji: '🦁'},
  {de: 'TIGER', fr: 'TIGRE', emoji: '🐯'},
  {de: 'AFFE', fr: 'SINGE', emoji: '🐵'},
  {de: 'FROSCH', fr: 'GRENOUILLE', emoji: '🐸'},
  {de: 'BRILLE', fr: 'LUNETTES', emoji: '🕶️'},
  {de: 'KERZE', fr: 'BOUGIE', emoji: '🕯️'},
  {de: 'KARTOFFEL', fr: 'POMME DE TERRE', emoji: '🥔'},
  {de: 'TOMATE', fr: 'TOMATE', emoji: '🍅'},
  {de: 'BANANE', fr: 'BANANE', emoji: '🍌'},
  {de: 'SCHMETTERLING', fr: 'PAPILLON', emoji: '🦋'},
  {de: 'REGEN', fr: 'PLUIE', emoji: '🌧️'},
  {de: 'STRASSE', fr: 'RUE', emoji: '🛣️'},
  {de: 'KAMERA', fr: 'APPAREIL PHOTO', emoji: '📷'},
  {de: 'COMPUTER', fr: 'ORDINATEUR', emoji: '💻'},
  {de: 'TELEFON', fr: 'TELEPHONE', emoji: '📱'},
  {de: 'LIED', fr: 'CHANSON', emoji: '🎵'},
  {de: 'PUPPE', fr: 'POUPÉE', emoji: '🪆'},
  {de: 'SPIELZEUG', fr: 'JOUET', emoji: '🧸'},
  {de: 'KÄSE', fr: 'FROMAGE', emoji: '🧀'},
  {de: 'ZUCKER', fr: 'SUCRE', emoji: '🍬'},
  {de: 'KUCHEN', fr: 'GATEAU', emoji: '🍰'},
  {de: 'BALLON', fr: 'BALLON', emoji: '🎈'},
  {de: 'TASCHE', fr: 'SAC', emoji: '👜'},
  {de: 'SCHLOSS', fr: 'CHATEAU', emoji: '🏰'},
  {de: 'BRÜCKE', fr: 'PONT', emoji: '🌉'},
  {de: 'GARTEN', fr: 'JARDIN', emoji: '🏡'},
  {de: 'WALD', fr: 'FORET', emoji: '🌲'},
  {de: 'SEE', fr: 'LAC', emoji: '🏞️'},
  {de: 'MEER', fr: 'MER', emoji: '🌊'},
  {de: 'INSEL', fr: 'ILE', emoji: '🏝️'},
  {de: 'SCHWAN', fr: 'CYGNE', emoji: '🦢'},
  {de: 'DRACHE', fr: 'DRAGON', emoji: '🐉'},
  {de: 'LAMPE', fr: 'LAMPE', emoji: '💡'},
  {de: 'RADIO', fr: 'RADIO', emoji: '📻'},
  {de: 'FLUSS', fr: 'RIVIERE', emoji: '🏞️'},
  {de: 'SCHERE', fr: 'CISEAUX', emoji: '✂️'},
  {de: 'KALENDER', fr: 'CALENDRIER', emoji: '📅'},
  {de: 'STIFT', fr: 'STYLO', emoji: '✏️'},
  {de: 'PAPIER', fr: 'PAPIER', emoji: '📄'},
  {de: 'STERN', fr: 'ETOILE', emoji: '⭐'},
  {de: 'GLOCKE', fr: 'CLOCHETTE', emoji: '🔔'},
  {de: 'KINO', fr: 'CINEMA', emoji: '🎬'},
  {de: 'THEATER', fr: 'THEATRE', emoji: '🎭'},
  {de: 'ROT', fr: 'ROUGE', emoji: '🔴'},
  {de: 'BLAU', fr: 'BLEU', emoji: '🔵'},
  {de: 'GRÜN', fr: 'VERT', emoji: '🟢'},
  {de: 'GELB', fr: 'JAUNE', emoji: '🟡'}
];

let index = 0;
let revealed = false;
let queue = [];

let canReveal = false;
let preTimer = null;
let postTimer = null;
let preInterval = null;
let postInterval = null;

// Language and scoring
const langBtn = document.getElementById('langBtn');
const scoreBtn = document.getElementById('score');
const scoreCountEl = document.getElementById('scoreCount');
let currentLang = localStorage.getItem('lese:lang') || 'de';
let items = buildItemsForLang(currentLang);

// i18n messages
const MESSAGES = {
  de: {
    wait: (s) => `Warte ${s}s`,
    canClick: 'Jetzt kannst du klicken',
    nowClick: 'Klicken oder Leertaste drücken',
    pleaseWait: 'Bitte noch kurz warten',
    autoNext: (s) => `Klicken oder Leertaste drücken -  Automatisch weiter in ${s}s`,
    noEntries: 'Keine Einträge für Deutsch',
    langLabel: 'Auf Französisch wechseln',
    scoreTooltip: 'Punkte'
  },
  fr: {
    wait: (s) => `Attendez ${s}s`,
    canClick: 'Vous pouvez cliquer maintenant',
    nowClick: 'Cliquez ou appuyez sur espace',
    pleaseWait: 'Veuillez patienter',
    autoNext: (s) => `Cliquez ou appuyez sur espace - Passe automatiquement dans ${s}s`,
    noEntries: 'Aucune entrée pour Français',
    langLabel: 'Passer en allemand',
    scoreTooltip: 'Points'
  }
};

// Defensive: if controls are missing (e.g., index.html not updated), avoid throwing
const hasControls = !!(langBtn && scoreBtn && scoreCountEl);
if (!hasControls) {
  console.warn('Controls missing: language button or score elements not found. Running in reduced mode.');
}
// counts stored per language: { word -> number }
function loadCounts(lang) {
  try {
    return JSON.parse(localStorage.getItem('lese:counts:' + lang) || '{}');
  } catch (e) { return {}; }
}
function saveCounts(lang, counts) {
  localStorage.setItem('lese:counts:' + lang, JSON.stringify(counts));
}
function totalCountForLang(lang) {
  const counts = loadCounts(lang);
  return Object.values(counts).reduce((s, v) => s + (Number(v) || 0), 0);
}
function updateScoreDisplay() {
  if (!scoreCountEl) return;
  // Ensure we show 0 at the start of a new game if no counts exist
  const counts = loadCounts(currentLang) || {};
  const total = Object.values(counts).reduce((s,v)=>s+Number(v||0),0);
  scoreCountEl.textContent = String(total);
  // Update tooltip so hover always shows current count
  if (scoreBtn) {
    scoreBtn.title = `${MESSAGES[currentLang].scoreTooltip}: ${total}`;
    scoreBtn.setAttribute('aria-label', `${MESSAGES[currentLang].scoreTooltip}: ${total}`);
  }
}
function showCountsModal() {
  const counts = loadCounts(currentLang);
  const entries = Object.entries(counts).filter(([,c]) => c > 0).sort((a,b)=>b[1]-a[1]);
  if (entries.length === 0) {
    alert(MESSAGES[currentLang].noEntries);
    return;
  }
  const lines = entries.map(([w,c]) => `${w}: ${c}`);
  alert(lines.join('\n'));
}

// build items list from itemsMap for the active language
function buildItemsForLang(lang) {
  return itemsMap.map(it => ({ word: (lang === 'fr' ? it.fr : it.de), emoji: it.emoji }));
}

// timers default; can be shortened by URL param ?fast=1 for tests
const isFastMode = new URLSearchParams(window.location.search).get('fast') === '1';
const PRE_SECONDS = isFastMode ? 1 : 5;
const POST_SECONDS = isFastMode ? 1 : 5;

const card = document.getElementById('card');
const wordEl = document.getElementById('word');
const imageWrap = document.getElementById('imageWrap');
const countdownEl = document.getElementById('countdown');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function refillQueue() {
  queue = items.map((_, i) => i);
  shuffle(queue);
}

function getNextIndex() {
  if (queue.length === 0) refillQueue();
  return queue.shift();
}

function clearTimers() {
  canReveal = false;
  if (preTimer) { clearTimeout(preTimer); preTimer = null; }
  if (postTimer) { clearTimeout(postTimer); postTimer = null; }
  if (preInterval) { clearInterval(preInterval); preInterval = null; }
  if (postInterval) { clearInterval(postInterval); postInterval = null; }
  countdownEl.textContent = '';
}

function startPreReveal(seconds = 5) {
  clearTimers();
  let s = seconds;
  countdownEl.textContent = MESSAGES[currentLang].wait(s);
  preInterval = setInterval(() => {
    s -= 1;
    if (s > 0) countdownEl.textContent = MESSAGES[currentLang].wait(s);
    else countdownEl.textContent = MESSAGES[currentLang].canClick;
  }, 1000);
  preTimer = setTimeout(() => {
    if (preInterval) { clearInterval(preInterval); preInterval = null; }
    countdownEl.textContent = MESSAGES[currentLang].nowClick;
    canReveal = true;
    preTimer = null;
    // automatically show the image when pre-timer finishes
    //showImage();
  }, seconds * 1000);
}

function startPostAutoNext(seconds = 5) {
  let s = seconds;
  countdownEl.textContent = MESSAGES[currentLang].autoNext(s);
  postInterval = setInterval(() => {
    s -= 1;
    if (s > 0) countdownEl.textContent = MESSAGES[currentLang].autoNext(s);
    else countdownEl.textContent = '';
  }, 1000);
  postTimer = setTimeout(() => {
    if (postInterval) { clearInterval(postInterval); postInterval = null; }
    postTimer = null;
    next();
  }, seconds * 1000);
}

function render() {
  const item = items[index];
  wordEl.textContent = item.word;
  imageWrap.innerHTML = '';
  imageWrap.setAttribute('aria-hidden', 'true');
  imageWrap.classList.remove('show');
  revealed = false;
  // start initial lock (use PRE_SECONDS, supports fast mode)
  startPreReveal(PRE_SECONDS);
}

function createSVGForEmoji(emoji, label) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">` +
    `<rect width="100%" height="100%" rx="16" fill="#fff"/>` +
    `<text x="50%" y="52%" font-size="72" text-anchor="middle" dominant-baseline="middle">${emoji}</text>` +
    `</svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function speak(text) {
  if (!('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis not available in this browser.');
    return;
  }
  const langCode = currentLang === 'fr' ? 'fr-FR' : 'de-DE';

  const speakNow = () => {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = langCode;
      const voices = window.speechSynthesis.getVoices() || [];
      let voice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(langCode.split('-')[0]));
      if (!voice && voices.length > 0) voice = voices[0];
      if (voice) u.voice = voice;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (err) {
      console.error('Error while trying to speak:', err);
    }
  };

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) {
    const onChange = () => { window.speechSynthesis.removeEventListener('voiceschanged', onChange); speakNow(); };
    window.speechSynthesis.addEventListener('voiceschanged', onChange);
    setTimeout(speakNow, 800);
  } else speakNow();
}

function showImage() {
  if (!canReveal) return; // ignore clicks during pre-timer
  const item = items[index];
  imageWrap.innerHTML = '';
  let src;
  if (item.img) {
    src = item.img;
  } else if (item.emoji) {
    src = createSVGForEmoji(item.emoji, item.word);
  }
  const img = document.createElement('img');
  img.src = src;
  img.alt = item.word;
  imageWrap.appendChild(img);
  imageWrap.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => imageWrap.classList.add('show'));
  revealed = true;
  // start post-reveal auto-next timer
  if (preTimer) { clearTimeout(preTimer); preTimer = null; }
  if (preInterval) { clearInterval(preInterval); preInterval = null; }
  canReveal = false;

  // increment per-word counter for current language
  try {
    const counts = loadCounts(currentLang);
    counts[item.word] = (counts[item.word] || 0) + 1;
    saveCounts(currentLang, counts);
    updateScoreDisplay();
  } catch (e) { console.warn('Could not update counts', e); }

  speak(item.word);
  startPostAutoNext(POST_SECONDS);
}

function next() {
  index = getNextIndex();
  render();
}

card.addEventListener('click', (e) => {
  if (!revealed) {
    // only show image if pre-timer finished
    if (canReveal) showImage();
    else {
      // brief feedback
      const prev = countdownEl.textContent;
    countdownEl.textContent = MESSAGES[currentLang].pleaseWait;
      setTimeout(() => { if (!canReveal) countdownEl.textContent = prev; }, 700);
    }
  } else next();
});

// keyboard: Space or Enter
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    if (!revealed) {
      if (canReveal) showImage();
      else {
        const prev = countdownEl.textContent;
        countdownEl.textContent = MESSAGES[currentLang].pleaseWait;
        setTimeout(() => { if (!canReveal) countdownEl.textContent = prev; }, 700);
      }
    } else next();
  }
});

// initialize language button and score UI
function flagSVGFor(lang) {
  // lang here is the target language we want to display (fr or de)
  if (lang === 'fr') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="24" height="16" aria-hidden="true" focusable="false"><rect width="1" height="2" x="0" y="0" fill="#0055A4"/><rect width="1" height="2" x="1" y="0" fill="#FFFFFF"/><rect width="1" height="2" x="2" y="0" fill="#EF4135"/></svg>`;
  }
  // default to Swiss flag for 'de' target (CH)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" width="16" height="16" aria-hidden="true" focusable="false"><rect width="1" height="1" fill="#FF0000"/><g fill="#fff"><rect x="0.375" y="0.18" width="0.25" height="0.64"/><rect x="0.18" y="0.375" width="0.64" height="0.25"/></g></svg>`;
}
function otherLangForDisplay(current) {
  return current === 'de' ? 'fr' : 'de';
}
function updateLangButton() {
  if (!langBtn) return;
  const target = otherLangForDisplay(currentLang);
  langBtn.innerHTML = flagSVGFor(target);
  langBtn.title = MESSAGES[currentLang].langLabel;
  langBtn.setAttribute('aria-label', MESSAGES[currentLang].langLabel);
}

function resetCountsForLang(lang) {
  saveCounts(lang, {});
}

if (langBtn) {
  updateLangButton();
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'fr' : 'de';
    // New game starts — reset counts for this language
    resetCountsForLang(currentLang);
    localStorage.setItem('lese:lang', currentLang);
    items = buildItemsForLang(currentLang);
    refillQueue();
    index = getNextIndex();
    render();
    updateLangButton();
    updateScoreDisplay();
  });
} else {
  console.warn('Language button not found; skipping language switch setup.');
}

if (scoreBtn) {
  // No click action by design — tooltip shows score on hover
  scoreBtn.title = `${MESSAGES[currentLang].scoreTooltip}: ${totalCountForLang(currentLang)}`;
  scoreBtn.setAttribute('aria-label', `${MESSAGES[currentLang].scoreTooltip}: ${totalCountForLang(currentLang)}`);
} else {
  console.warn('Score button not found; hiding scoring UI.');
}


// initial setup: create shuffled queue and show first word
refillQueue();
index = getNextIndex();
render();
updateScoreDisplay();

// keep card focusable for accessibility
card.addEventListener('keyup', (e) => {
  // global handler manages action
});
