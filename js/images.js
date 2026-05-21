// ============================================
// SATYA'PROPERTY - Image Configuration
// All images sourced from Unsplash (free license)
// Browser loads these directly from CDN
// ============================================

const SP_IMAGES = {
  // ── HERO SLIDES ──────────────────────────────
  hero: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop&auto=format",  // Modern luxury villa exterior
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90&fit=crop&auto=format",  // Luxury house with pool
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90&fit=crop&auto=format",  // Contemporary mansion
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90&fit=crop&auto=format",  // Luxury home night
  ],

  // ── PROPERTY MAIN IMAGES ─────────────────────
  // Prop 1: Villa Kintamani Hills (Bali hillside villa)
  prop1: {
    main:     "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=900&q=88&fit=crop&auto=format",
    pool:     "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=88&fit=crop&auto=format",
    interior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=88&fit=crop&auto=format",
    living:   "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&q=88&fit=crop&auto=format",
    bedroom:  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=88&fit=crop&auto=format",
    kitchen:  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=88&fit=crop&auto=format",
    garden:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=88&fit=crop&auto=format",
    ext2:     "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=88&fit=crop&auto=format",
  },
  // Prop 2: Griya Nusantara (Jakarta premium cluster)
  prop2: {
    main:     "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=88&fit=crop&auto=format",
    pool:     "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=900&q=88&fit=crop&auto=format",
    interior: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=88&fit=crop&auto=format",
  },
  // Prop 3: Skyline Residence (Jakarta penthouse)
  prop3: {
    main:     "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=88&fit=crop&auto=format",
    pool:     "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=900&q=88&fit=crop&auto=format",
    interior: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=88&fit=crop&auto=format",
  },
  // Prop 4: Harmoni Seaview (Bali beach villa)
  prop4: {
    main:     "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=900&q=88&fit=crop&auto=format",
    pool:     "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=88&fit=crop&auto=format",
    interior: "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=900&q=88&fit=crop&auto=format",
  },
  // Prop 5: Royal Highlands (Surabaya gated)
  prop5: {
    main:     "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=88&fit=crop&auto=format",
    pool:     "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=88&fit=crop&auto=format",
    interior: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=900&q=88&fit=crop&auto=format",
  },
  // Prop 6: The Pinnacle (BSD City townhouse)
  prop6: {
    main:     "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&q=88&fit=crop&auto=format",
    pool:     "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=900&q=88&fit=crop&auto=format",
    interior: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=900&q=88&fit=crop&auto=format",
  },

  // ── ABOUT PAGE ───────────────────────────────
  aboutMain:  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=88&fit=crop&auto=format",
  aboutTeam:  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=88&fit=crop&auto=format",

  // ── ARTICLES ─────────────────────────────────
  article1: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=88&fit=crop&auto=format",
  article2: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=88&fit=crop&auto=format",
  article3: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=88&fit=crop&auto=format",
  article4: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=88&fit=crop&auto=format",
  article5: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=88&fit=crop&auto=format",
  article6: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=88&fit=crop&auto=format",

  // ── TESTIMONIALS / TEAM (professional headshots) ─
  testi1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85&fit=crop&auto=format",
  testi2: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&q=85&fit=crop&auto=format",
  testi3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=85&fit=crop&auto=format",
  testi4: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=85&fit=crop&auto=format",
  testi5: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85&fit=crop&auto=format",
  testi6: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85&fit=crop&auto=format",
  team1:  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85&fit=crop&auto=format",
  team2:  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85&fit=crop&auto=format",
  team3:  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85&fit=crop&auto=format",
  team4:  "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=85&fit=crop&auto=format",
  agent1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=85&fit=crop&auto=format",
};

// Auto-inject all images on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img[data-sp]').forEach(function(img) {
    var key = img.getAttribute('data-sp');
    // Parse nested keys like "prop1.main"
    var parts = key.split('.');
    var src = SP_IMAGES;
    parts.forEach(function(p) { if (src) src = src[p]; });
    if (src && typeof src === 'string') {
      img.src = src;
      img.removeAttribute('data-sp');
    }
  });
});
