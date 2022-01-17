const menu = document.querySelector('.liste-nav');
const btnMenu = document.querySelector('.btn-toggle-container');
const allNavItem = document.querySelectorAll('.item-nav');
const btn = document.querySelector('.btn1');

const imgProfil = document.querySelector('.imgProfil');
const textAccueil = document.querySelector('.text-accueil');

gsap.from(imgProfil, {x: 500, duration:1.5, ease : 'bounce'});
gsap.from(textAccueil, {x: -500, duration:1.5, ease : 'bounce'});
gsap.from(menu, {opacity:0, duration:1.5, delay:2});



btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active-menu')
})

allNavItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active-menu')
        btn.classList.toggle('active')
    })
})

btn.addEventListener('click', ()=> {
    btn.classList.toggle('active')
})