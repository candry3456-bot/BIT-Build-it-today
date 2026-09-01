const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const glow = document.querySelector('.cursor-glow');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

window.addEventListener('pointermove', e => {
  if (glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('applicationForm');
const success = document.getElementById('successMessage');

function setError(field, message) {
  const label = field.closest('label');
  const error = label?.querySelector('.error');
  if (error) error.textContent = message;
  field.setAttribute('aria-invalid', 'true');
}

function clearErrors() {
  form.querySelectorAll('.error').forEach(e => e.textContent = '');
  form.querySelectorAll('[aria-invalid="true"]').forEach(e => e.removeAttribute('aria-invalid'));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  clearErrors();
  success.classList.remove('show');

  let valid = true;
  const required = ['fullName','email','phone','school','guardian'];

  required.forEach(name => {
    const field = form.elements[name];
    if (!field.value.trim()) {
      setError(field, 'This field is required.');
      valid = false;
    }
  });

  const email = form.elements.email;
  if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setError(email, 'Enter a valid email address.');
    valid = false;
  }

  const path = form.querySelector('input[name="path"]:checked');
  if (!path) {
    form.querySelector('.path-error').textContent = 'Choose one learning path.';
    valid = false;
  }

  const consent = form.elements.consent;
  if (!consent.checked) {
    form.querySelector('.consent-error').textContent = 'Consent is required before submitting.';
    valid = false;
  }

  if (!valid) {
    const firstError = form.querySelector('[aria-invalid="true"]') || form.querySelector('.path-error');
    firstError?.scrollIntoView({behavior:'smooth', block:'center'});
    return;
  }

  // No backend is connected yet. We deliberately do not claim that an email/database submission happened.
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('BIT application ready for backend integration:', data);

  form.reset();
  success.classList.add('show');
  success.scrollIntoView({behavior:'smooth', block:'center'});
});
