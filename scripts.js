document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (navToggle && nav) {
    const setState = (open) => {
      navToggle.setAttribute('aria-expanded', String(open));
      if (window.innerWidth < 900) {
        nav.style.display = open ? 'flex' : 'none';
        nav.style.flexDirection = 'column';
        nav.style.background = '#fff';
        nav.style.position = 'absolute';
        nav.style.top = '60px';
        nav.style.right = '20px';
        nav.style.padding = '10px 14px';
        nav.style.boxShadow = '0 10px 25px rgba(15,23,42,0.12)';
        nav.style.borderRadius = '10px';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
        nav.style.position = '';
        nav.style.boxShadow = '';
      }
    };

    let isOpen = false;
    setState(false);

    navToggle.addEventListener('click', () => {
      isOpen = !isOpen;
      setState(isOpen);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 900) {
        setState(false);
      }
    });
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      // You can add custom validation or success messages here later.
    });
  }
});
