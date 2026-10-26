// Turnédatum, kopierade från winnerback.se (26 okt 2026).
const SHOWS = [
  { date: '2026-10-30', m: 'OKT.', day: 'fredag', venue: 'Conventum Arena', city: 'ÖREBRO', country: 'se', url: 'https://biljett.unitedtickets.se/event/lars-winnerback-hosten-2026/conventum-arena/3637717' },
  { date: '2026-10-31', m: 'OKT.', day: 'lördag', venue: 'Monitor ERP Arena', city: 'GÄVLE', country: 'se', url: 'https://biljett.unitedtickets.se/event/lars-winnerback-hosten-2026/monitor-erp-arena/3637719' },
  { date: '2026-11-06', m: 'NOV.', day: 'fredag', venue: 'Scandinavium', city: 'GÖTEBORG', country: 'se', url: 'https://www.ticketmaster.se/event/1865911834' },
  { date: '2026-11-07', m: 'NOV.', day: 'lördag', venue: 'Malmö Arena', city: 'MALMÖ', country: 'se', url: 'https://www.ticketmaster.se/event/1772638067' },
  { date: '2026-11-13', m: 'NOV.', day: 'fredag', venue: 'Löfbergs Arena', city: 'KARLSTAD', country: 'se', url: 'https://biljett.unitedtickets.se/event/lars-winnerback-hosten-2026/lofbergs-arena/3637723' },
  { date: '2026-11-14', m: 'NOV.', day: 'lördag', venue: 'Halmstad Arena', city: 'HALMSTAD', country: 'se', url: 'https://biljett.unitedtickets.se/event/lars-winnerback-hosten-2026/halmstad-arena/3637724' },
  { date: '2026-11-21', m: 'NOV.', day: 'lördag', venue: 'Avicii Arena', city: 'STOCKHOLM', country: 'se', status: 'soldout' },
  { date: '2026-11-27', m: 'NOV.', day: 'fredag', venue: 'Trondheim Spektrum', city: 'TRONDHEIM', country: 'no', url: 'https://www.ticketmaster.no/event/1453082886' },
  { date: '2026-11-28', m: 'NOV.', day: 'lördag', venue: 'Oslo Spektrum', city: 'OSLO', country: 'no', url: 'https://www.ticketmaster.no/event/1862496581' },
  { date: '2026-12-05', m: 'DEC.', day: 'lördag', venue: 'Saab Arena', city: 'Linköping', country: 'se', tag: 'Klubb Nypon', status: 'soon', note: 'Släpps 28 oktober 2026 kl. 12:00' },
  { date: '2027-03-04', m: 'MARS', day: 'torsdag', venue: 'Svømmehallen Scene', city: 'BODØ', country: 'no', url: 'https://www.ticketmaster.no/event/382115256' },
  { date: '2027-03-05', m: 'MARS', day: 'fredag', venue: 'Vinterfestuka', city: 'NARVIK', country: 'no', url: 'https://www.vinterfestuka.no/arrangement/lars-winnerback/' },
  { date: '2027-03-06', m: 'MARS', day: 'lördag', venue: 'Clarion Hotel The Edge', city: 'TROMSØ', country: 'no', url: 'https://secure.tickster.com/no/h8711ux1646w33r/products' },
  { date: '2027-03-10', m: 'MARS', day: 'onsdag', venue: 'Folkets Hus', city: 'UMEÅ', country: 'se', url: 'https://secure.tickster.com/45mb5v9g9e2vrnh' },
  { date: '2027-03-11', m: 'MARS', day: 'torsdag', venue: 'Sara Kulturhus', city: 'SKELLEFTEÅ', country: 'se', url: 'https://www.ticketmaster.se/event/1662640227' },
  { date: '2027-03-12', m: 'MARS', day: 'fredag', venue: 'Kulturens Hus', city: 'LULEÅ', country: 'se', url: 'https://secure.tickster.com/nah90gpeaj0gn75' },
  { date: '2027-03-14', m: 'MARS', day: 'söndag', venue: 'Tavastia', city: 'HELSINKI', country: 'fi', url: 'http://www.tiketti.fi/tapahtuma/121543' },
  { date: '2027-03-15', m: 'MARS', day: 'måndag', venue: 'Tavastia', city: 'HELSINKI', country: 'fi', url: 'http://www.tiketti.fi/tapahtuma/121542' },
  { date: '2027-09-04', m: 'SEP.', day: 'lördag', venue: 'Store Vega', city: 'KØPENHAMN', country: 'dk', url: 'https://vega.unitedtickets.dk/event/lars-winnerback-se-/store-vega-k-benhavn/3739464' },
];

