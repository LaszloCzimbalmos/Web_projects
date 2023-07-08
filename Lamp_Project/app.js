const button = document.getElementById('btn');
const button_tgl = document.getElementById('btn-span');
const light = document.querySelector('.light');

button.addEventListener("click", function () {
    light.classList.toggle('show');
    button.classList.toggle('btn-toggle-bg');
    button_tgl.classList.toggle('btn-toggle');
})