document.addEventListener(`scroll`, () => {
    document.querySelector(`nav`).classList.toggle(`window-scroll`, window.scrollY > 50);
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener(`click`, () => {
        faq.classList.toggle(`open`);
        faq.addEventListener('animationend', () => {
            faq.classList.remove(`animate__animated`, `animate__flipInX`);
        });
        faq.classList.add(`animate__animated`, `animate__flipInX`);
        const icon = faq.querySelector(`.faq__icon i`);
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    });

});



const menu = document.querySelector(`.nav__menu`);
const menuBtn = document.querySelector(`#open-menu-btn`);
const closeBtn = document.querySelector(`#close-menu-btn`);

menuBtn.addEventListener(`click`, () => {
    menu.style.display = `flex`;
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = `none`;
    menu.classList.remove(`animate__bounceOutRight`);
    menu.classList.add(`animate__bounceInRight`);
});

console.log(window.getComputedStyle(menu).display);

menu.addEventListener('animationend', () => {
    console.log(window.getComputedStyle(menu).display);
    if (window.getComputedStyle(menu).display === `flex`) {
        menu.style.display = `flex`;
    } else {
        menu.style.display = `none`;
    }
});

const closeNav = function () {
    menu.classList.remove(`animate__bounceInRight`);
    menu.classList.add(`animate__bounceOutRight`);
    closeBtn.style.display = "none";
    menuBtn.style.display = `inline-block`;
};

closeBtn.addEventListener(`click`, closeNav);

