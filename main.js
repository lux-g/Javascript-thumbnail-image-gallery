const current = document.querySelector('.current');
const imgs = document.querySelectorAll('.small')

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    current.src = e.target.src;

    imgs.forEach(img => (img.style.border = "none"));

    e.target.style.border = "1px solid black";
}
