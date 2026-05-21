// ============================================
// SATYA'PROPERTY - Main JavaScript
// ============================================

// Language data
const translations = {
  id: {
    nav_home: "Beranda",
    nav_properties: "Properti",
    nav_about: "Tentang",
    nav_articles: "Artikel",
    nav_contact: "Kontak",
    nav_cta: "Konsultasi Gratis",
    hero_label: "Platform Properti Premium",
    hero_title_1: "Temukan Hunian",
    hero_title_2: "Impian Anda",
    hero_subtitle: "Properti eksklusif pilihan untuk keluarga dan investor yang menghargai kualitas, lokasi strategis, dan nilai investasi jangka panjang.",
    hero_cta1: "Jelajahi Properti",
    hero_cta2: "Konsultasi Gratis",
    stat1: "Properti Terjual",
    stat2: "Klien Puas",
    stat3: "Kota di Indonesia",
    stat4: "Tahun Berpengalaman",
    search_title: "Cari Properti Ideal Anda",
    search_keyword: "Kata Kunci / Lokasi",
    search_type: "Tipe Properti",
    search_price: "Kisaran Harga",
    search_size: "Luas Bangunan",
    search_btn: "Cari Sekarang",
    section_featured: "Properti Unggulan",
    section_properties: "Semua Properti",
    section_why: "Mengapa Satya Property",
    section_testimonials: "Testimoni Klien",
    section_articles: "Artikel & Edukasi",
    cta_title: "Siap Menemukan Rumah Impian Anda?",
    cta_desc: "Tim konsultan kami siap membantu Anda menemukan properti terbaik sesuai kebutuhan dan anggaran.",
    cta_btn1: "Hubungi Kami",
    cta_btn2: "Lihat Semua Properti",
    footer_desc: "Platform properti enterprise terpercaya dengan ribuan properti premium di seluruh Indonesia.",
  },
  en: {
    nav_home: "Home",
    nav_properties: "Properties",
    nav_about: "About",
    nav_articles: "Articles",
    nav_contact: "Contact",
    nav_cta: "Free Consultation",
    hero_label: "Premium Property Platform",
    hero_title_1: "Discover Your Dream",
    hero_title_2: "Property",
    hero_subtitle: "Exclusive properties curated for families and investors who value quality, strategic location, and long-term investment.",
    hero_cta1: "Explore Properties",
    hero_cta2: "Free Consultation",
    stat1: "Properties Sold",
    stat2: "Happy Clients",
    stat3: "Cities in Indonesia",
    stat4: "Years Experience",
    search_title: "Find Your Ideal Property",
    search_keyword: "Keyword / Location",
    search_type: "Property Type",
    search_price: "Price Range",
    search_size: "Building Size",
    search_btn: "Search Now",
    section_featured: "Featured Properties",
    section_properties: "All Properties",
    section_why: "Why Satya Property",
    section_testimonials: "Client Testimonials",
    section_articles: "Articles & Education",
    cta_title: "Ready to Find Your Dream Home?",
    cta_desc: "Our consultant team is ready to help you find the best property to suit your needs and budget.",
    cta_btn1: "Contact Us",
    cta_btn2: "View All Properties",
    footer_desc: "Trusted enterprise property platform with thousands of premium properties across Indonesia.",
  }
};

let currentLang = localStorage.getItem('sp_lang') || 'id';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sp_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

// ============ NAVBAR ============
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
  // Mobile nav
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav-close');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }
  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ============ HERO SLIDER ============
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  let current = 0;
  let autoPlay;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    clearInterval(autoPlay);
    goTo(i);
    autoPlay = setInterval(() => goTo(current + 1), 6000);
  }));

  autoPlay = setInterval(() => goTo(current + 1), 6000);
}

// ============ SCROLL ANIMATIONS ============
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ============ COUNTER ANIMATION ============
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 2000;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// ============ READING PROGRESS ============
function initReadingProgress() {
  const bar = document.querySelector('.read-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    bar.style.width = pct + '%';
  });
}

// ============ GALLERY MODAL ============
let galleryImages = [];
let galleryIndex = 0;

