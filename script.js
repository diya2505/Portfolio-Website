let menuIcon = document.querySelector('3menu-icon');
let navbar = document.querySelector('.navbar');

let sections = documents.querySelectorAll('section');
let navLinks = document.querySelector('header nav');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = windows.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('avtive');
                document.querySelector('headeer nav a [href*=' + id + ' ]').classList
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active');
}