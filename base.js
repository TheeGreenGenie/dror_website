// =================== IMAGE LISTS ===================
const churchImages = [
  'assets/photos/church/DSC_0372.jpg',
  'assets/photos/church/DSC_0374.jpg',
  'assets/photos/church/DSC_0376.jpg',
  'assets/photos/church/DSC_0379.jpg',
  'assets/photos/church/DSC_0381.jpg',
  'assets/photos/church/DSC_0385.jpg',
  'assets/photos/church/DSC_0387.jpg',
  'assets/photos/church/DSC_0388.jpg',
  'assets/photos/church/DSC_0389.jpg',
  'assets/photos/church/DSC_0391.jpg',
  'assets/photos/church/DSC_0392.jpg',
  'assets/photos/church/DSC_0393.jpg',
  'assets/photos/church/DSC_0395.jpg',
  'assets/photos/church/DSC_0397.jpg',
  'assets/photos/church/DSC_0400.jpg',
  'assets/photos/church/DSC_0402.jpg',
  'assets/photos/church/DSC_0404.jpg',
  'assets/photos/church/DSC_0406.jpg',
  'assets/photos/church/DSC_0408.jpg',
  'assets/photos/church/DSC_0409.jpg',
  'assets/photos/church/DSC_0410.jpg',
  'assets/photos/church/DSC_0411.jpg',
  'assets/photos/church/DSC_0415.jpg',
  'assets/photos/church/DSC_0416.jpg',
  'assets/photos/church/DSC_0417.jpg'
];

const newDivineImages = [
  'assets/photos/divine/DSC_0072.jpg',
  'assets/photos/divine/DSC_0074.jpg',
  'assets/photos/divine/DSC_0077.jpg',
  'assets/photos/divine/DSC_0078.jpg',
  'assets/photos/divine/DSC_0080.jpg',
  'assets/photos/divine/DSC_0081.jpg',
  'assets/photos/divine/DSC_0083.jpg',
  'assets/photos/divine/DSC_0085.jpg',
  'assets/photos/divine/DSC_0086.jpg',
  'assets/photos/divine/DSC_0109.jpg',
  'assets/photos/divine/DSC_0115.jpg',
  'assets/photos/divine/DSC_0118.jpg',
  'assets/photos/divine/DSC_0119.jpg',
  'assets/photos/divine/DSC_0120.jpg',
  'assets/photos/divine/DSC_0121.jpg',
  'assets/photos/divine/DSC_0122.jpg',
  'assets/photos/divine/DSC_0124.jpg',
  'assets/photos/divine/DSC_0126.jpg',
  'assets/photos/divine/DSC_0128.jpg',
  'assets/photos/divine/DSC_0129.jpg',
  'assets/photos/divine/DSC_0131.jpg',
  'assets/photos/divine/DSC_0132.jpg',
  'assets/photos/divine/DSC_0134.jpg',
  'assets/photos/divine/DSC_0137.jpg',
  'assets/photos/divine/DSC_0139.jpg',
  'assets/photos/divine/DSC_0149.jpg',
  'assets/photos/divine/DSC_0153.jpg',
  'assets/photos/divine/DSC_0156.jpg',
  'assets/photos/divine/DSC_0159.jpg',
  'assets/photos/divine/DSC_0164.jpg',
  'assets/photos/divine/DSC_0165.jpg',
  'assets/photos/divine/DSC_0176.jpg',
  'assets/photos/divine/DSC_0178.jpg',
  'assets/photos/divine/DSC_0182.jpg',
  'assets/photos/divine/DSC_0185.jpg',
  'assets/photos/divine/DSC_0187.jpg',
  'assets/photos/divine/DSC_0190.jpg',
  'assets/photos/divine/DSC_0195.jpg',
  'assets/photos/divine/DSC_0197.jpg',
  'assets/photos/divine/IMG_6061.jpg',
  'assets/photos/divine/IMG_6062.jpg',
  'assets/photos/divine/IMG_6064.jpg',
  'assets/photos/divine/IMG_6065.jpg',
  'assets/photos/divine/IMG_6066.jpg',
  'assets/photos/divine/IMG_6067.jpg',
  'assets/photos/divine/IMG_6068.jpg',
  'assets/photos/divine/IMG_6069.jpg',
  'assets/photos/divine/IMG_6070.jpg',
  'assets/photos/divine/IMG_6071.jpg',
  'assets/photos/divine/IMG_6072.jpg',
  'assets/photos/divine/IMG_6073.jpg',
  'assets/photos/divine/IMG_6074.jpg',
  'assets/photos/divine/IMG_6075.jpg',
  'assets/photos/divine/IMG_6078.jpg',
  'assets/photos/divine/IMG_6088.jpg',
  'assets/photos/divine/IMG_6089.jpg',
  'assets/photos/divine/IMG_6090.jpg',
  'assets/photos/divine/IMG_6091.jpg',
  'assets/photos/divine/IMG_6102.jpg',
  'assets/photos/divine/IMG_6103.jpg',
  'assets/photos/divine/IMG_6104.jpg',
  'assets/photos/divine/IMG_6105.jpg',
  'assets/photos/divine/IMG_6106.jpg',
  'assets/photos/divine/IMG_6107.jpg',
  'assets/photos/divine/IMG_6108.jpg',
  'assets/photos/divine/IMG_6121.jpg',
  'assets/photos/divine/IMG_6122.jpg',
  'assets/photos/divine/IMG_6123.jpg',
  'assets/photos/divine/IMG_6124.jpg',
  'assets/photos/divine/IMG_6125.jpg',
  'assets/photos/divine/jml.jpg',
  'assets/photos/divine/mml.jpg'
];

