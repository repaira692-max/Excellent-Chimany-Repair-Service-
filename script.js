const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav nav');
if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    'Hello, I want to book chimney home service.',
    '',
    'Name: ' + data.get('name'),
    'Mobile: ' + data.get('phone'),
    'Service: ' + data.get('service'),
    'City: ' + data.get('city'),
    'Address / PIN: ' + data.get('address'),
    'Problem: ' + (data.get('issue') || 'Not specified')
  ].join('\n');
  document.getElementById('formStatus').textContent = 'Opening WhatsApp with your booking details…';
  const url = 'https://wa.me/918373888690?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener,noreferrer');
});
