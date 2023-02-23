const addClass = document.querySelectorAll('.faq');


addClass.forEach(el => el.addEventListener('click', () => el.classList.toggle('active')))