// let button = document.getElementsByClassName('js-btn').onclick = function () {
//    button = (button == 'active')
// }

// onclick="this.className = (this.className == 'square' ? 'square-new' : 'square')"

let buttons = document.querySelectorAll('.js-btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {

        // убираем класс active у всех кнопок
        buttons.forEach(function (buttonItem) {
            buttonItem.classList.remove('active');
        });

        // добавляем класс на кнопку на которую нажали
        button.classList.add('active');
    });
});


let splide = new Splide( '.splide', {
    perMove: 1,
    pagination: false,
    gap: '40px',
    autoWidth: true,
    padding: '40px'
} );

splide.mount();

let options = {
    perPage: 3,
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