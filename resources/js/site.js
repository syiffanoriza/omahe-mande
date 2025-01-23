import 'flowbite';

ScrollReveal().reveal('.sr-200', { delay: 200 })
ScrollReveal().reveal('.sr-300', { delay: 300 })
ScrollReveal().reveal('.sr-400', { delay: 400 })
ScrollReveal().reveal('.sr-500', { delay: 500 })

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav-bar');
    const navbtn = document.getElementById('nav-toggle');
    const navitems = document.getElementsByClassName('nav-item');
    const isScrolled = window.scrollY > window.innerHeight;

    navbar.classList.toggle('pb-20', !isScrolled);
    navbar.classList.toggle('bg-gradient-to-b', !isScrolled);
    navbar.classList.toggle('from-[#101010ce]', !isScrolled);
    navbar.classList.toggle('bg-backdrop', isScrolled);
    navbar.classList.toggle('shadow-lg', isScrolled);
    navbtn.classList.toggle('text-white', !isScrolled);
    navbtn.classList.toggle('text-primary-900', isScrolled);
    for (let i = 0; i < navitems.length; i++) {
        navitems[i].classList.toggle('text-white', !isScrolled);
        navitems[i].classList.toggle('text-typography-900', isScrolled);
    }
});

shuffleIndexHeader()
setInterval(shuffleIndexHeader, 5000);
setInterval(shuffleJumbotronImg, 5000);