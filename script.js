(() => {
  'use strict';

  const WHATSAPP_NUMBER = '8801792005452';

  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  const setMenuState = (open) => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mobileNav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });

  const updateHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  const filterButtons = document.querySelectorAll('.filter-button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      portfolioItems.forEach((item) => {
        const matches = filter === 'all' || item.dataset.category === filter;
        item.hidden = !matches;
      });
    });
  });


  const GALLERY_SETS = {
    "birthday": [
        "assets/images/photo_0046_2048x1365.jpg",
        "assets/images/photo_0065_1365x2048.jpg",
        "assets/images/photo_0066_2048x1365.jpg",
        "assets/images/photo_0067_1365x2048.jpg",
        "assets/images/photo_0068_2048x1365.jpg",
        "assets/images/photo_0069_1365x2048.jpg",
        "assets/images/photo_0070_2048x1365.jpg",
        "assets/images/photo_0071_1365x2048.jpg",
        "assets/images/photo_0072_1365x2048.jpg",
        "assets/images/photo_0073_2048x1365.jpg",
        "assets/images/photo_0081_2048x1365.jpg",
        "assets/images/photo_0082_2048x1365.jpg",
        "assets/images/photo_0083_2048x1365.jpg",
        "assets/images/photo_0084_1365x2048.jpg",
        "assets/images/photo_0085_2048x1365.jpg",
        "assets/images/photo_0086_2048x1365.jpg",
        "assets/images/photo_0087_1365x2048.jpg",
        "assets/images/photo_0088_1365x2048.jpg",
        "assets/images/photo_0089_2048x1365.jpg",
        "assets/images/photo_0090_2048x1365.jpg",
        "assets/images/photo_0091_2048x1365.jpg",
        "assets/images/photo_0092_2048x1365.jpg",
        "assets/images/photo_0126_2048x1152.jpg",
        "assets/images/photo_0127_1365x2048.jpg",
        "assets/images/photo_0128_1365x2048.jpg",
        "assets/images/photo_0129_1365x2048.jpg",
        "assets/images/photo_0130_2048x1365.jpg",
        "assets/images/photo_0131_2048x1365.jpg",
        "assets/images/photo_0132_2048x1365.jpg",
        "assets/images/photo_0133_2048x1365.jpg",
        "assets/images/photo_0134_2048x1365.jpg",
        "assets/images/photo_0135_2048x1365.jpg",
        "assets/images/photo_0136_2048x1365.jpg",
        "assets/images/photo_0137_2048x1365.jpg",
        "assets/images/photo_0138_2048x1365.jpg",
        "assets/images/photo_0139_1365x2048.jpg",
        "assets/images/photo_0140_2048x1365.jpg",
        "assets/images/photo_0141_2048x1365.jpg",
        "assets/images/photo_0142_2048x1365.jpg",
        "assets/images/photo_0143_1638x2048.jpg",
        "assets/images/photo_0144_1448x2048.jpg",
        "assets/images/photo_0145_2048x1638.jpg",
        "assets/images/photo_0146_2048x1365.jpg",
        "assets/images/photo_0147_2048x1365.jpg",
        "assets/images/photo_0148_1365x2048.jpg",
        "assets/images/photo_0149_2048x1365.jpg",
        "assets/images/photo_0150_2048x1365.jpg",
        "assets/images/photo_0151_2048x1365.jpg",
        "assets/images/photo_0152_2048x1365.jpg",
        "assets/images/photo_0153_2048x1365.jpg",
        "assets/images/photo_0154_2048x1365.jpg",
        "assets/images/photo_0155_2048x1365.jpg",
        "assets/images/photo_0156_2048x1365.jpg",
        "assets/images/photo_0157_2048x1365.jpg",
        "assets/images/photo_0158_2048x1365.jpg",
        "assets/images/photo_0159_2048x1365.jpg",
        "assets/images/photo_0160_1365x2048.jpg"
    ],
    "maternity": [
        "assets/images/photo_0047_1365x2048.jpg",
        "assets/images/photo_0048_1365x2048.jpg",
        "assets/images/photo_0049_1365x2048.jpg",
        "assets/images/photo_0050_1365x2048.jpg",
        "assets/images/photo_0051_1365x2048.jpg",
        "assets/images/photo_0052_1365x2048.jpg",
        "assets/images/photo_0053_1365x2048.jpg",
        "assets/images/photo_0054_1365x2048.jpg",
        "assets/images/photo_0055_1365x2048.jpg",
        "assets/images/photo_0056_1365x2048.jpg",
        "assets/images/photo_0074_1448x2048.jpg",
        "assets/images/photo_0075_1448x2048.jpg",
        "assets/images/photo_0076_1448x2048.jpg"
    ],
    "outdoor": [
        "assets/images/photo_0003_1365x2048.jpg",
        "assets/images/photo_0004_1365x2048.jpg",
        "assets/images/photo_0005_2048x1365.jpg",
        "assets/images/photo_0006_2048x1365.jpg",
        "assets/images/photo_0007_1365x2048.jpg",
        "assets/images/photo_0008_2048x1365.jpg",
        "assets/images/photo_0009_2048x1365.jpg",
        "assets/images/photo_0010_2048x1365.jpg",
        "assets/images/photo_0011_2048x1365.jpg",
        "assets/images/photo_0012_2048x1365.jpg",
        "assets/images/photo_0013_2048x1365.jpg",
        "assets/images/photo_0014_2048x1365.jpg",
        "assets/images/photo_0015_2048x1365.jpg",
        "assets/images/photo_0016_1365x2048.jpg",
        "assets/images/photo_0017_2048x1365.jpg",
        "assets/images/photo_0018_2048x1365.jpg",
        "assets/images/photo_0019_2048x1365.jpg",
        "assets/images/photo_0020_2048x1365.jpg",
        "assets/images/photo_0021_1365x2048.jpg",
        "assets/images/photo_0022_2048x1365.jpg",
        "assets/images/photo_0023_1365x2048.jpg",
        "assets/images/photo_0024_2048x1365.jpg",
        "assets/images/photo_0025_1365x2048.jpg",
        "assets/images/photo_0026_1365x2048.jpg",
        "assets/images/photo_0027_1365x2048.jpg",
        "assets/images/photo_0028_2048x1365.jpg",
        "assets/images/photo_0029_1365x2048.jpg",
        "assets/images/photo_0030_1365x2048.jpg",
        "assets/images/photo_0031_2048x1365.jpg",
        "assets/images/photo_0032_2048x1365.jpg",
        "assets/images/photo_0033_2048x1365.jpg",
        "assets/images/photo_0034_2048x1365.jpg",
        "assets/images/photo_0035_2048x1365.jpg",
        "assets/images/photo_0036_1365x2048.jpg",
        "assets/images/photo_0037_1365x2048.jpg",
        "assets/images/photo_0038_2048x1365.jpg",
        "assets/images/photo_0039_2048x1365.jpg",
        "assets/images/photo_0040_2048x1365.jpg",
        "assets/images/photo_0041_2048x1365.jpg",
        "assets/images/photo_0042_2048x1365.jpg",
        "assets/images/photo_0043_1365x2048.jpg",
        "assets/images/photo_0044_1365x2048.jpg",
        "assets/images/photo_0045_1365x2048.jpg",
        "assets/images/photo_0093_2048x1365.jpg",
        "assets/images/photo_0094_2048x1365.jpg",
        "assets/images/photo_0095_2048x1365.jpg",
        "assets/images/photo_0096_1365x2048.jpg",
        "assets/images/photo_0097_1365x2048.jpg",
        "assets/images/photo_0098_2048x1365.jpg",
        "assets/images/photo_0099_2048x1365.jpg",
        "assets/images/photo_0100_2048x1365.jpg",
        "assets/images/photo_0101_2048x1365.jpg",
        "assets/images/photo_0102_2048x1365.jpg",
        "assets/images/photo_0103_1365x2048.jpg",
        "assets/images/photo_0104_2048x1365.jpg",
        "assets/images/photo_0105_2048x1365.jpg",
        "assets/images/photo_0106_2048x1365.jpg",
        "assets/images/photo_0107_2048x1365.jpg",
        "assets/images/photo_0108_2048x1365.jpg",
        "assets/images/photo_0109_1365x2048.jpg",
        "assets/images/photo_0110_1365x2048.jpg",
        "assets/images/photo_0111_2048x1365.jpg",
        "assets/images/photo_0112_1365x2048.jpg",
        "assets/images/photo_0113_2048x1365.jpg",
        "assets/images/photo_0114_2048x1365.jpg",
        "assets/images/photo_0115_2048x1365.jpg",
        "assets/images/photo_0116_2048x1365.jpg",
        "assets/images/photo_0117_2048x1365.jpg",
        "assets/images/photo_0118_2048x1365.jpg",
        "assets/images/photo_0119_2048x1365.jpg",
        "assets/images/photo_0120_2048x1365.jpg",
        "assets/images/photo_0121_2048x1365.jpg",
        "assets/images/photo_0122_2048x1365.jpg",
        "assets/images/photo_0123_2048x1365.jpg",
        "assets/images/photo_0124_2048x1365.jpg",
        "assets/images/photo_0125_2048x1365.jpg",
        "assets/images/photo_0161_1365x2048.jpg",
        "assets/images/photo_0162_2048x1365.jpg",
        "assets/images/photo_0163_1365x2048.jpg",
        "assets/images/photo_0164_2048x1365.jpg",
        "assets/images/photo_0165_1365x2048.jpg",
        "assets/images/photo_0166_1365x2048.jpg",
        "assets/images/photo_0167_1365x2048.jpg",
        "assets/images/photo_0168_1365x2048.jpg",
        "assets/images/photo_0169_2048x1365.jpg",
        "assets/images/photo_0170_2048x1365.jpg",
        "assets/images/photo_0171_2048x1365.jpg",
        "assets/images/photo_0172_2048x1365.jpg",
        "assets/images/photo_0173_2048x1365.jpg",
        "assets/images/photo_0174_2048x1365.jpg",
        "assets/images/photo_0175_2048x1365.jpg",
        "assets/images/photo_0176_2048x1365.jpg",
        "assets/images/photo_0177_2048x1365.jpg",
        "assets/images/photo_0178_2048x1365.jpg",
        "assets/images/photo_0179_2048x1365.jpg",
        "assets/images/photo_0180_1365x2048.jpg",
        "assets/images/photo_0181_2048x1365.jpg",
        "assets/images/photo_0182_2048x1365.jpg",
        "assets/images/photo_0183_2048x1365.jpg",
        "assets/images/photo_0184_2048x1365.jpg",
        "assets/images/photo_0185_2048x1365.jpg",
        "assets/images/photo_0186_2048x1365.jpg",
        "assets/images/photo_0187_2048x1365.jpg",
        "assets/images/photo_0188_2048x1365.jpg",
        "assets/images/photo_0189_1365x2048.jpg",
        "assets/images/photo_0190_2048x1365.jpg",
        "assets/images/photo_0191_2048x1365.jpg",
        "assets/images/photo_0192_2048x1365.jpg",
        "assets/images/photo_0193_2048x1365.jpg",
        "assets/images/photo_0194_2048x1365.jpg",
        "assets/images/photo_0195_2048x1365.jpg",
        "assets/images/photo_0196_2048x1365.jpg",
        "assets/images/photo_0197_2048x1365.jpg",
        "assets/images/photo_0198_1365x2048.jpg",
        "assets/images/photo_0199_2048x1365.jpg",
        "assets/images/photo_0200_2048x1365.jpg"
    ],
    "wedding": [
        "assets/images/portfolio-wedding-01.webp",
        "assets/images/portfolio-wedding-02.webp",
        "assets/images/portfolio-wedding-03.webp",
        "assets/images/portfolio-wedding-04.webp",
        "assets/images/wedding-01.webp",
        "assets/images/wedding-02.webp",
        "assets/images/wedding-03.webp"
    ]
};

  const GALLERY_LABELS = {
    birthday: 'Birthday celebration',
    maternity: 'Maternity and family session',
    outdoor: 'Outdoor theme shoot',
    wedding: 'Wedding moment'
  };

  const galleryState = new Map();

  const getImageShape = (src, index) => {
    const match = src.match(/_(\d+)x(\d+)\.(?:jpg|jpeg|webp)$/i);
    if (!match) return index % 7 === 0 ? 'service-gallery-wide' : '';
    const width = Number(match[1]);
    const height = Number(match[2]);
    if (height > width * 1.18) return 'service-gallery-tall';
    if (width > height * 1.35 && index % 3 === 0) return 'service-gallery-wide';
    return '';
  };

  const createGalleryItem = (src, galleryName, index) => {
    const figure = document.createElement('figure');
    const shape = getImageShape(src, index);
    figure.className = `service-gallery-item ${shape}`;

    const label = `${GALLERY_LABELS[galleryName] || 'Photography moment'} ${index + 1}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'gallery-open';
    button.dataset.full = src;
    button.setAttribute('aria-label', `Open ${label}`);

    const image = document.createElement('img');
    image.src = src;
    image.alt = label;
    image.loading = 'lazy';
    image.decoding = 'async';

    const caption = document.createElement('figcaption');
    caption.textContent = GALLERY_LABELS[galleryName] || 'PixelPuzzle photography';

    button.appendChild(image);
    figure.append(button, caption);
    return figure;
  };

  const updateGalleryCounter = (galleryName, shown, total) => {
    const counter = document.querySelector(`[data-gallery-count="${galleryName}"]`);
    if (counter) counter.textContent = `Showing ${shown} of ${total} photos.`;
  };

  const renderGalleryBatch = (galleryName) => {
    const grid = document.querySelector(`[data-gallery-set="${galleryName}"]`);
    const images = GALLERY_SETS[galleryName] || [];
    if (!grid || images.length === 0) return;

    const state = galleryState.get(galleryName) || { shown: 0, step: Number(grid.dataset.galleryStep || 12) };
    const next = Math.min(state.shown + state.step, images.length);
    const fragment = document.createDocumentFragment();

    for (let index = state.shown; index < next; index += 1) {
      fragment.appendChild(createGalleryItem(images[index], galleryName, index));
    }

    grid.appendChild(fragment);
    state.shown = next;
    galleryState.set(galleryName, state);
    updateGalleryCounter(galleryName, next, images.length);

    const loadButton = document.querySelector(`[data-gallery-load="${galleryName}"]`);
    if (loadButton) {
      loadButton.hidden = next >= images.length;
      loadButton.textContent = `Load more photos (${images.length - next} remaining)`;
    }
  };

  document.querySelectorAll('[data-gallery-set]').forEach((grid) => {
    renderGalleryBatch(grid.dataset.gallerySet);
  });

  document.querySelectorAll('[data-gallery-load]').forEach((button) => {
    button.addEventListener('click', () => renderGalleryBatch(button.dataset.galleryLoad));
  });

  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.hidden = true;
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image">×</button><img alt="Expanded photography preview">';
  document.body.appendChild(lightbox);
  const lightboxImage = lightbox.querySelector('img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('.gallery-open');
    if (!trigger) return;
    lightboxImage.src = trigger.dataset.full;
    lightboxImage.alt = trigger.querySelector('img')?.alt || 'Expanded photography preview';
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    lightboxClose.focus();
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  document.querySelectorAll('.package-button').forEach((button) => {
    button.addEventListener('click', () => {
      const packageName = button.dataset.package || 'a photography package';
      openWhatsApp(`Hello PixelPuzzle, I am interested in ${packageName}. Please confirm availability and booking details.`);
    });
  });

  document.querySelectorAll('.faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const answer = button.closest('.faq-item')?.querySelector('.faq-answer');

      button.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.hidden = expanded;
    });
  });

  const bookingForm = document.getElementById('bookingForm');
  const eventDate = document.getElementById('eventDate');

  if (eventDate) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];
    eventDate.min = localDate;
  }

  const setFieldError = (field, message) => {
    const error = document.querySelector(`[data-error-for="${field.id}"]`);
    field.classList.toggle('invalid', Boolean(message));
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
  };

  const validatePhone = (value) => /^01\d{9}$/.test(value.replace(/[\s-]/g, ''));

  bookingForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const fullName = String(formData.get('fullName') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const date = String(formData.get('eventDate') || '').trim();
    const eventType = String(formData.get('eventType') || '').trim();
    const location = String(formData.get('eventLocation') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const fields = {
      fullName: document.getElementById('fullName'),
      phone: document.getElementById('phone'),
      eventDate: document.getElementById('eventDate'),
      eventType: document.getElementById('eventType')
    };

    let valid = true;

    if (!fullName) {
      setFieldError(fields.fullName, 'Please enter your name.');
      valid = false;
    } else {
      setFieldError(fields.fullName, '');
    }

    if (!phone) {
      setFieldError(fields.phone, 'Please enter your phone number.');
      valid = false;
    } else if (!validatePhone(phone)) {
      setFieldError(fields.phone, 'Use an 11-digit Bangladesh mobile number.');
      valid = false;
    } else {
      setFieldError(fields.phone, '');
    }

    if (!date) {
      setFieldError(fields.eventDate, 'Please select your event date.');
      valid = false;
    } else {
      setFieldError(fields.eventDate, '');
    }

    if (!eventType) {
      setFieldError(fields.eventType, 'Please choose an event type.');
      valid = false;
    } else {
      setFieldError(fields.eventType, '');
    }

    if (!valid) {
      bookingForm.querySelector('.invalid')?.focus();
      return;
    }

    const lines = [
      'Hello PixelPuzzle, I want to check event availability.',
      '',
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Event: ${eventType}`,
      `Date: ${date}`,
      `Location: ${location || 'Not provided'}`,
      `Details: ${message || 'Not provided'}`
    ];

    openWhatsApp(lines.join('\n'));
  });

  const currentYear = document.getElementById('currentYear');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
