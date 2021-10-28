let slider = new Splide('.products-slider', {
    perPage: 4,
    perMove: 1,
    pagination: false,
    gap: '10px',
});

if (window.innerWidth > 768) {
    slider.mount();
}


let options = {
    perPage: 4,
    perMove: 1,
    pagination: false,
    gap: '20px',
};

if (window.innerWidth < 769) {
    options.perPage = 1;
    options.fixedWidth = 215;
}

let slider2 = new Splide('.vacancies-slider', options);

slider2.mount();