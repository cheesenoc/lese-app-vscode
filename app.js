const items = [
  {word: 'BAUM', emoji: '🌳'},
  {word: 'HAUS', emoji: '🏠'},
  {word: 'KATZE', emoji: '🐱'},
  {word: 'HUND', emoji: '🐶'},
  {word: 'AUTO', emoji: '🚗'},
  {word: 'BALL', emoji: '⚽'},
  {word: 'SONNE', emoji: '☀️'},
  {word: 'MOND', emoji: '🌙'},
  {word: 'BLUME', emoji: '🌸'},
  {word: 'VOGEL', emoji: '🐦'},
  {word: 'FISCH', emoji: '🐟'},
  {word: 'APFEL', emoji: '🍎'},
  {word: 'BROT', emoji: '🍞'},
  {word: 'WASSER', emoji: '💧'},
  {word: 'MILCH', emoji: '🥛'},
  {word: 'STUHL', emoji: '🪑'},
  {word: 'TISCH', emoji: '🛋️'},
  {word: 'TÜR', emoji: '🚪'},
  {word: 'FENSTER', emoji: '🔲'},
  {word: 'BUCH', emoji: '📚'},
  {word: 'SCHULE', emoji: '🏫'},
  {word: 'MAMA', emoji: '👩‍👧'},
  {word: 'PAPA', emoji: '👨‍👧'},
  {word: 'OMA', emoji: '👵'},
  {word: 'OPA', emoji: '👴'},
  {word: 'ZUG', emoji: '🚆'},
  {word: 'BUS', emoji: '🚌'},
  {word: 'FAHRRAD', emoji: '🚲'},
  {word: 'SCHUH', emoji: '👟'},
  {word: 'SOCKE', emoji: '🧦'},
  {word: 'HAND', emoji: '✋'},
  {word: 'FUSS', emoji: '🦶'},
  {word: 'AUGE', emoji: '👁️'},
  {word: 'OHR', emoji: '👂'},
  {word: 'NASE', emoji: '👃'},
  {word: 'MUND', emoji: '👄'},
  {word: 'HAARE', emoji: '💇‍♀️'},
  {word: 'HUT', emoji: '🎩'},
  {word: 'KLEID', emoji: '👗'},
  {word: 'HEMD', emoji: '👕'},
  {word: 'KIND', emoji: '🧒'},
  {word: 'SPIEL', emoji: '🎲'},
  {word: 'PFERD', emoji: '🐴'},
  {word: 'KUH', emoji: '🐮'},
  {word: 'SCHAF', emoji: '🐑'},
  {word: 'ENTE', emoji: '🦆'},
  {word: 'HASE', emoji: '🐰'},
  {word: 'EIS', emoji: '🍦'},
  {word: 'UHR', emoji: '🕒'},
  {word: 'WOLKE', emoji: '☁️'},
  {word: 'ROSE', emoji: '🌹'},
  {word: 'ZAHN', emoji: '🦷'},
  {word: 'BOOT', emoji: '🛥️'},
  {word: 'BÄR', emoji: '🐻'},
  {word: 'LÖWE', emoji: '🦁'},
  {word: 'TIGER', emoji: '🐯'},
  {word: 'AFFE', emoji: '🐵'},
  {word: 'FROSCH', emoji: '🐸'},
  {word: 'BRILLE', emoji: '🕶️'},
  {word: 'KERZE', emoji: '🕯️'},
  {word: 'KARTOFFEL', emoji: '🥔'},
  {word: 'TOMATE', emoji: '🍅'},
  {word: 'BANANE', emoji: '🍌'},
  {word: 'SCHMETTERLING', emoji: '🦋'},
  {word: 'REGEN', emoji: '🌧️'},
  {word: 'STRASSE', emoji: '🛣️'},
  {word: 'KAMERA', emoji: '📷'},
  {word: 'COMPUTER', emoji: '💻'},
  {word: 'TELEFON', emoji: '📱'},
  {word: 'LIED', emoji: '🎵'},
  {word: 'PUPPE', emoji: '🪆'},
  {word: 'SPIELZEUG', emoji: '🧸'},
  {word: 'KÄSE', emoji: '🧀'},
  {word: 'ZUCKER', emoji: '🍬'},
  {word: 'KUCHEN', emoji: '🍰'},
  {word: 'BALLON', emoji: '🎈'},
  {word: 'TASCHE', emoji: '👜'},
  {word: 'SCHLOSS', emoji: '🏰'},
  {word: 'BRÜCKE', emoji: '🌉'},
  {word: 'GARTEN', emoji: '🏡'},
  {word: 'WALD', emoji: '🌲'},
  {word: 'SEE', emoji: '🏞️'},
  {word: 'MEER', emoji: '🌊'},
  {word: 'INSEL', emoji: '🏝️'},
  {word: 'SCHWAN', emoji: '🦢'},
  {word: 'DRACHE', emoji: '🐉'},
  {word: 'LAMPE', emoji: '💡'},
  {word: 'RADIO', emoji: '📻'},
  {word: 'FLUSS', emoji: '🏞️'},
  {word: 'SCHERE', emoji: '✂️'},
  {word: 'KALENDER', emoji: '📅'},
  {word: 'STIFT', emoji: '✏️'},
  {word: 'PAPIER', emoji: '📄'},
  {word: 'STERN', emoji: '⭐'},
  {word: 'GLOCKE', emoji: '🔔'},
  {word: 'KINO', emoji: '🎬'},
  {word: 'THEATER', emoji: '🎭'},
  {word: 'ROT', emoji: '🔴'},
  {word: 'BLAU', emoji: '🔵'},
  {word: 'GRÜN', emoji: '🟢'},
  {word: 'GELB', emoji: '🟡'}
];

let index = 0;
let revealed = false;
let queue = [];

let canReveal = false;
let preTimer = null;
let postTimer = null;
let preInterval = null;
let postInterval = null;

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
  countdownEl.textContent = `Warte ${s}s`;
  preInterval = setInterval(() => {
    s -= 1;
    if (s > 0) countdownEl.textContent = `Warte ${s}s`;
    else countdownEl.textContent = `Jetzt kannst du klicken`;
  }, 1000);
  preTimer = setTimeout(() => {
    if (preInterval) { clearInterval(preInterval); preInterval = null; }
    countdownEl.textContent = `Klicken oder Leertaste drücken`;
    canReveal = true;
    preTimer = null;
    // automatically show the image when pre-timer finishes
    //showImage();
  }, seconds * 1000);
}

function startPostAutoNext(seconds = 5) {
  let s = seconds;
  countdownEl.textContent = `Klicken oder Leertaste drücken -  Automatisch weiter in ${s}s`;
  postInterval = setInterval(() => {
    s -= 1;
    if (s > 0) countdownEl.textContent = `Klicken oder Leertaste drücken -  Automatisch weiter in ${s}s`;
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
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }
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
      countdownEl.textContent = 'Bitte noch kurz warten';
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
        countdownEl.textContent = 'Bitte noch kurz warten';
        setTimeout(() => { if (!canReveal) countdownEl.textContent = prev; }, 700);
      }
    } else next();
  }
});

// initial setup: create shuffled queue and show first word
refillQueue();
index = getNextIndex();
render();

// keep card focusable for accessibility
card.addEventListener('keyup', (e) => {
  // global handler manages action
});