// Every display photo has a full-resolution twin under assets/photos/full/
const fullSize = src => src.replace('assets/photos/', 'assets/photos/full/');

// Photos used by the compact home-page strip.
// The church set is used first because those files are the lightest to load.
const stripImages = [...churchImages];

// =================== HEADER NAV (mobile) ===================
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close the menu when a link is tapped or the viewport grows back to desktop
  nav.addEventListener('click', e => {
    if (e.target.tagName !== 'A') return;
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// =================== HOME — FULL-PAGE SCROLL SNAP ===================
// Mandatory snapping only turns on when every panel actually fits on screen.
// If one is taller than the viewport, mandatory snap would pull the visitor
// back to the panel's top edge and hide the overflow — so we stay on
// "proximity", which snaps only when you are already close to an edge.
function initSnap() {
  const root = document.documentElement;
  if (!root.classList.contains('snap')) return;

  const panels = document.querySelectorAll('.panel');
  if (!panels.length) return;

  function measure() {
    const headerH = document.querySelector('.site-header')?.offsetHeight ?? 0;
    const available = window.innerHeight - headerH;
    let allFit = true;

    panels.forEach(panel => {
      if (panel.scrollHeight > available + 2) allFit = false;
    });

    root.classList.toggle('snap-mandatory', allFit);
  }

  // Debounce: resize fires constantly while mobile browser chrome slides away,
  // and a ResizeObserver can fire repeatedly as images decode.
  let timer;
  function remeasure() {
    clearTimeout(timer);
    timer = setTimeout(measure, 120);
  }

  window.addEventListener('resize', remeasure);
  window.addEventListener('load', remeasure);

  // Panels grow when images decode or webfonts swap in — watch them directly
  // rather than guessing when layout has settled.
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(remeasure);
    panels.forEach(p => ro.observe(p));
  }

  measure();
}

// =================== HOME — COMPACT 3-UP STRIP ===================
function initStrip() {
  const track = document.getElementById('strip-track');
  const dotsWrap = document.getElementById('strip-dots');
  if (!track) return;

  const prevBtn = document.querySelector('.strip-btn--prev');
  const nextBtn = document.querySelector('.strip-btn--next');

  // Build the slides once
  const photos = [...stripImages].sort(() => Math.random() - 0.5).slice(0, 12);
  track.innerHTML = photos
    .map(src => `<div class="strip-slide"><img src="${src}" alt="" loading="lazy"></div>`)
    .join('');

  const slides = Array.from(track.children);
  let page = 0;
  let perView = 3;
  let pageCount = 1;
  let timer = null;

  function visibleCount() {
    if (window.innerWidth <= 760) return 1;
    if (window.innerWidth <= 960) return 2;
    return 3;
  }

  function render() {
    perView = visibleCount();
    pageCount = Math.max(1, Math.ceil(slides.length / perView));
    page = Math.min(page, pageCount - 1);

    // Shift by one full viewport width per page
    const viewport = track.parentElement.clientWidth;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(-${page * (viewport + gap)}px)`;

    dotsWrap.innerHTML = Array.from({ length: pageCount }, (_, i) =>
      `<button class="strip-dot${i === page ? ' strip-dot--active' : ''}" data-page="${i}" aria-label="Go to page ${i + 1}"></button>`
    ).join('');
  }

  function goTo(next) {
    page = ((next % pageCount) + pageCount) % pageCount;
    render();
  }

  function restartAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(page + 1), 5000);
  }

  prevBtn?.addEventListener('click', () => { goTo(page - 1); restartAuto(); });
  nextBtn?.addEventListener('click', () => { goTo(page + 1); restartAuto(); });

  dotsWrap.addEventListener('click', e => {
    const dot = e.target.closest('.strip-dot');
    if (!dot) return;
    goTo(parseInt(dot.dataset.page, 10));
    restartAuto();
  });

  // Pause the autoplay while the visitor is looking at a photo
  const viewportEl = track.parentElement;
  viewportEl.addEventListener('mouseenter', () => clearInterval(timer));
  viewportEl.addEventListener('mouseleave', restartAuto);

  // Swipe support
  let touchStartX = null;
  viewportEl.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  viewportEl.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(delta) < 50) return;
    goTo(page + (delta < 0 ? 1 : -1));
    restartAuto();
  }, { passive: true });

  window.addEventListener('resize', render);

  render();
  restartAuto();
}

// =================== GALLERY CAROUSEL ===================
function initGallery() {
  const slides = document.querySelectorAll('.Gallery .slide');
  if (!slides.length) return;

  const galleries = [churchImages, newDivineImages];
  const indices = galleries.map(() => 0);

  // Tab switching
  const tabs = document.querySelectorAll('.gallery-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.gallery, 10);
      tabs.forEach(t => t.classList.remove('gallery-tab--active'));
      tab.classList.add('gallery-tab--active');
      slides.forEach(s => s.classList.remove('slide--active'));
      slides[idx].classList.add('slide--active');
    });
  });

  // Prev / next per slide
  slides.forEach((slide, i) => {
    const gallery = galleries[i];
    if (!gallery) return;
    const img = slide.querySelector('.slide-photo');
    const counter = slide.querySelector('.slide-counter');
    const fullLink = slide.querySelector('.slide-full');
    const prevBtn = slide.querySelector('.slide-btn--prev');
    const nextBtn = slide.querySelector('.slide-btn--next');

    function changeImage(newIndex, instant) {
      indices[i] = ((newIndex % gallery.length) + gallery.length) % gallery.length;
      if (counter) counter.textContent = `${indices[i] + 1} / ${gallery.length}`;
      if (fullLink) fullLink.href = fullSize(gallery[indices[i]]);

      if (instant) {
        img.src = gallery[indices[i]];
        return;
      }
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = gallery[indices[i]];
        img.style.opacity = '1';
      }, 300);
    }

    changeImage(0, true);

    prevBtn.addEventListener('click', () => changeImage(indices[i] - 1));
    nextBtn.addEventListener('click', () => changeImage(indices[i] + 1));

    let touchStartX = null;
    slide.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    slide.addEventListener('touchend', e => {
      if (touchStartX === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(delta) < 50) return;
      changeImage(indices[i] + (delta < 0 ? 1 : -1));
    }, { passive: true });
  });

  // Arrow keys move the visible gallery
  document.addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const active = document.querySelector('.Gallery .slide--active');
    if (!active) return;
    active.querySelector(e.key === 'ArrowLeft' ? '.slide-btn--prev' : '.slide-btn--next').click();
  });
}

// =================== FOOTER YEAR ===================
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// =================== INIT ===================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initStrip();
  initSnap();
  initGallery();
  initYear();
});
