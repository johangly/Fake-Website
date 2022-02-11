let button1 = document.querySelector('.button--1');
let button2 = document.querySelector('.button--2');
let button3 = document.querySelector('.button--3');
let dropdown1 = document.querySelector('.nav__dropdown--1');
let dropdown2 = document.querySelector('.nav__dropdown--2');
let dropdown3 = document.querySelector('.nav__dropdown--3');
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let backToTop = document.querySelector('.backToTop');


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
const mobileButtonLink = document.querySelectorAll('.mobileMenu__li--a');
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
mobileButtonLink.forEach(el => {
    el.setAttribute('tabindex', '-1');
});

header.style.transform = "";
main.style.transform = "";
header.style.transition = "none";

button.addEventListener("click", (e) => {
    contador = contador + 1;
    if (contador == 1) {
        line1.classList.add("animation-1");
        line2.classList.add("animation-3");
        line3.classList.add("animation-2");
        line1.classList.remove("no-animation");
        line2.classList.remove("no-animation");
        line3.classList.remove("no-animation");
        header.style.transition = "500ms ease all";
        main.style.transform = "";
        main.classList.add("move");
        header.style.transform = "";
        mobileMenu.inert = false;
        mobileMenu.setAttribute("aria-hidden", "false");
        header.classList.add("move");
        contador = contador - 2;
        mobileButtonLink.forEach(el => {
            el.setAttribute('tabindex', '0');
        });

    } else {
        line1.classList.remove("animation-1");
        line2.classList.remove("animation-3");
        line3.classList.remove("animation-2");
        // header.classList.remove("move");
        mobileButtonLink.forEach(el => {
            el.setAttribute('tabindex', '-1');
        });
        mobileMenu.inert = true;
        main.style.transform = "none";
        header.style.transform = "none";
        mobileMenu.setAttribute("aria-hidden", "true");
        dropdownButton.forEach(el => {
            el.classList.remove('active');
        });
    }
});

//search button


const searchButton = document.querySelector('.nav__button--search--img');
const searchInput = document.querySelector('.nav__button--search--input');

searchInput.value = '';
searchInput.style.transition = "none";
searchButton.addEventListener('click', e => {

    if (searchInput.className == 'nav__button--search--input show') {
        searchInput.classList.remove('show');
        searchInput.inert = true
        searchInput.value = '';
        searchButton.style.backgroundColor = "transparent";

    } else {
        searchInput.classList.add('show');
        searchInput.inert = false;
        searchInput.style.transition = "300ms ease all";
        searchButton.style.transition = "300ms ease all";
        searchButton.style.backgroundColor = "#e6e6e650";
    }
});

window.onscroll = function () {
    var y = window.scrollY;
    if (y => 100) {
        header.classList.add('scrolled');
        header.style.transition = "400ms ease all";
        backToTop.classList.add('opacity-1');

    }
    if (y < 100) {
        header.classList.remove('scrolled');
        backToTop.classList.remove('opacity-1');
    }
};

//cerrar el input de search al presionar ENTER

function onKeyDownHandler(event) {
    var codigo = event.which || event.keyCode;
    if (codigo === 13) {
        console.log("Tecla ENTER");
        searchInput.classList.remove('show');
        searchInput.inert = true
        searchInput.value = '';
    }
}
