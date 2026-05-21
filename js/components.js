// ============================================
// SATYA'PROPERTY - Shared Components
// ============================================

const SP_COMPONENTS = {
  langBar: () => `
<div class="lang-bar">
  <div class="lang-bar-inner">
    <div class="lang-switcher">
      <button class="lang-btn active" data-lang="id">ID</button>
      <span class="lang-divider">|</span>
      <button class="lang-btn" data-lang="en">EN</button>
    </div>
    <div class="lang-bar-contact">
      <a href="tel:+6283115680007">📞 +62 831-1568-0007</a>
      <span class="sep">|</span>
      <a href="mailto:didikaramoy620@gmail.com">✉ didikaramoy620@gmail.com</a>
      <span class="sep">|</span>
      <span>Senin–Sabtu: 09.00–18.00 WIB</span>
    </div>
  </div>
</div>`,

  navbar: (active = 'home') => `
<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="logo">
      <img src="assets/images/logo.svg" alt="Satya Property Logo" class="logo-img" onerror="this.onerror=null;this.src='assets/images/logo-fallback.png'">
      <div class="logo-text">
        <span class="logo-name">SATYA<span>'</span>PROPERTY</span>
        <span class="logo-tagline">Premium Real Estate</span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" class="${active==='home'?'active':''}" data-i18n="nav_home">Beranda</a></li>
      <li><a href="properties.html" class="${active==='properties'?'active':''}" data-i18n="nav_properties">Properti</a></li>
      <li><a href="about.html" class="${active==='about'?'active':''}" data-i18n="nav_about">Tentang</a></li>
      <li><a href="articles.html" class="${active==='articles'?'active':''}" data-i18n="nav_articles">Artikel</a></li>
      <li><a href="contact.html" class="${active==='contact'?'active':''}" data-i18n="nav_contact">Kontak</a></li>
    </ul>
    <div class="nav-cta">
      <a href="contact.html" class="btn-nav-outline" data-i18n="nav_cta">Konsultasi Gratis</a>
      <div class="nav-hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</nav>
<div class="mobile-nav" id="mobileNav">
  <button class="mobile-nav-close" id="mobileNavClose">✕</button>
  <ul class="mobile-nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="properties.html">Properti</a></li>
    <li><a href="about.html">Tentang</a></li>
    <li><a href="articles.html">Artikel</a></li>
    <li><a href="contact.html">Kontak</a></li>
  </ul>
</div>`,

  footer: () => `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo footer-logo">
          <img src="assets/images/logo.svg" alt="Satya Property" class="logo-img" style="width:40px;height:40px;" onerror="this.onerror=null;this.src='assets/images/logo-fallback.png'">
          <div class="logo-text">
            <span class="logo-name">SATYA<span>'</span>PROPERTY</span>
            <span class="logo-tagline">Premium Real Estate</span>
          </div>
        </a>
        <p class="footer-desc" data-i18n="footer_desc">Platform properti enterprise terpercaya dengan ribuan properti premium di seluruh Indonesia.</p>
        <div class="footer-social">
          <a href="https://www.instagram.com/satyaproperty" target="_blank" rel="noopener" class="social-link" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.facebook.com/satyaproperty" target="_blank" rel="noopener" class="social-link" title="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://wa.me/6283115680007" target="_blank" rel="noopener" class="social-link" title="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@styaasukakebabb?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener" class="social-link" title="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.19a8.16 8.16 0 0 0 4.77 1.52V7.27a4.85 4.85 0 0 1-1-.58z"/></svg>
          </a>
          <a href="https://www.youtube.com/@satyaproperty" target="_blank" rel="noopener" class="social-link" title="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4 class="footer-heading">Navigasi</h4>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="properties.html">Semua Properti</a></li>
          <li><a href="about.html">Tentang Kami</a></li>
          <li><a href="articles.html">Artikel & Edukasi</a></li>
          <li><a href="contact.html">Kontak</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-heading">Properti</h4>
        <ul class="footer-links">
          <li><a href="property-detail.html?id=1">Villa Kintamani Hills</a></li>
          <li><a href="property-detail.html?id=2">Griya Nusantara</a></li>
          <li><a href="property-detail.html?id=3">Skyline Residence</a></li>
          <li><a href="property-detail.html?id=4">Harmoni Seaview</a></li>
          <li><a href="property-detail.html?id=5">Royal Highlands</a></li>
          <li><a href="property-detail.html?id=6">The Pinnacle</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-heading">Kontak</h4>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span>Jl. Sudirman Kav. 52-53, Senayan, Jakarta Pusat 10220, Indonesia</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📞</span>
          <span><a href="tel:+6283115680007">+62 831-1568-0007</a></span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">✉</span>
          <span><a href="mailto:didikaramoy620@gmail.com">didikaramoy620@gmail.com</a></span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">🕒</span>
          <span>Senin–Sabtu: 09.00–18.00 WIB</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2024 SATYA'PROPERTY. All rights reserved. | Designed with excellence.</p>
      <div class="footer-legal">
        <a href="#">Kebijakan Privasi</a>
        <a href="#">Syarat & Ketentuan</a>
        <a href="#">Peta Situs</a>
      </div>
    </div>
  </div>
</footer>`,

  waFloat: () => `
<div class="wa-float">
  <a href="https://wa.me/6283115680007?text=Halo%20SATYA'PROPERTY%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20tentang%20properti%20Anda." target="_blank" class="wa-btn" title="Chat WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
  </a>
</div>`,

  galleryModal: () => `
<div class="gallery-modal" id="galleryModal">
  <button class="gallery-close" id="galleryClose">✕</button>
  <button class="gallery-prev" id="galleryPrev">‹</button>
  <img class="gallery-modal-img" id="galleryModalImg" src="" alt="Gallery">
  <button class="gallery-next" id="galleryNext">›</button>
</div>`
};