function initGallery() {
  const modal = document.querySelector('.gallery-modal');
  if (!modal) return;
  const modalImg = modal.querySelector('.gallery-modal-img');
  const closeBtn = modal.querySelector('.gallery-close');
  const prevBtn = modal.querySelector('.gallery-prev');
  const nextBtn = modal.querySelector('.gallery-next');

  // Collect all gallery images
  document.querySelectorAll('.gallery-thumb, .detail-hero-main img, .detail-hero-thumb img').forEach((img, i) => {
    galleryImages.push(img.src);
    img.closest('[data-gallery]')?.addEventListener('click', () => openGallery(i));
  });

  document.querySelectorAll('[data-gallery-open]').forEach(btn => {
    btn.addEventListener('click', () => openGallery(0));
  });

  function openGallery(index) {
    galleryIndex = index;
    modalImg.src = galleryImages[galleryIndex];
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    galleryIndex = (galleryIndex + dir + galleryImages.length) % galleryImages.length;
    modalImg.style.opacity = '0';
    setTimeout(() => {
      modalImg.src = galleryImages[galleryIndex];
      modalImg.style.opacity = '1';
    }, 150);
  }

  closeBtn?.addEventListener('click', closeGallery);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeGallery(); });
  prevBtn?.addEventListener('click', () => navigate(-1));
  nextBtn?.addEventListener('click', () => navigate(1));
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

// ============ MAP ANIMATION ============
function initMapAnimations() {
  const mapBtns = document.querySelectorAll('.btn-map-primary');
  mapBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mapContainer = document.querySelector('.map-container');
      if (!mapContainer) return;
      mapContainer.style.transform = 'scale(0.98)';
      mapContainer.style.transition = 'transform 0.3s ease';
      setTimeout(() => {
        mapContainer.style.transform = 'scale(1)';
      }, 300);
    });
  });
}

// ============ CONTACT FORM ============
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  // Get WhatsApp number from data attribute
  const waNumber = form.dataset.wa || '6283115680007';

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || '';
    const phone = form.querySelector('[name="phone"]')?.value || '';
    const subject = form.querySelector('[name="subject"]')?.value || '';
    const msg = form.querySelector('[name="message"]')?.value || '';
    const prop = form.querySelector('[name="property"]')?.value || '';

    // WhatsApp default message
    let waMsg = `Halo SATYA'PROPERTY,%0A%0ASaya ${name}%0ATelepon: ${phone}%0A`;
    if (prop) waMsg += `Tertarik dengan: ${prop}%0A`;
    if (subject) waMsg += `Perihal: ${subject}%0A`;
    if (msg) waMsg += `%0APesan: ${msg}`;
    waMsg += `%0A%0ATerima kasih.`;

    const waUrl = `https://wa.me/${waNumber}?text=${waMsg}`;
    window.open(waUrl, '_blank');

    const successEl = document.querySelector('.success-msg');
    if (successEl) {
      successEl.style.display = 'block';
      form.reset();
      setTimeout(() => successEl.style.display = 'none', 5000);
    }
  });
}

// ============ LAZY IMAGES ============
function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return; // browser supports lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        observer.unobserve(img);
      }
    });
  });
  images.forEach(img => observer.observe(img));
}

// ============ SMOOTH HOVER CARDS ============
function initCardHovers() {
  document.querySelectorAll('.property-card, .testimonial-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const tiltX = (y - cy) / cy * 3;
      const tiltY = (cx - x) / cx * 3;
      card.style.transform = `translateY(-6px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
    });
  });
}

// ============ ARTICLE PARAGRAPH FADE ============
function initArticleFade() {
  const paragraphs = document.querySelectorAll('.article-content-text p, .article-content-text h3');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  paragraphs.forEach(p => {
    p.style.opacity = '0';
    p.style.transform = 'translateY(16px)';
    p.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(p);
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);

  initNavbar();
  initHeroSlider();
  initScrollAnimations();
  initCounters();
  initReadingProgress();
  initGallery();
  initMapAnimations();
  initContactForm();
  initLazyImages();
  initCardHovers();
  initArticleFade();
});
