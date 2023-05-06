let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-app');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.texto-heroe', {delay:200, origin:'top'});
sr.reveal('.imagen', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scrolldown', {delay:450, origin:'right'});