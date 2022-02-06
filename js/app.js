let button1 = document.querySelector('.button--1');
let button2 = document.querySelector('.button--2');
let button3 = document.querySelector('.button--3');
let dropdown1 = document.querySelector('.nav__dropdown--1');
let dropdown2 = document.querySelector('.nav__dropdown--2');
let dropdown3 = document.querySelector('.nav__dropdown--3');
let header = document.querySelector('.header');
let main = document.querySelector('.main');


// dropdown buttons events

// soluciones button

button1.addEventListener('mouseover', e = () => {
    //add
    dropdown1.classList.add('show');
    //remove
    dropdown2.classList.remove('show');
    dropdown3.classList.remove('show');
    setTimeout(() => {
        dropdown1.classList.remove('show');

    }, 2000);
});
dropdown1.addEventListener('mouseout', e = () => {
    setTimeout(() => {
        dropdown1.classList.remove('show');

    }, 1000);

});

// cultura button

button2.addEventListener('mouseover', e = () => {
    //add
    dropdown2.classList.add('show');
    //remove
    dropdown1.classList.remove('show');
    dropdown3.classList.remove('show');
    setTimeout(() => {
        dropdown2.classList.remove('show');

    }, 2000);

});
dropdown2.addEventListener('mouseout', e = () => {
    setTimeout(() => {
        dropdown2.classList.remove('show');

    }, 1000);

});

// exevi button

button3.addEventListener('mouseover', e = () => {
    //add
    dropdown3.classList.add('show');
    //remove
    dropdown2.classList.remove('show');
    dropdown1.classList.remove('show');
    setTimeout(() => {
        dropdown3.classList.remove('show');

    }, 2000);

});
dropdown3.addEventListener('mouseout', e = () => {
    setTimeout(() => {
        dropdown3.classList.remove('show');

    }, 1000);

});


// hamburguer button

const button = document.querySelector(".button-hamburguer");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
let contador = 0;
let mobileMenu = document.querySelector('.mobileMenu');
let dropdownButton = document.querySelectorAll('.dropdown__button');

// mobile menu events

dropdownButton.forEach(el => {
    el.addEventListener('click', e => {
        if (el.className == 'mobileMenu__li dropdown__button active') {
            el.classList.remove('active');

        } else {
            dropdownButton.forEach(el => {
                el.classList.remove('active');

            });
            el.classList.add('active');

        }

    });
});

header.style.transform = "";
main.style.transform = "";


button.addEventListener("click", (e) => {
    contador = contador + 1;
    if (contador == 1) {
        line1.classList.add("animation-1");
        line2.classList.add("animation-3");
        line3.classList.add("animation-2");
        line1.classList.remove("no-animation");
        line2.classList.remove("no-animation");
        line3.classList.remove("no-animation");
        main.style.transform = "";
        main.classList.add("move");
        header.style.transform = "";
        mobileMenu.inert = false;
        header.classList.add("move");
        contador = contador - 2;

    } else {
        line1.classList.remove("animation-1");
        line2.classList.remove("animation-3");
        line3.classList.remove("animation-2");
        // header.classList.remove("move");
        mobileMenu.inert = true;
        main.style.transform = "none";
        header.style.transform = "none";
        dropdownButton.forEach(el => {
            el.classList.remove('active');
        });
    }
});

//search button


const searchButton = document.querySelector('.nav__button--search--img');
const searchInput = document.querySelector('.nav__button--search--input');

searchInput.value = '';

searchButton.addEventListener('click', e => {

    if (searchInput.className == 'nav__button--search--input show') {
        searchInput.classList.remove('show');
        searchInput.inert = true
        searchInput.value = '';
    } else {
        searchInput.classList.add('show');
        searchInput.inert = false
    }
});

window.onscroll = function () {
    var y = window.scrollY;
    console.log(y);
};