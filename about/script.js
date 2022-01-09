let slider = new Splide('.products-slider', {
    perPage: 4,
    perMove: 1,
    pagination: false,
    gap: '10px',
});

let sliderInit = false;

function checkSlider() {
    if (window.innerWidth > 768) {
        if (!sliderInit) {
            slider.mount();
            sliderInit = true;
        }
    } else {
        if (sliderInit) {
            slider.destroy();
            sliderInit = false;
        }
    }
}

checkSlider();
window.addEventListener('resize', checkSlider);

let options = {
    perPage: 4,
    perMove: 1,
    pagination: false,
    gap: '20px',
};

let slider2 = new Splide('.vacancies-slider', options);

slider2.mount();

function checkSlider2() {
    if (window.innerWidth < 769) {
        slider2.options = {
            perPage: 1,
            fixedWidth: 215,
        };
    } else {
        slider2.options = {
            perPage: 4,
            fixedWidth: null,
        };
    }
}

checkSlider2();
window.addEventListener('resize', checkSlider2);