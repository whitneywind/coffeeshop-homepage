let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


// toggle button text on mouseover
const langBtn = document.querySelector('#lang-btn');
langBtn.addEventListener('mouseover', textToggle);
langBtn.addEventListener('mouseout', textToggle)

function textToggle() {
    langBtn.innerText === 'lang (eng)' ? langBtn.innerText = '한국어로' : langBtn.innerText = 'lang (eng)';
}
