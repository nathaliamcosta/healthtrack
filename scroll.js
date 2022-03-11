window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-top');
    header.classList.toggle('active-scroll', window.scrollY > 80);
});