//бургер меню

      (function () {
        const burgerItem = document.querySelector('.burger');
        const crest = document.querySelector('.header_nav-close');
        const menu = document.querySelector('.header');
        burgerItem.addEventListener('click', () => {
          crest.classList.add('close_active');
        });
        burgerItem.addEventListener('click', () => {
          menu.classList.add('header_active');
        });
        crest.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        crest.addEventListener('click', () => {
          crest.classList.remove('close_active');
        });
      }());

      (function () {
        const kontakty = document.querySelector('.button8');
        const price = document.querySelector('.button9');
        const video = document.querySelector('.button10');
        const portfolio = document.querySelector('.button11');
        const katalog = document.querySelector('.button12');
        const menu = document.querySelector('.header');
        const crest = document.querySelector('.header_nav-close');
        kontakty.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        price.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        video.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        portfolio.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        katalog.addEventListener('click', () => {
            menu.classList.remove('header_active');
        });
        kontakty.addEventListener('click', () => {
            crest.classList.remove('header_active');
        });
        price.addEventListener('click', () => {
          crest.classList.remove('header_active');
        });
        video.addEventListener('click', () => {
          crest.classList.remove('header_active');
        });
        portfolio.addEventListener('click', () => {
          crest.classList.remove('header_active');
        });
        katalog.addEventListener('click', () => {
          crest.classList.remove('header_active');
        });
      }());

      //переход на калькулятор

      var vb1 = document.getElementById("vb1");
      if (vb1) {
        vb1.addEventListener("click", function (e) {
          window.location.href = 'calc.html';
        });
      }
      
      var vb2 = document.getElementById("vb2");
      if (vb2) {
        vb2.addEventListener("click", function (e) {
          window.location.href = 'calc.html';
        });
      }
      
      var vb3 = document.getElementById("vb3");
      if (vb3) {
        vb3.addEventListener("click", function (e) {
          window.location.href = 'calc.html';
        });
      }
      
      var vb4 = document.getElementById("vb4");
      if (vb4) {
        vb4.addEventListener("click", function (e) {
          window.location.href = 'calc.html';
        });
      }

      var zap = document.getElementById("button12");
      if (zap) {
        zap.addEventListener("click", function (e) {
          window.location.href = 'calc.html';
        });
      }

      // слайдер и смена изображений
const tovari = {
  platya: [
    './assets/jpg/image-8@2x.jpg',
    './assets/jpg/image-9@2x.jpg',
    './assets/jpg/image-10@2x.jpg',
    './assets/jpg/image-81@2x.jpg',
    './assets/jpg/image-91@2x.jpg',
    './assets/jpg/image-101@2x.jpg',
    './assets/jpg/image 15.jpg',
    './assets/jpg/image 17.jpg',
    './assets/jpg/image 34.jpg'
  ],
  bruki: [
      './assets/jpg/image 26.jpg',
      './assets/jpg/image 25.jpg',
      './assets/jpg/image 24.jpg',
      './assets/jpg/image 35.jpg',
      './assets/jpg/image 36.jpg',
      './assets/jpg/image 37.jpg',
      './assets/jpg/image 38.jpg',
      './assets/jpg/image 39.jpg',
      './assets/jpg/image 40.jpg',
      './assets/jpg/image 41.jpg'
    ],
  topy: [
      './assets/jpg/image 18.jpg',
      './assets/jpg/image 19.jpg',
      './assets/jpg/image 20.jpg',
      './assets/jpg/image 27.jpg',
      './assets/jpg/image 28.jpg',
      './assets/jpg/image 29.jpg',
      './assets/jpg/image 30.jpg',
      './assets/jpg/image 31.jpg',
      './assets/jpg/image 32.jpg',
      './assets/jpg/image 33.jpg',
    ],
  ubki: [
    './assets/jpg/image 21.jpg',
    './assets/jpg/image 22.jpg',
    './assets/jpg/image 23.jpg',
    './assets/jpg/image 42.jpg',
    './assets/jpg/image 43.jpg',
    './assets/jpg/image 44.jpg',
    './assets/jpg/image 45.jpg',
    './assets/jpg/image 46.jpg',
    './assets/jpg/image 47.jpg',
    './assets/jpg/image 48.jpg',
    ],
}

const imagesLeft = Array.from(document.querySelector('.slider_left').children);
const imagesCenter = Array.from(document.querySelector('.slider_center').children);
const imagesRight = Array.from(document.querySelector('.slider_right').children);

let tovar = 'platya';

function redrawPhoto(arr) {
  arr.forEach((image, index) => image.src = tovari[tovar][index]);
}


function changeImage (event) {
  tovar = event.target.dataset.tovar;
  redrawPhoto(imagesCenter);
  const buttons = document.querySelector('.photo__buttons').children;
  Array.from(buttons).forEach(button => {
    if (button.dataset.tovar == tovar) {
      button.classList.add('button_color');
    } else {
      button.classList.remove('button_color');
    };
  });
  
};

function buttonClick (event) {
  if (event.target.classList.contains('button')) {
    console.log("wee");
    changeImage (event);
  };
};

document.querySelector('.photo__buttons').addEventListener('click', buttonClick);

function shiftPhoto(arrow) {
  var el = '';
  const w = window.innerWidth >= 768 ? 2 : 1;
  if (arrow == 'left') {
    tovari[tovar] =  tovari[tovar].slice(w).concat( tovari[tovar].slice(0, w));
  } else if (arrow == 'right') {
    tovari[tovar] =  tovari[tovar].slice(-w).concat( tovari[tovar].slice(0, -w));
  }
}

const slider = document.querySelector('.slider');

const buttonLeft = document.querySelector('.button_slider_left');
const buttonRight = document.querySelector('.button_slider_right');

function sliderLeft() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_left');
  shiftPhoto('left');
  redrawPhoto(imagesRight);
};

function sliderRight() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_right');
  shiftPhoto('right');
  redrawPhoto(imagesLeft);
};

slider.addEventListener('animationend', () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove('move_left');
  slider.classList.remove('move_right');
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
});


buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);