const COUNTRIES = [
  ['alla', 'Alla'],
  ['se', 'Sverige'],
  ['no', 'Norge'],
  ['fi', 'Finland'],
  ['dk', 'Danmark'],
];

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const today = new Date();
today.setHours(0, 0, 0, 0);
const upcoming = SHOWS.filter((s) => new Date(s.date + 'T23:59:59') >= today);

const esc = (str) => String(str).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- Konserter ---------- */

function showRow(s) {
  const d = s.date.slice(8, 10);
  const tag = s.tag ? `<span class="tag">${esc(s.tag)}</span>` : '';
  const inner = `
    <time class="show-date" datetime="${s.date}">
      <span class="d">${d}</span>
      <span class="m">${s.m}<em>${s.day}</em></span>
    </time>
    <span class="show-place">
      <span class="show-city">${esc(s.city)}${tag}</span>
      <span class="show-venue">${esc(s.venue)}</span>
    </span>`;

  if (s.status === 'soldout') {
    return `<li class="show show--soldout" data-country="${s.country}"><div class="show-row">${inner}<span class="show-cta">Slutsåld</span></div></li>`;
  }
  if (s.status === 'soon') {
    return `<li class="show show--soon" data-country="${s.country}"><div class="show-row">${inner}<span class="show-cta">${esc(s.note)}</span></div></li>`;
  }
  return `<li class="show" data-country="${s.country}">
    <a class="show-row" href="${esc(s.url)}" target="_blank" rel="noopener">${inner}
      <span class="show-cta">Köp biljetter <span class="arrow" aria-hidden="true">→</span></span>
    </a></li>`;
}

function renderTour() {
  const list = document.getElementById('tour-list');
  const years = [...new Set(upcoming.map((s) => s.date.slice(0, 4)))];
  list.innerHTML = years.map((y) => `
    <div class="year-group" data-year="${y}">
      <h3 class="year">${y}</h3>
      <ol class="shows">${upcoming.filter((s) => s.date.startsWith(y)).map(showRow).join('')}</ol>
    </div>`).join('');

  const filters = document.getElementById('filters');
  filters.innerHTML = COUNTRIES
    .map(([code, label]) => {
      const n = code === 'alla' ? upcoming.length : upcoming.filter((s) => s.country === code).length;
      if (!n) return '';
      return `<button class="chip" type="button" data-country="${code}" aria-pressed="${code === 'alla'}">${label}<sup>${n}</sup></button>`;
    })
    .join('');

  filters.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    const code = chip.dataset.country;
    filters.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    list.querySelectorAll('.show').forEach((li) => {
      li.hidden = code !== 'alla' && li.dataset.country !== code;
    });
    list.querySelectorAll('.year-group').forEach((g) => {
      g.hidden = !g.querySelector('.show:not([hidden])');
    });
  });
}

function renderNextShow() {
  const next = upcoming.find((s) => s.url);
  const el = document.getElementById('next-show');
  if (!next || !el) return;
  el.href = next.url;
  el.target = '_blank';
  el.rel = 'noopener';
  el.querySelector('strong').textContent = `${next.date.slice(8, 10)} ${next.m} ${next.venue}, ${next.city}`;
}

function renderMarquee() {
  const track = document.getElementById('marquee');
  const cities = [...new Set(upcoming.map((s) => s.city.toUpperCase()))];
  const run = cities.map((c) => `<span>${esc(c)}</span>`).join('');
  track.innerHTML = run + run;
}

/* ---------- Header ---------- */

