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