function initHeader() {
  const header = document.getElementById('header');
  const hero = document.querySelector('.hero');
  const setSolid = () => header.classList.toggle('is-solid', window.scrollY > hero.offsetHeight - header.offsetHeight);
  window.addEventListener('scroll', setSolid, { passive: true });
  window.addEventListener('resize', setSolid);
  setSolid();

  // Markera aktuell sektion i menyn
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));

  // Följ-meny
  const follow = document.querySelector('[data-follow]');
  const btn = follow.querySelector('button');
  const setOpen = (open) => {
    follow.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  btn.addEventListener('click', () => setOpen(!follow.classList.contains('is-open')));
  follow.addEventListener('mouseenter', () => setOpen(true));
  follow.addEventListener('mouseleave', () => setOpen(false));
  document.addEventListener('click', (e) => { if (!follow.contains(e.target)) setOpen(false); });

  // Mobilmeny
  const overlay = document.getElementById('overlay');
  const toggle = document.querySelector('.menu-toggle');
  const setMenu = (open) => {
    overlay.classList.toggle('is-open', open);
    overlay.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) overlay.querySelector('nav a').focus({ preventScroll: true });
  };
  toggle.addEventListener('click', () => setMenu(true));
  overlay.querySelector('.overlay-close').addEventListener('click', () => { setMenu(false); toggle.focus(); });
  overlay.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) setMenu(false);
  });
}

/* ---------- Rörelse ---------- */

// Namnet glider upp inuti en klippt ruta. När det landat släpps klippet så att prickarna över Ä aldrig skärs av.
function initHeroTitle() {
  const title = document.querySelector('.hero-title');
  const last = title.querySelector('span:last-child > span');
  const done = () => title.classList.add('is-done');
  last.addEventListener('animationend', done, { once: true });
  setTimeout(done, 2000);
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 70}ms`;
    io.observe(el);
  });
}

function initParallax() {
  if (reduceMotion) return;
  const hero = document.querySelector('[data-parallax]');
  const band = document.querySelector('[data-parallax-band]');
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const vh = window.innerHeight;
    if (hero && y < vh * 1.2) hero.style.transform = `translate3d(0, ${y * parseFloat(hero.dataset.parallax)}px, 0)`;
    if (band) {
      const r = band.parentElement.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) {
        const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
        band.style.transform = `translate3d(0, ${p * -9}%, 0)`;
      }
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

// Rubriken skrivs fram som på en skrivmaskin när den syns.
function initTypewriter() {
  const el = document.querySelector('[data-typewriter]');
  if (!el || reduceMotion) return;
  const text = el.textContent;
  el.setAttribute('aria-label', text);
  el.style.position = 'relative';
  el.innerHTML = `<span aria-hidden="true" style="visibility:hidden">${esc(text)}</span><span aria-hidden="true" class="tw-live" style="position:absolute;inset:0"></span>`;
  const live = el.querySelector('.tw-live');
  live.innerHTML = '<span class="cursor"></span>';

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    io.disconnect();
    let i = 0;
    const tick = () => {
      i += 1;
      live.innerHTML = esc(text.slice(0, i)) + '<span class="cursor"></span>';
      if (i < text.length) setTimeout(tick, text[i - 1] === ' ' ? 140 : 65 + Math.random() * 70);
    };
    setTimeout(tick, 250);
  }, { threshold: 0.6 });
  io.observe(el);
}

/* ---------- Bildvisning ---------- */

function initLightbox() {
  const figures = [...document.querySelectorAll('#gallery .ph')];
  const box = document.getElementById('lightbox');
  const img = box.querySelector('img');
  const cap = document.getElementById('lightbox-caption');
  let index = 0;
  let lastFocus = null;

  const show = (i) => {
    index = (i + figures.length) % figures.length;
    const src = figures[index].querySelector('img');
    img.src = src.currentSrc || src.src;
    img.alt = src.alt;
    cap.textContent = figures[index].querySelector('figcaption').textContent;
  };
  const open = (i) => {
    lastFocus = document.activeElement;
    show(i);
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    box.querySelector('[data-lb="close"]').focus();
  };
  const close = () => {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  figures.forEach((fig, i) => fig.querySelector('button').addEventListener('click', () => open(i)));
  box.addEventListener('click', (e) => {
    const action = e.target.closest('[data-lb]')?.dataset.lb;
    if (action === 'prev') show(index - 1);
    else if (action === 'next') show(index + 1);
    else if (action === 'close' || e.target === box) close();
  });
  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
}

/* ---------- Mejllistan (demo, skickar inget) ---------- */

function initForm() {
  const form = document.getElementById('signup');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    status.textContent = 'Demo: formuläret skickas inte.';
  });
}

renderTour();
renderNextShow();
renderMarquee();
initHeader();
initHeroTitle();
initReveal();
initParallax();
initTypewriter();
initLightbox();
initForm();
